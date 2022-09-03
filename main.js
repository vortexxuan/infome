const mode=document.querySelector('.js-mode')
const bground=document.querySelector('.body-container')
function openmode(){
    bground.classList.add('light-body')
}
mode.addEventListener('click',openmode)