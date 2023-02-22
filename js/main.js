const darkModeBtn = document.querySelector('.dark-mode-btn');

if (window.matchMedia && window.matchMedia("(preferse-color-scheme: dark)").matches){
    darkModeBtn.classList.add('dark-mode-btn--active');
    document.body.classList.add('dark'); 
};

if (localStorage.getItem('darkMode')==='dark'){
    darkModeBtn.classList.add('dark-mode-btn--active');
    document.body.classList.add('dark');
} else if (newColorScheme === 'light') {
    darkModeBtn.classList.remove('dark-mode-btn--active');
    document.body.classList.remove('dark');  
}



window.matchMedia && window.matchMedia("(preferse-color-scheme: dark)").addEventListener('change',(event)=>{
    const newColorScheme = event.mathes ? 'dark' : 'light';

    if (newColorScheme === 'dark'){
        darkModeBtn.classList.add('dark-mode-btn--active');
        document.body.classList.add('dark'); 
        localStorage.setItem('darkMode','dark');
    } else if (newColorScheme === 'light') {
        darkModeBtn.classList.remove('dark-mode-btn--active');
        document.body.classList.remove('dark'); 
        localStorage.setItem('darkMode','light');
    }
})

darkModeBtn.onclick = function(){
    darkModeBtn.classList.toggle('dark-mode-btn--active');
    const isdark =document.body.classList.toggle('dark');
    if (isdark){
       localStorage.setItem('darkMode','dark')
    } else (
        localStorage.setItem('darkMode','light')
    )

}