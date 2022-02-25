let theme_toggle = document.querySelector('#theme-toggle')

if (localStorage.getItem('theme') == 'dark') {
    document.querySelector('#themeParam').href = 'css/darkTheme.min.css'
    document.querySelector('#logoToggle').src = 'img/logoD.svg'
    theme_toggle.innerHTML = 'Light'
} else {
    document.querySelector('#themeParam').href = 'css/lightTheme.min.css'
    document.querySelector('#logoToggle').src = 'img/logoW.svg'
    theme_toggle.innerHTML = 'Dark'
}

theme_toggle.addEventListener('click', (e) => {
    e.preventDefault()

    if (localStorage.getItem('theme') == 'dark') {
        localStorage.removeItem('theme')
        localStorage.setItem('theme', 'light')
    } else {
        localStorage.removeItem('theme')
        localStorage.setItem('theme', 'dark')
    }

    if (localStorage.getItem('theme') == 'dark') {
        document.querySelector('#themeParam').href = 'css/darkTheme.min.css'
        document.querySelector('#logoToggle').src = 'img/logoD.svg'
        theme_toggle.innerHTML = 'Light'
    } else {
        document.querySelector('#themeParam').href = 'css/lightTheme.min.css'
        document.querySelector('#logoToggle').src = 'img/logoW.svg'
        theme_toggle.innerHTML = 'Dark'
    }

})
