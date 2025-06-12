document.addEventListener("DOMContentLoaded", function () {
  const videos = [
    "/video/video1.mp4",
    "/video/video2.mp4",
    "/video/video3.mp4",
    "/video/video4.mp4"
    // Thêm các file .mp4 khác nếu muốn
  ];
  let current = 0;
  const videoEl = document.getElementById("heroBgVideo");
  videoEl.loop = false; // Để JS tự lặp

  videoEl.addEventListener("ended", function () {
    current = (current + 1) % videos.length;
    videoEl.src = videos[current];
    videoEl.play();
  });

  // Đảm bảo đúng src lúc reload/truy cập lại trang
  videoEl.src = videos[0];
});
