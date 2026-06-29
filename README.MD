# 🇮🇳 TravelBharat

TravelBharat is a full-stack tourism web application that helps users discover beautiful destinations across India. Users can explore states, view popular tourist places, search destinations, and get complete travel information. An admin dashboard is also available to manage destinations dynamically.

---

## 🚀 Features

- Explore Indian States
- View Tourist Destinations
- Search by State, Place Name & Category
- Dynamic Place Details
- Responsive UI
- Admin Dashboard
- Add Destination
- Edit Destination
- Delete Destination
- Dynamic Categories
- MongoDB Database Integration
- REST API

---

## 🛠 Tech Stack

### Frontend
- React.js
- React Router
- Tailwind CSS
- Axios
- AOS Animation

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

---

## 📂 Project Structure

```
TravelBharat
│
├── client
│   ├── src
│   ├── pages
│   ├── components
│   ├── services
│   └── App.jsx
│
├── server
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── config
│   └── server.js
```

---

## ⚙ Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/travelbharat.git
```

### Frontend

```bash
cd client
npm install
npm run dev
```

### Backend

```bash
cd server
npm install
npm start
```

---

## Environment Variables

Create a `.env` file inside the server folder.

```env
PORT=5000
MONGO_URI=Your_MongoDB_Connection_String
```

---

## API Endpoints

### Places

| Method | Endpoint |
|---------|----------|
| GET | /places |
| GET | /places/:id |
| POST | /places |
| PUT | /places/:id |
| DELETE | /places/:id |
| GET | /places/states |
| GET | /places/state/:state |

---

## Screenshots

### Home Page

(Add Screenshot)

### Admin Dashboard

(Add Screenshot)

### Place Details

(Add Screenshot)

---

## Future Improvements

- User Authentication
- Wishlist
- Reviews & Ratings
- Image Gallery
- Trip Planner
- Weather Integration
- AI Travel Recommendation

---

## Author

**Abhishek Kumar**

Full Stack Web Developer

GitHub:
https://github.com/yourusername

LinkedIn:
https://linkedin.com/in/yourprofile

---

## License

This project is developed for learning and hackathon purposes.