const BtnDarkMode = document.querySelector('#BtnDarkMode')
const body = document.querySelector('#body')

//add night class after click
BtnDarkMode.onclick = function(){
    BtnDarkMode.classList.toggle('dark-mode-btn-active');
    const isDark = body.classList.toggle('dark');

    if(isDark){
        localStorage.setItem('darkMode','dark')
    } else{
        localStorage.setItem('darkMode','light')
    }
}

//localstorage check night
if(localStorage.getItem('darkMode') === 'dark'){
    BtnDarkMode.classList.add('dark-mode-btn-active');
    body.classList.add('dark');
} else if(localStorage.getItem('darkMode') === 'light'){
    BtnDarkMode.classList.remove('dark-mode-btn-acrtive');
    body.classList.remove('dark');
}