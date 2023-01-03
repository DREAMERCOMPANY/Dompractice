
export default function slider(){

    const d = document;

    const $nextBtn = d.querySelector(".slider-btns .next");
    const $prevBtn = d.querySelector(".slider-btns .prev");
    const $slides = d.querySelectorAll(".slider-slide");
    
    let i = 0;
    
    $nextBtn.addEventListener("click", e => {
      e.preventDefault();
      $slides[i].classList.remove("active");
      i++;
    
      if (i >= $slides.length) {
        i = 0;
      }
    
      $slides[i].classList.add("active");
    });
    
    $prevBtn.addEventListener("click", e => {
      e.preventDefault();
      $slides[i].classList.remove("active");
      i--;
    
      if (i < 0) {
        i = $slides.length - 1;
      }
    
      $slides[i].classList.add("active");
    });

}

