let count = 0;
const cartCount = document.getElementById("cartCount");
const buttons = document.querySelectorAll(".addCart");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        count++;
        cartCount.textContent = count;

        btn.textContent = "ADDED ✓";
        btn.disabled = true;

        setTimeout(() => {
            btn.textContent = "ADD";
            btn.disabled = false;
        }, 1500);
    });
});

window.addEventListener("scroll", () => {
    const cards = document.querySelectorAll(".product-card");
    cards.forEach(card => {
        const position = card.getBoundingClientRect().top;
        if(position < window.innerHeight - 100){
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});
