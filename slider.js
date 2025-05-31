export function slider() {
  let splide = new Splide(".products-slider", {
    arrows: true,
    perPage: 3,
    rewind: true,
    width: "100%",
    gap: "30px",
    pagination: false,
    margin: {left: 50, right: 50},
  });

  let splideWaste = new Splide(".waste-slider", {
    perPage: 2,
    rewind: true,
    width: "100%",
    gap: "30px",
    pagination: false,
    margin: {left: 50, right: 50},
  });

  if (window.innerWidth <= 900) {
    splide.options.perPage = 2;
    splideWaste.options.perPage = 1;
  } 
  
  if (window.innerWidth <= 800) {
    splide.options.arrows = false;
    splide.options.pagination = true;
    document.querySelectorAll(".splide__track").forEach((item, index) => index === 0 ? item.style.margin = "0" : item.style.margin = "0 15%");
  }

  if (window.innerWidth <= 700) {
    splideWaste.options.arrows = false;
    splideWaste.options.pagination = true;
  }

  if (window.innerWidth <= 550) {
    splide.options.perPage = 1;
    document.querySelectorAll(".splide__track")[1].style.margin = "0"
  }

  
  
    
  splide.mount();
  splideWaste.mount();
  document.querySelectorAll(".splide__arrow").forEach(item => item.style.width = "4em");
  document.querySelectorAll(".splide__arrow").forEach(item => item.style.height = "4em");
}
