const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://vuhk2601:Vuhk2601%40@aceskills.itq7wiz.mongodb.net/', {
            // useNewUrlParser: true, // có thể bỏ vì đã deprecated
            // useUnifiedTopology: true // có thể bỏ vì đã deprecated
        });
        console.log(`MongoDB đã kết nối: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Lỗi kết nối MongoDB: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB; 