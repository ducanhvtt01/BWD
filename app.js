const express = require('express');
const path = require('path');
const app = express();

// Middleware để phục vụ các file tĩnh
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route chính
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'courses.html'));
});

// Route cho trang khóa học
app.get('/courses', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'courses.html'));
});

// Route cho trang kỹ năng
app.get('/skills', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'skills.html'));
});

// Route cho trang trẻ em
app.get('/children', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'children.html'));
});

// Route cho trang donate
app.get('/donate', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'donate.html'));
});

// Route cho trang đăng nhập
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

// Route cho trang đăng ký
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'register.html'));
});

// Khởi động server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
}); 