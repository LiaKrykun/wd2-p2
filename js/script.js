
// Running images in section FOLLOW US
document.getElementById("scrollLeft").addEventListener("click", function() {
    document.querySelector(".journal-cards-container").scrollBy({ left: -300, behavior: "smooth" });
});

document.getElementById("scrollRight").addEventListener("click", function() {
    document.querySelector(".journal-cards-container").scrollBy({ left: 300, behavior: "smooth" });
});
