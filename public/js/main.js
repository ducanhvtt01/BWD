document.addEventListener('DOMContentLoaded',()=>{
  // Header scroll effect
  const header=document.querySelector('header');
  window.addEventListener('scroll',()=>{
    if(window.scrollY>60){
      header.classList.add('scrolled');
    }else header.classList.remove('scrolled');
  });

  // AOS
  AOS.init({
    duration: 800,
    offset: 50,
    once: true
  });

  // Swiper
  const swiperEl=document.querySelector('.swiper');
  if(swiperEl){
    const swiper = new Swiper('.swiper',{
      loop:true,
      autoplay:{delay:4000},
      pagination:{el:'.swiper-pagination',clickable:true}
    });
  }

  // Course search and filter functionality
  const searchInput = document.getElementById('searchInput');
  const filterSelect = document.getElementById('filterSelect');
  const cards = document.querySelectorAll('.card');

  function filterCourses() {
    const searchTerm = searchInput.value.toLowerCase();
    const filterValue = filterSelect.value;

    cards.forEach(card => {
      const title = card.querySelector('h3').textContent.toLowerCase();
      const description = card.querySelector('p').textContent.toLowerCase();
      const isMatchingSearch = title.includes(searchTerm) || description.includes(searchTerm);
      const isMatchingFilter = filterValue === 'all' || card.classList.contains(filterValue);

      if (isMatchingSearch && isMatchingFilter) {
        card.style.display = '';
        card.style.opacity = '1';
      } else {
        card.style.display = 'none';
        card.style.opacity = '0';
      }
    });
  }

  if (searchInput && filterSelect) {
    searchInput.addEventListener('input', filterCourses);
    filterSelect.addEventListener('change', filterCourses);
  }
});


