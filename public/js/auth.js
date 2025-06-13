// Hàm kiểm tra đăng nhập
function checkAuth() {
    const token = localStorage.getItem('token');
    const loginNav = document.getElementById('loginNav');
    const profileNav = document.getElementById('profileNav');
    const profileName = document.querySelector('.profile-name');
    const profileAvatar = document.querySelector('.profile-avatar');

    if (token) {
        // Đã đăng nhập: ẩn Đăng nhập, hiện Profile
        if (loginNav) loginNav.style.display = 'none';
        if (profileNav) profileNav.style.display = '';
        
        // Lấy thông tin user từ localStorage
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && profileName) {
            profileName.textContent = user.fullName;
        }
    } else {
        // Chưa đăng nhập: hiện Đăng nhập, ẩn Profile
        if (loginNav) loginNav.style.display = '';
        if (profileNav) profileNav.style.display = 'none';
        if (profileName) profileName.textContent = '';
        if (profileAvatar) profileAvatar.src = '/image/default-avatar.png';
    }
}

// Hàm đăng xuất
function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/';
}

// Gọi hàm kiểm tra khi trang được tải
document.addEventListener('DOMContentLoaded', checkAuth);

// Gọi hàm kiểm tra khi localStorage thay đổi
window.addEventListener('storage', function(e) {
    if (e.key === 'token' || e.key === 'user') {
        checkAuth();
    }
});

function showToast(message, duration = 3000) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.className = 'toast show';
    setTimeout(() => {
        toast.className = 'toast';
    }, duration);
} 