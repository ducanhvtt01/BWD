/* =====================================================
   SWIPER INIT – v7-pro  (ACE SKILLS)
   ===================================================== */
document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.testimonial-swiper', {
    slidesPerView: 1,
    speed: 700,                    // 0.7 s chuyển
    loop: false,                   // đơn giản, tránh slide ảo
    grabCursor: true,

    /* autoplay 7 s / slide */
    autoplay: {
      delay: 7000,
      disableOnInteraction: false
    },

    /* pagination – sinh bullet thủ công */
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      bulletClass: 'bullet',
      bulletActiveClass: 'bullet--active',
      renderBullet: (idx, className) => `<span class="${className}"></span>`
    },

    /* arrows */
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });

  /* --- đồng bộ chấm “thủ công” cho mọi sự kiện --- */
  const setActiveBullet = () => {
    const bullets = swiper.pagination.el.querySelectorAll('.bullet');
    bullets.forEach((b, i) => b.classList.toggle('bullet--active', i === swiper.realIndex));
  };

  /* khi slide thay đổi bằng bất kỳ cách nào */
  swiper.on('slideChange transitionEnd touchEnd', setActiveBullet);

  /* click vào bullet */
  swiper.pagination.el.addEventListener('click', e => {
    if (e.target.classList.contains('bullet')) setActiveBullet();
  });

  /* thiết lập ban đầu */
  setActiveBullet();
});
