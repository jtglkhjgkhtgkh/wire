const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const searchImg = document.getElementById('search-img');
const searchBtn = document.getElementById('search-btn');

let currentSearchEngine = 'google'; // по умолчанию используется поиск Google

// функция для смены поисковой системы
function changeSearchEngine() {
  currentSearchEngine = currentSearchEngine === 'google' ? 'yandex' : 'google';
  searchImg.src = currentSearchEngine === 'google' ? 'https://zinteg.github.io/files/img/google.svg' : 'https://zinteg.github.io/files/img/yandex.svg';
}

// функция для отправки запроса
function submitSearch() {
  const searchText = searchInput.value;
  if (searchText.trim() !== '') {
    const searchUrl = currentSearchEngine === 'google' ? `https://www.google.com/search?q=${searchText}` : `https://yandex.ru/search/?text=${searchText}`;
    window.open(searchUrl, '_blank');
  }
}

// обработчик события на нажатие клавиши Enter в поле ввода текста
searchInput.addEventListener('keypress', function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    submitSearch();
  }
});

// обработчик события на клик по кнопке поиска
searchBtn.addEventListener('click', submitSearch);

// обработчик события на клик по иконке смены поисковой системы
searchImg.addEventListener('click', function(event) {
  event.preventDefault();
  changeSearchEngine();
});

// сохранение текущей поисковой системы при закрытии страницы
window.addEventListener('beforeunload', function() {
  localStorage.setItem('currentSearchEngine', currentSearchEngine);
  });
  
  // получение сохраненной поисковой системы при загрузке страницы (если есть)
  window.addEventListener('load', function() {
  const savedSearchEngine = localStorage.getItem('currentSearchEngine');
  if (savedSearchEngine === 'yandex') {
  currentSearchEngine = 'yandex';
  searchImg.src = 'https://zinteg.github.io/files/img/yandex.svg';
  } else {
  currentSearchEngine = 'google';
  searchImg.src = 'https://zinteg.github.io/files/img/google.svg';
  }
  });