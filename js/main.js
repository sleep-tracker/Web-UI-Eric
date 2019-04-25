const navBarBrand = document.querySelector('.navbar-brand');

navBarBrand.addEventListener('mouseover', (event) => {
    event.target.style.transition = 'transform .3s';
    event.target.style.transform = 'scale(1.15)';
});

navBarBrand.addEventListener('mouseout', (event) => {
    event.target.style.transition = 'transform .3s';
    event.target.style.transform = 'scale(1.0)';
});