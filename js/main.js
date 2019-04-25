function animateCSS(element, animationName, cb){
const btn = document.querySelector(element)
btn.classList.add('animated', 'shake', 'infinite')
}

animateCSS();