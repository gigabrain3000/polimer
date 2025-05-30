export function slider() {
    let splide = new Splide(".products-slider", {
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
    
    splide.mount();
    splideWaste.mount();
    document.querySelectorAll(".splide__arrow").forEach(item => item.style.width = "4em");
    document.querySelectorAll(".splide__arrow").forEach(item => item.style.height = "4em");
}
