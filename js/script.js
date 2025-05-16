/* --------------------------------------------------
   Burger menu (mobile)
-------------------------------------------------- */
const burger = document.getElementById('burger');
const nav    = document.getElementById('nav');

if (burger && nav) {
  burger.addEventListener('click', () => {
    nav.classList.toggle('open');
    burger.classList.toggle('open');
  });

  /* Đóng menu khi chọn link (mobile) */
  nav.querySelectorAll('a').forEach(link =>
    link.addEventListener('click', () => nav.classList.remove('open'))
  );
}

/* --------------------------------------------------
   Intersection Observer – fade-in
-------------------------------------------------- */
const faders = document.querySelectorAll('.fade-in');
const appearOnScroll = new IntersectionObserver(
  (entries, obs) => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    obs.unobserve(entry.target);
  }),
  { threshold: 0.25, rootMargin: '0px 0px -50px 0px' }
);
faders.forEach(el => appearOnScroll.observe(el));

// Testimonial Slider
document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.testimonial-track');
  const slides = Array.from(track.children);
  const nextBtn = document.querySelector('.nav-button.next');
  const prevBtn = document.querySelector('.nav-button.prev');
  const dotsContainer = document.querySelector('.testimonial-dots');
  let currentIndex = 0;

  // Tạo dot động
  const dots = slides.map((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'dot';
    dot.setAttribute('aria-label', `Chuyển đến slide ${i + 1}`);
    dot.addEventListener('click', () => moveToSlide(i));
    dotsContainer.appendChild(dot);
    return dot;
  });

  // Set initial position
  const updateSliderPosition = () => {
    const offset = slides[currentIndex].offsetLeft;
    track.style.transform = `translateX(-${offset}px)`;
  };

  // Update dots state
  const updateDotsState = () => {
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });
  };

  // Move to specific slide
  const moveToSlide = (index) => {
    currentIndex = index;
    updateSliderPosition();
    updateDotsState();
  };

  // Handle window resize
  window.addEventListener('resize', () => {
    updateSliderPosition();
  });

  // Next button click (loop)
  nextBtn.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
      moveToSlide(currentIndex + 1);
    } else {
      moveToSlide(0);
    }
  });

  // Previous button click (loop)
  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      moveToSlide(currentIndex - 1);
    } else {
      moveToSlide(slides.length - 1);
    }
  });

  // Initialize
  moveToSlide(0);
});

/* --------------------------------------------------
   Smooth Scroll Polyfill
-------------------------------------------------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      const headerOffset = 80; // Điều chỉnh offset tùy theo chiều cao của header
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

/* ------- phần JS khác của bạn (điểm thưởng, burger menu…) ở dưới ------- */


/* --------------------------------------------------
   Reward & Mission System
-------------------------------------------------- */
let userPoints = 0;
const userPointsEl = document.getElementById('userPoints');
const missionBtns  = document.querySelectorAll('.mission-btn');
const exchangeBtn  = document.getElementById('exchangeBtn');
const getCertBtn   = document.getElementById('getCertBtn');

function updatePointsDisplay() {
  userPointsEl.textContent = userPoints;
  exchangeBtn.disabled = userPoints < 50;
  getCertBtn.disabled  = userPoints < 100;
}
updatePointsDisplay();   // hiển thị lần đầu

missionBtns.forEach(btn =>
  btn.addEventListener('click', () => {
    const point = +btn.dataset.point;
    if (btn.disabled) return;
    userPoints += point;
    btn.disabled = true;
    btn.textContent = `Đã nhận (+${point} điểm)`;
    updatePointsDisplay();
  })
);

exchangeBtn?.addEventListener('click', () => {
  if (userPoints < 50) return;
  userPoints -= 50;
  updatePointsDisplay();
  alert('Bạn đã đổi thành công Voucher 100K!');
  exchangeBtn.disabled = true;
});

getCertBtn?.addEventListener('click', () => {
  if (userPoints < 100) return;
  userPoints -= 100;
  updatePointsDisplay();
  alert('Chúc mừng bạn đã nhận chứng nhận hoàn thành!');
  getCertBtn.disabled = true;
});

/* --------------------------------------------------
   Dark / Light toggle
-------------------------------------------------- */
const schemeToggle = document.createElement('button');
schemeToggle.className = 'btn btn--small';
schemeToggle.textContent = '🌓';
document.querySelector('.header')?.appendChild(schemeToggle);

function setScheme(mode) {
  document.documentElement.setAttribute('color-scheme', mode);
  localStorage.setItem('scheme', mode);
}
schemeToggle.onclick = () =>
  setScheme(localStorage.getItem('scheme') === 'dark' ? 'light' : 'dark');
setScheme(localStorage.getItem('scheme') || 'light');

/* --------------------------------------------------
   MODAL – Đăng ký tình nguyện
-------------------------------------------------- */
(() => {
  const modal = document.getElementById('volModal');
  if (!modal) return;

  const body = document.body;
  const form = modal.querySelector('#volForm');

  /* Mở modal */
  document.querySelectorAll('[data-open="vol"]').forEach(btn =>
    btn.addEventListener('click', e => {
      e.preventDefault();
      modal.hidden = false;
      body.style.overflow = 'hidden';
    })
  );

  /* Đóng modal – click nền mờ hoặc nút × */
  modal.addEventListener('click', e => {
    if (e.target === modal || e.target.dataset.close !== undefined) closeModal();
  });

  /* Thoát bằng ESC */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !modal.hidden) closeModal();
  });

  function closeModal() {
    modal.hidden = true;
    body.style.overflow = '';
  }

  /* Submit demo */
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Cảm ơn bạn đã đăng ký!');
    closeModal();
    form.reset();
  });
})();

/* --------------------------------------------------
   Seed Points – nhiệm vụ đặc biệt cho trẻ em
-------------------------------------------------- */
const KID_SEED_BONUS = 15;
const kidsMission = document.createElement('li');
kidsMission.innerHTML = `
  <span>Quay video hướng dẫn giao tiếp cho học sinh vùng núi</span>
  <button class="btn btn--small btn--primary mission-btn" data-point="${KID_SEED_BONUS}">
    Nhận ${KID_SEED_BONUS} điểm
  </button>`;
document.getElementById('missions')?.querySelector('.missions-list')?.appendChild(kidsMission);

/* Gắn listener cho nút nhiệm vụ mới */
kidsMission.querySelector('.mission-btn').addEventListener('click', function () {
  if (this.disabled) return;
  userPoints += KID_SEED_BONUS;
  this.disabled = true;
  this.textContent = `Đã nhận (+${KID_SEED_BONUS} điểm)`;
  updatePointsDisplay();
});
