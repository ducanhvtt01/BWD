document.addEventListener('DOMContentLoaded',()=>{
  // Header scroll effect
  const header=document.querySelector('header');
  window.addEventListener('scroll',()=>{
    if(window.scrollY>60){
      header.classList.add('scrolled');
    }else header.classList.remove('scrolled');
  });

  // AOS
  AOS.init({duration:800,once:true});

  // Swiper
  const swiperEl=document.querySelector('.swiper');
  if(swiperEl){
    const swiper = new Swiper('.swiper',{
      loop:true,
      autoplay:{delay:4000},
      pagination:{el:'.swiper-pagination',clickable:true}
    });
  }
});
