const jwt = require('jsonwebtoken');

const JWT_SECRET = 'ace_skills_secret_key_2024'; // Trong thực tế nên đặt trong biến môi trường

const auth = (req, res, next) => {
    try {
        // Lấy token từ header
        const token = req.header('Authorization')?.replace('Bearer ', '');
        
        if (!token) {
            return res.status(401).json({ message: 'Không tìm thấy token xác thực' });
        }

        // Xác thực token
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Token không hợp lệ' });
    }
};

module.exports = { auth, JWT_SECRET }; 