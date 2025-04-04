# Project Eco

A web application that helps users calculate and reduce their carbon footprint by providing eco-friendly product alternatives.

## How to Run the App

### Prerequisites
- Node.js and npm: For the frontend (install from [nodejs.org](https://nodejs.org)).
- Python 3 and pip: For the backend (install from [python.org](https://python.org)).
- PostgreSQL: For the database (install from [postgresql.org](https://postgresql.org)).

### Steps

#### Set Up the Database
1. Install PostgreSQL and start the service.
2. Create a database:
   ```bash
   createdb eco_database
   ```
3. Run the init.sql script to set up tables and data:
   ```bash
   psql -d eco_database -f database/init.sql
   ```
4. Update backend/.env with your database credentials.

#### Start the Backend
1. Navigate to the backend directory:
   ```bash
   cd Project_Eco/backend
   ```
2. Create and activate a virtual environment (optional but recommended):
   ```bash
   python -m venv ecoenv
   source ecoenv/bin/activate  # On Windows: ecoenv\Scripts\activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Run the Flask app:
   ```bash
   python app.py
   ```
   The backend will run on http://localhost:5001.

#### Start the Frontend
1. Navigate to the frontend directory:
   ```bash
   cd Project_Eco/frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React app:
   ```bash
   npm start
   ```
   The frontend will run on http://localhost:3000.

### Access the App
1. Open your browser and go to http://localhost:3000.
2. Enter product information in the form, including:
   - Product name
   - Product category
   - Usage frequency
3. Click "Calculate Impact" to see:
   - Carbon footprint metrics
   - Product information
   - Eco-friendly alternatives

### Notes
- Ensure the backend is running before starting the frontend, as the frontend makes API calls to http://localhost:5001.
- The default port for the backend is 5001 to avoid conflicts with AirPlay on macOS.
- This is a simplified version suitable for demonstration. For production, add error handling, security, and real data sources.
- The application includes mock data for demonstration purposes. In a real implementation, connect to external carbon footprint APIs or use a comprehensive database.

## Features
- Calculate carbon footprint for various products
- View detailed environmental impact metrics
- Discover eco-friendly product alternatives
- Compare products based on their eco scores

## Project Structure
```
Project_Eco/
├── frontend/            # React-based web interface
│   ├── public/          # Static assets
│   ├── src/             # React components and code
│   └── package.json     # Frontend dependencies
├── backend/             # Flask API server
│   ├── app.py           # Main server code
│   ├── requirements.txt # Python dependencies
│   └── .env             # Environment variables
└── database/            # Database scripts
    └── init.sql         # Database initialization
```

## Technologies Used
- Frontend: React, JavaScript, CSS
- Backend: Flask, Python
- Database: PostgreSQL