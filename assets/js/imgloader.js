document.addEventListener("DOMContentLoaded", function() {
    let carouselItems = document.querySelectorAll(".carousel-item");
    let currentIndex = 0;

    function showItem(index) {
        carouselItems.forEach(function(item) {
            item.classList.remove("active");
        });
        carouselItems[index].classList.add("active");
    }

    function nextItem() {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        showItem(currentIndex);
    }

    // Preload images
    carouselItems.forEach(function(item) {
        let bgImage = item.dataset.bg;
        if (bgImage) {
            let img = new Image();
            img.src = bgImage;
        }
    });

    // Show first item
    showItem(currentIndex);

    // Automatically transition to next item
    setInterval(nextItem, 5000); // Adjust interval as needed
});
