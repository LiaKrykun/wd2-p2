
// Running images in section FOLLOW US
document.getElementById("scrollLeft").addEventListener("click", function() {
    document.querySelector(".journal-cards-container").scrollBy({ left: -300, behavior: "smooth" });
});

document.getElementById("scrollRight").addEventListener("click", function() {
    document.querySelector(".journal-cards-container").scrollBy({ left: 300, behavior: "smooth" });
});


document.addEventListener("DOMContentLoaded", function () {
    const categoryItems = document.querySelectorAll(".category-item");
    const categoryImage = document.querySelector(".category-image");
    const defaultImage = categoryImage.src;

    categoryItems.forEach((item) => {
      item.addEventListener("mouseenter", function () {
        const imageUrl = this.dataset.image;
        categoryImage.style.opacity = "0";
        setTimeout(() => {
          categoryImage.src = imageUrl;
          categoryImage.style.opacity = "1";
        }, 300);
        this.querySelector(".category-card").classList.add("active");
      });

      item.addEventListener("mouseleave", function () {
        categoryImage.style.opacity = "0";
        setTimeout(() => {
          categoryImage.src = defaultImage;
          categoryImage.style.opacity = "0.95";
        }, 300);
        this.querySelector(".category-card").classList.remove("active");
      });
    });
  });