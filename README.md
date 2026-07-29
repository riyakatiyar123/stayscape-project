# StayScape

StayScape is a full-stack accommodation booking platform that allows users to browse, create, edit, and review property listings. It provides a responsive user experience across desktop and mobile devices with secure authentication, cloud image storage, and interactive maps.

## Live Demo

🔗 https:https://stayscape-project-zdvd.onrender.com/listings
<img width="1470" height="956" alt="Screenshot 2026-07-28 at 23 24 37" src="https://github.com/user-attachments/assets/67647f33-6e3c-4a51-9d78-4e6bafe3e231" />
<img width="1470" height="956" alt="Screenshot 2026-07-28 at 23 24 49" src="https://github.com/user-attachments/assets/bd10c2f5-8155-4077-8d62-4cb702b81a69" />
<img width="1470" height="956" alt="Screenshot 2026-07-28 at 23 25 00" src="https://github.com/user-attachments/assets/cc29b0dd-f4fc-4ec6-bf28-97591f8a8bb0" />
<img width="1470" height="956" alt="Screenshot 2026-07-28 at 23 25 55" src="https://github.com/user-attachments/assets/63c6ea8c-53c9-4dbf-9ed2-684d759b08e8" />

## Features

- User authentication and authorization
- Create, edit, and delete property listings
- Upload listing images using Cloudinary
- Interactive maps with Leaflet and OpenStreetMap
- Geolocation using Nominatim API
- Review and rating system
- Responsive design for desktop and mobile
- Flash messages and error handling

## Tech Stack

### Frontend
- HTML
- CSS
- Bootstrap
- EJS
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication
- Passport.js

### Image Storage
- Cloudinary
- Multer

### Maps & Geocoding
- Leaflet
- OpenStreetMap
- Nominatim API

### Deployment
- Render

##  Project Structure

```
StayScape/
│── models/
│── routes/
│── controllers/
│── middleware.js
│── views/
│── public/
│── app.js
│── package.json
```

##  Installation

Clone the repository

```bash
git clone https://github.com/yourusername/stayscape-project.git
```

Navigate to the project

```bash
cd stayscape-project
```

Install dependencies

```bash
npm install
```

Create a `.env` file and add:

```env
ATLASDB_URL=
SECRET=
CLOUD_NAME=
CLOUD_API_KEY=
CLOUD_API_SECRET=
```

Start the application

```bash
npm start
```

Visit:

```
http://localhost:8080
```

## What I Learned

Through this project, I gained hands-on experience with:

- Building RESTful web applications
- Authentication using Passport.js
- MongoDB data modeling with Mongoose
- Image uploads with Cloudinary and Multer
- Maps and geolocation integration
- Responsive UI design using Bootstrap
- Deploying full-stack applications on Render
- Managing environment variables in production

##  Contributing

Contributions and suggestions are welcome. Feel free to fork the repository and submit a pull request.

## License

This project is for learning and educational purposes.