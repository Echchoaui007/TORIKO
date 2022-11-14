const navSlide = () => {
    const nav-line =document.querySelector('.nav-line');
    const nav = document.querySelector('.nav-links');

    nav-line.addEvantListener('click',() =>{
        nav.classList.toggle('nav-active');

    });

}
navSlide();