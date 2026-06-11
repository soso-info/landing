const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector("#menu");
const minutesInput = document.querySelector("#minutes");
const result = document.querySelector("#result");
const contactForm = document.querySelector(".contact-form");
const formMessage = document.querySelector(".form-message");

function updateRecoveredTime() {
  const minutes = Number(minutesInput.value || 0);
  const recoveredMinutes = Math.round(minutes * 30 * 0.5);
  const hours = Math.floor(recoveredMinutes / 60);
  const remainingMinutes = recoveredMinutes % 60;
  const minuteText = remainingMinutes ? ` e ${remainingMinutes} minutos` : "";

  result.textContent = `Voce pode recuperar ${hours} horas${minuteText} em 30 dias.`;
}

menuButton.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

minutesInput.addEventListener("input", updateRecoveredTime);
updateRecoveredTime();

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(contactForm);
  const name = data.get("name");
  const goal = data.get("goal");

  formMessage.textContent = `${name}, seu plano inicial para "${goal}" foi preparado.`;
  contactForm.reset();
});
