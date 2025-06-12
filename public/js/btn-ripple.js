// Hiệu ứng ripple cho mọi nút .btn và .btn-learn
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.btn, .btn-learn').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      // Xóa ripple cũ còn sót lại (nếu có)
      btn.querySelectorAll('.ripple').forEach(function (el) { el.remove(); });
      // Tạo ripple mới
      const circle = document.createElement('span');
      circle.classList.add('ripple');
      const rect = btn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 0.8;
      circle.style.width = circle.style.height = size + 'px';
      circle.style.left = (e.clientX - rect.left - size/2) + 'px';
      circle.style.top = (e.clientY - rect.top - size/2) + 'px';
      btn.appendChild(circle);
      setTimeout(function () { circle.remove(); }, 620);
    });
  });
});
