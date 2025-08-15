let countdownInterval;

function startCountdown() {
  const target = document.getElementById('targetDate').value;
  if (!target) {
    alert("Please select a date and time!");
    return;
  }

  const targetTime = new Date(target).getTime();

  clearInterval(countdownInterval); // Clear previous timer

  countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetTime - now;

    if (distance < 0) {
      clearInterval(countdownInterval);
      document.getElementById('countdownDisplay').innerHTML = "<h2>Time's up!</h2>";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = String(days).padStart(2, '0');
    document.getElementById("hours").textContent = String(hours).padStart(2, '0');
    document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
    document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
  }, 1000);
}

