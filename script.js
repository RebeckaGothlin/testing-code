if (
    window.matchMedia && 
    window.matchMedia('(prefers-color-scheme: dark)').matches) 
{
    document.body.classList.add('dark-theme');
}


const themeToggle = document.querySelector("#themeToggle");

themeToggle.addEventListener('click', toggleTheme);

function toggleTheme() {
    if (document.body.classList.contains('dark-theme')) {
    document.body.classList.remove('dark-theme');
    } else {
    document.body.classList.add('dark-theme');
    }
    // document.body.classList.toggle('dark-theme'); /* Toggle kollar om vår body-tagg har dark-theme som class, om den har det tar den bort det, och vice versa. Den togglar/växlar mellan tillstånden add och remove.*/
}