const greetings = [
  "سلام", // Farsi
  "مرحبا", // Arabic
  "こんにちは", // Japanese
  "你好", // Chinese
  "Привет", // Russian
  "Xin chào", // Vietnamese
  "ہیلو", // Urdu
  "नमस्ते", // Hindi
  "Hola", // Spanish
  "Olá", // Portuguese
];

let index = 0;

function changeGreeting() {
  const greetingElement = document.getElementById("greeting");
  greetingElement.textContent = greetings[index];
  greetingElement.style.animation = "none"; // Reset animation
  setTimeout(() => (greetingElement.style.animation = ""), 8); // Restart animation
  index = (index + 1) % greetings.length;
}

setInterval(changeGreeting, 2000); // Change greeting every 2 seconds
