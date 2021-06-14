let input = document.getElementById("pass");
let message = document.querySelector("div.message");

const passwords = ["password1", "password2", "password3"];
const messagesContent = [
  "Oto tajemna wiadomość",
  "Oto bardziej tajemna wiadomość",
  "Oto najbardziej tajemna wiadomość",
];

const checkPassword = (e) => {
  message.textContent = "";

  const text = e.target.value;

  passwords.forEach((pass, index) => {
    if (pass === text) {
      message.textContent = messagesContent[index];
      e.target.value = "";
    }
  });
};

input.addEventListener("input", checkPassword);

input.addEventListener("focus", (e) => {
  e.target.classList.add("active");
});

input.addEventListener("blur", (e) => {
  e.target.classList.remove("active");
});
