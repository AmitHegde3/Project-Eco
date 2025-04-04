from flask import Flask, request, jsonify
import os
from dotenv import load_dotenv
import psycopg2
from psycopg2.extras import RealDictCursor

load_dotenv()

app = Flask(__name__)

# Database connection
def get_db_connection():
    conn = psycopg2.connect(
        host=os.getenv('DB_HOST'),
        database=os.getenv('DB_NAME'),
        user=os.getenv('DB_USER'),
        password=os.getenv('DB_PASSWORD')
    )
    return conn

@app.route('/analyze', methods=['POST'])
def analyze():
    input_data = request.form
    if 'image' in input_data:
        # Placeholder for image processing (e.g., LLM integration)
        product_name = 'Plastic Water Bottle'
    elif 'text' in input_data:
        product_name = input_data['text']
    else:
        return jsonify({'error': 'Invalid input'}), 400

    # Query database for product
    conn = get_db_connection()
    cur = conn.cursor(cursor_factory=RealDictCursor)
    cur.execute("SELECT * FROM products WHERE name ILIKE %s", (f'%{product_name}%',))
    product = cur.fetchone()

    if product:
        # Get alternatives
        cur.execute("SELECT * FROM alternatives WHERE product_id = %s", (product['product_id'],))
        alternatives = cur.fetchall()
    else:
        # Fallback data if product not found
        alternatives = [
            {'alternative_name': 'Reusable Steel Bottle', 'description': 'Durable and eco-friendly', 'carbon_savings': 'Saves 10 kg CO2/year'},
            {'alternative_name': 'Glass Bottle', 'description': 'Recyclable and sustainable', 'carbon_savings': 'Saves 8 kg CO2/year'}
        ]

    cur.close()
    conn.close()

    return jsonify({
        'product': {
            'name': product_name,
            'carbon_footprint': product['carbon_footprint'] if product else 'High'
        },
        'alternatives': alternatives
    })

if __name__ == '__main__':
    port = int(os.getenv('PORT', 5001))
    app.run(debug=True, host='0.0.0.0', port=port)