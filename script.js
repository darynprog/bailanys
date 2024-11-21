// Әрбір кнопка басылғанда санды арттыру функциясы
function vote(option) {
    if (option === 'keremet') {
        updateStats('keremet-count');
    } else if (option === 'jaksy') {
        updateStats('jaksy-count');
    } else if (option === 'tusindim') {
        updateStats('tusindim-count');
    }
}

// Статистиканы жаңарту
function updateStats(elementId) {
    const countElement = document.getElementById(elementId);
    let currentCount = parseInt(countElement.textContent); // ағымдағы санды аламыз
    countElement.textContent = currentCount + 1; // санды арттыру
}