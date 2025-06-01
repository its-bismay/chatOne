# 💬 Chat App

A modern, real-time chat application built with React and Node.js, featuring instant messaging, user authentication, and a sleek user interface.

## ✨ Features

- **Real-time messaging** - Instant communication powered by Socket.IO
- **User authentication** - Secure login and registration system
- **Modern UI** - Clean and responsive design with Tailwind CSS
- **Cross-platform** - Works seamlessly across desktop and mobile devices
- **Fast performance** - Optimized with Vite for lightning-fast development and builds

## 🚀 Tech Stack

### Frontend
- **React** - Modern JavaScript library for building user interfaces
- **Vite** - Next-generation frontend tooling for faster development
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development

### Backend
- **Node.js** - JavaScript runtime for server-side development
- **Express.js** - Fast and minimalist web framework
- **MongoDB** - NoSQL database for flexible data storage
- **Socket.IO** - Real-time bidirectional event-based communication

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas)

## 🛠️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/chat-app.git
cd chat-app
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/chatapp
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

Start the backend server:
```bash
npm run dev
```

### 3. Frontend Setup
Open a new terminal and navigate to the frontend directory:
```bash
cd frontend
npm install
```

Create a `.env` file in the frontend directory:
```env
VITE_API_URL=http://localhost:5000
VITE_SOCKET_URL=http://localhost:5000
```

Start the frontend development server:
```bash
npm run dev
```

## 🔧 Available Scripts

### Backend
- `npm start` - Start the production server
- `npm run dev` - Start the development server with nodemon
- `npm test` - Run tests

### Frontend
- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint

## 🌐 Environment Variables

### Backend (.env)
| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port | `5000` |
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/chatapp` |
| `JWT_SECRET` | JWT secret key | `your_secret_key` |
| `NODE_ENV` | Environment mode | `development` |

### Frontend (.env)
| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API URL | `http://localhost:5000` |
| `VITE_SOCKET_URL` | Socket.IO server URL | `http://localhost:5000` |

## 🚀 Deployment

### Backend Deployment
1. Set up your production MongoDB database
2. Configure environment variables for production
3. Deploy to platforms like Heroku, Railway, or DigitalOcean

### Frontend Deployment
1. Build the production bundle:
   ```bash
   npm run build
   ```
2. Deploy the `dist` folder to platforms like Vercel, Netlify, or GitHub Pages

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **BIBHABASU** - *Initial work* - [YourGitHub](https://github.com/its-bismay)

## 🙏 Acknowledgments

- Thanks to the React and Node.js communities
- Socket.IO for real-time communication capabilities
- Tailwind CSS for the amazing utility-first approach

---

⭐ **Star this repository if you found it helpful!**