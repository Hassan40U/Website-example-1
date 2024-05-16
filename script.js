const betBtn = document.querySelector(".bet-btn");
const cashoutBtn = document.querySelector(".cashout-btn");
const plane = document.querySelector(".plane");

let winnings = 0;

betBtn.addEventListener("click", () => {
    // Generate random flight duration and winnings
    const flightDuration = Math.floor(Math.random() * 5000);
    const possibleWinnings = Math.floor(Math.random() * 10000);
    
    // Animate plane's flight
    plane.style.animationDuration = `${flightDuration}ms`;
    
    // Cash-out mechanism and update winnings
    cashoutBtn.addEventListener("click", () => {
        if (plane.style.bottom < 400) {
            winnings += possibleWinnings;
            document.querySelector(".winnings").textContent = winnings;
        }
    });
})
