document.addEventListener('DOMContentLoaded', () => {

    const params = new URLSearchParams(window.location.search);
    const product = params.get('product');

    const products = {
        veste: {
            title: 'Veste en cuir',
            price: '89,99 €',
            description: 'Cette veste en cuir est conçue pour apporter à la fois style et confort. Disponible en plusieurs tailles.',
            image: '01.png'
        },
        jean: {
            title: 'Jean Slim',
            price: '49,99 €',
            description: 'Un jean slim confortable et moderne, parfait pour toutes les occasions.',
            image: '02.png'
        },
        robe: {
            title: 'Robe d\'été',
            price: '39,99 €',
            description: 'Robe légère et élégante pour les journées ensoleillées.',
            image: '03.jpeg'
        },
        chino: {
            title: 'Pantalon Chino',
            price: '59,99 €',
            description: 'Le pantalon chino parfait pour un look à la fois décontracté et chic.',
            image: '04.jpeg'
        }
    };

    const productImage = document.getElementById('product-image');
    const productTitle = document.getElementById('product-title');
    const productPrice = document.getElementById('product-price');
    const productDescription = document.getElementById('product-description');

    if (products[product]) {
        productImage.src = products[product].image;
        productTitle.textContent = products[product].title;
        productPrice.textContent = products[product].price;
        productDescription.textContent = products[product].description;
    } else {
        productTitle.textContent = 'Produit non trouvé';
        productPrice.textContent = '';
        productDescription.textContent = '';
        productImage.src = '';
    }
});
