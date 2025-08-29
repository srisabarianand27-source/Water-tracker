let goal = 2000;
let consumed = 0;

function updateDisplay() {
  document.getElementById("consumed").textContent = consumed;
  const status = document.getElementById("status");

  if (consumed >= goal) {
    status.textContent = "🎉 Goal reached! Resetting for tomorrow...";
    status.style.color = "var(--success)";
    setTimeout(() => {
      resetDay();
    }, 3000);
  } else {
    status.textContent = `Keep going! ${goal - consumed} ml left.`;
    status.style.color = "var(--text-light)";
  }
}

function addWater() {
  const amountInput = document.getElementById("amount");
  const amount = parseInt(amountInput.value);

  if (!amount || amount <= 0) {
    alert("Please enter a valid amount.");
    return;
  }

  consumed += amount;
  updateDisplay();
  amountInput.value = "";
}

function resetDay() {
  consumed = 0;
  updateDisplay();
  document.getElementById("status").textContent = "🔄 New day started. Stay hydrated!";
  document.getElementById("status").style.color = "var(--text-light)";
}