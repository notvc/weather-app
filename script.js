const themeBtn = document.getElementById('theme-btn');

themeBtn.addEventListener('click', () => {
    const isDark = document.documentElement.dataset.theme == 'dark';

    document.documentElement.dataset.theme = isDark ? 'light' : 'dark';
        localStorage.setItem('theme',isDark ? 'light' : 'dark');
})
