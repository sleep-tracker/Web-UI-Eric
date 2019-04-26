const img = document.querySelectorAll('.help-img');

img[0].addEventListener('mouseover', (event) => {
   event.target.style.transition = 'transform .3s';
   event.target.style.transform = 'scale(1.15)';
});
img[0].addEventListener('mouseout', (event) => {
   event.target.style.transition = 'transform .3s';
   event.target.style.transform = 'scale(1.0)';
});

img[1].addEventListener('mouseover', (event) => {
    event.target.style.transition = 'transform .3s';
    event.target.style.transform = 'scale(1.15)';
 });
 img[1].addEventListener('mouseout', (event) => {
    event.target.style.transition = 'transform .3s';
    event.target.style.transform = 'scale(1.0)';
 });

 img[2].addEventListener('mouseover', (event) => {
    event.target.style.transition = 'transform .3s';
    event.target.style.transform = 'scale(1.15)';
 });
 img[2].addEventListener('mouseout', (event) => {
    event.target.style.transition = 'transform .3s';
    event.target.style.transform = 'scale(1.0)';
 });