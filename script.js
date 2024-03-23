async function getCurrentImageOfTheDay() {
    const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=bQpu22muMrHkHTvFBcCxAdwBUQWQe42Og7erIClw');
    const data = await response.json();
   
}


async function getImageOfTheDay(date) {
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=bQpu22muMrHkHTvFBcCxAdwBUQWQe42Og7erIClw&date=${date}`);
    const data = await response.json();
    
    saveSearch(date);
    
    addSearchToHistory(date);
}


function saveSearch(date) {
    const searches = JSON.parse(localStorage.getItem('searches')) || [];
    searches.push(date);
    localStorage.setItem('searches', JSON.stringify(searches));
}


function addSearchToHistory(date) {
    const searchHistory = document.getElementById('search-history');
    const listItem = document.createElement('li');
    listItem.textContent = date;
    listItem.addEventListener('click', () => {
        getImageOfTheDay(date);
    });
    searchHistory.appendChild(listItem);
}


window.addEventListener('load', () => {
    getCurrentImageOfTheDay();

    const searches = JSON.parse(localStorage.getItem('searches')) || [];
    searches.forEach((date) => {
        addSearchToHistory(date);
    });
});