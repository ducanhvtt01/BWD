document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('skill-search');
  const categorySelect = document.getElementById('skill-category');
  const cards = document.querySelectorAll('.skill-card');

  function filterSkills() {
    const keyword = searchInput.value.trim().toLowerCase();
    const category = categorySelect.value;
    cards.forEach(card => {
      const title = card.querySelector('h3').innerText.toLowerCase();
      const desc = card.querySelector('p').innerText.toLowerCase();
      const cardCat = card.getAttribute('data-category');
      const matchKeyword = title.includes(keyword) || desc.includes(keyword);
      const matchCategory = (category === 'all') || (category === cardCat);
      card.style.display = (matchKeyword && matchCategory) ? '' : 'none';
    });
  }

  // Tìm kiếm realtime
  searchInput.addEventListener('input', filterSkills);

  // Tìm kiếm khi bấm Enter
  searchInput.addEventListener('keydown', function(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      filterSkills();
    }
  });

  // Lọc khi đổi loại kỹ năng
  categorySelect.addEventListener('change', filterSkills);
});
