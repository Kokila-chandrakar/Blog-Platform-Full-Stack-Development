# Blog Platform - Full Stack Development

A full-stack blog platform built using the MERN stack that allows users to create, manage, and share blog posts with a modern and responsive user interface.

---

## 🚀 Features

* User Authentication & Authorization
* Create, Edit, and Delete Blog Posts
* Responsive User Interface
* RESTful API Integration
* MongoDB Database Support
* Secure Password Hashing
* Rich Content Management
* Scalable Full-Stack Architecture

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* CSS3

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcryptjs
* dotenv

---

## 📂 Project Structure

```bash
Blog-Platform-Full-Stack-Development-main/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/blog-platform.git
cd Blog-Platform-Full-Stack-Development-main
```

---

### 2️⃣ Setup Backend

```bash
cd server
npm install
```

Create a `.env` file inside the server folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run Backend:

```bash
npm run dev
```

---

### 3️⃣ Setup Frontend

Open a new terminal:

```bash
cd client
npm install
npm start
```

---

## 📌 API Endpoints

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | /api/auth/register | Register User |
| POST   | /api/auth/login    | Login User    |
| GET    | /api/posts         | Get All Blogs |
| POST   | /api/posts         | Create Blog   |
| PUT    | /api/posts/:id     | Update Blog   |
| DELETE | /api/posts/:id     | Delete Blog   |

---

## 🎯 Future Improvements

* Blog Categories & Tags
* Dark Mode Support
* Comments & Likes System
* Image Upload Support
* Rich Text Editor
* User Profile Dashboard

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

## 📜 License

This project is licensed under the MIT License.

---

## 👩‍💻 Author

Kokila Chandrakar
B.Tech CSE (AI & ML)
Passionate about Full-Stack Development, AI & Cloud Computing
