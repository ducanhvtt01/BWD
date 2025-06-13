require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const connectDB = require('./backend/config/db');
const authRoutes = require('./backend/routes/auth');

const app = express();

// Kết nối database
connectDB();

// Middleware
app.use(cors());
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use('/api/auth', authRoutes);

// Frontend Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'courses.html'));
});

app.get('/courses', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'courses.html'));
});

app.get('/skills', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'skills.html'));
});

app.get('/children', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'children.html'));
});

app.get('/donate', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'donate.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'register.html'));
});

app.get('/profile', (req, res) => {
    console.log('Truy cập /profile');
    res.sendFile(path.join(__dirname, 'views', 'profile.html'));
});

// Xử lý lỗi
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Có lỗi xảy ra!' });
});

// Khởi động server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
}); 