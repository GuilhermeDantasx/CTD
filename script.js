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
