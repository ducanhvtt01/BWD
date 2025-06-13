const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

/**
 * Schema người dùng
 * Định nghĩa cấu trúc dữ liệu cho người dùng trong hệ thống
 */
const userSchema = new mongoose.Schema({
    // Email
    email: {
        type: String,
        required: [true, 'Email là bắt buộc'],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Email không hợp lệ']
    },
    // Họ và tên đầy đủ
    fullName: {
        type: String,
        required: [true, 'Họ và tên là bắt buộc'],
        trim: true
    },
    // Mật khẩu
    password: {
        type: String,
        required: [true, 'Mật khẩu là bắt buộc'],
        minlength: [6, 'Mật khẩu phải có ít nhất 6 ký tự']
    },
    // Quê quán (không bắt buộc)
    hometown: {
        type: String,
        trim: true,
        default: ''
    },
    // Thời gian tạo
    createdAt: {
        type: Date,
        default: Date.now
    },
    // Thời gian cập nhật
    updatedAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true // Tự động cập nhật createdAt và updatedAt
});

// Middleware để mã hóa mật khẩu trước khi lưu
userSchema.pre('save', async function(next) {
    // Chỉ mã hóa mật khẩu nếu nó được thay đổi
    if (!this.isModified('password')) return next();
    
    try {
        // Tạo salt với 10 rounds
        const salt = await bcrypt.genSalt(10);
        // Mã hóa mật khẩu với salt
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});

// Phương thức để so sánh mật khẩu
userSchema.methods.comparePassword = async function(candidatePassword) {
    try {
        return await bcrypt.compare(candidatePassword, this.password);
    } catch (error) {
        throw error;
    }
};

// Tạo index để tối ưu tốc độ tìm kiếm
userSchema.index({ email: 1 });
userSchema.index({ username: 1 });

const User = mongoose.model('User', userSchema);

module.exports = User; 