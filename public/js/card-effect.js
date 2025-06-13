// Hiệu ứng nghiêng card theo chuột
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const xMid = rect.width / 2;
      const yMid = rect.height / 2;
      const rotX = ((y - yMid) / yMid) * 9;
      const rotY = ((xMid - x) / xMid) * 11;
      card.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.07)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = "";
    });
  });
});
