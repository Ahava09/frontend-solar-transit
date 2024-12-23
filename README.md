# GPS Tracking User Interface

## Project Overview

This project is a **React** user interface for displaying user movements on a **Google Maps** map. Users can view their own movements in real time, while administrators can see the movements of all users.

### Key Features:

- **Basic Authentication**: User authentication with admin and standard user roles.
- **Google Maps**: Display GPS points on a map using the Google Maps API.
- **Movement Tracking**:
  - Each GPS point is represented by a yellow dot.
  - GPS coordinates of person is represented by a blue dot.
  - New GPS points are connected to previous ones with a red line.
  - New GPS coordinates appear in real time on the map.
- **Responsive Design**: The interface is designed to be responsive and works on both mobile and desktop devices.
- **Backend-Frontend Communication**: The frontend communicates with the backend via RESTful APIs.

## Prerequisites

- **Backend Laravel and NodeJS** : Required to run the project locally. [https://github.com/Ahava09/back-end-solar-transit/tree/auth] [https://github.com/Ahava09/back-end-solar-transit]
- **Tailwind CSS**: Used for responsive layouts and interface design.
- **Google Maps API Key**: You must create a Google Maps API key to use it in this project.

## Installation

1. Clone this repository:
   ```bash
   git clone [https://github.com/your-username/repository-name.git](https://github.com/Ahava09/frontend-solar-transit)
   cd repository-name
2. Install dependencies
  npm i --legacy-peer-deps
3. Create a .env file in the project root and add your Google Maps API key:
  REACT_APP_GOOGLE_MAPS_API_KEY=VOTRE_CLE_API
4. Start the development server:
  npm start build
5. Open your browser at http://localhost:3000 to view the application.
# API Endpoints

# Interface Features
Here are the backend API endpoints used in this project:
    - Current Movement : GET HOST/api/gps-coordinates
    - All Movements : GET HOST/api/users
    - Login  : POST HOST/api/login
    - User Management : GET/POST/PUT/DELETE HOST/api/users
    - Address Geocoding : GET HOST/api/geocoding

## Authentication
- Administrator: The administrator can view the movements of all users on the map.
- User: A user can only view their own movements on the map.
## Google Maps Integration
    GPS points: current position of person.
    GPS Points: Each GPS point is displayed as a yellow dot.
    Movement Lines: Each new GPS point is connected to the previous one with a red line.
    Real-Time Updates: When new GPS coordinates are generated, they are displayed on the map instantly.

# Deployment
If the application is deployed, include the deployment link here:
https://frontend-solar-transit.vercel.app
