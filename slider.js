window.onload = function () {
  const slider = document.querySelector(".slider");
  const img = document.getElementById("s");
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");

  const imgs = [
    "img/1.jpeg","img/2.jpeg","img/3.jpeg","img/4.jpeg",
    "img/5.jpeg","img/6.jpeg"
  ];

  let currentIdx = 0;

  function show() {
    img.src = imgs[currentIdx];
    img.alt = "램프 사진 " + (currentIdx + 1);
  }

  slider.addEventListener("click", function (event) {
    if (event.target.id === "next") {
      currentIdx = (currentIdx + 1) % imgs.length;
      show();
    } else if (event.target.id === "prev") {
      currentIdx = (currentIdx - 1 + imgs.length) % imgs.length;
      show();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") next.click();
    if (e.key === "ArrowLeft") prev.click();
  });

  show();
};

