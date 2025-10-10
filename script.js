let currentIndex = 0;
const newsItems = document.querySelectorAll('.main-news');
const indicators = document.querySelectorAll('.indicator');
const total = newsItems.length;

// Função que troca de notícia
function changeNews(index) {
  newsItems[currentIndex].classList.remove('active');
  indicators[currentIndex].classList.remove('active');
  currentIndex = index;
  newsItems[currentIndex].classList.add('active');
  indicators[currentIndex].classList.add('active');
}

// Troca automática a cada 2s
setInterval(() => {
  changeNews((currentIndex + 1) % total);
}, 5000);

// Clique manual
indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => changeNews(index));
});
const toggleChat = document.getElementById("toggle-chat");
const chatBox = document.getElementById("chat-box");
const closeChat = document.getElementById("close-chat");
const sendChat = document.getElementById("send-chat");
const chatInput = document.getElementById("chat-input-text");
const chatMessages = document.getElementById("chat-messages");

toggleChat.addEventListener("click", () => {
  chatBox.classList.toggle("hidden");
});

closeChat.addEventListener("click", () => {
  chatBox.classList.add("hidden");
});

sendChat.addEventListener("click", () => {
  const text = chatInput.value.trim();
  if (text !== "") {
    const msg = document.createElement("p");
    msg.innerHTML = `<strong>Você:</strong> ${text}`;
    chatMessages.appendChild(msg);
    chatInput.value = "";
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
});

chatInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendChat.click();
  }
});

