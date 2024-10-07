document.addEventListener('DOMContentLoaded', () => {

    const heroSection = document.querySelector('.hero');
    const images = ['01.png', '02.png', '03.png', '04.png']; // Mets ici le chemin correct de tes images
    const randomImage = images[Math.floor(Math.random() * images.length)];

    heroSection.style.backgroundImage = `url(${randomImage})`;
    heroSection.style.backgroundSize = 'cover';
    heroSection.style.backgroundPosition = 'center';
});
