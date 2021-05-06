var storeState = {
    availableProducts: [
        { id: 1, name: 'собака', price: 500 },
        { id: 2, name: 'кот', price: 100 },
    ],
    basket: [],
}

function drawAvailableProducts() {
    var allProductsDiv = document.getElementById('availableProducts')
    storeState.availableProducts.forEach(product => {
        var productDiv = document.createElement('div')

        var nameP = document.createElement('p')
        nameP.innerHTML = product.name
        productDiv.appendChild(nameP)

        var priceP = document.createElement('p')
        priceP.innerHTML = product.price
        productDiv.appendChild(priceP)

        var buyButton = document.createElement('button')
        buyButton.innerHTML = 'Купить'
        buyButton.onclick = () => {
            storeState.basket.push(product)
            drawBusket()
        }

        productDiv.append(buyButton)
        allProductsDiv.append(productDiv)
    })
}

function drawBusket() {
    var basketDiv = document.getElementById('basket')
    basketDiv.innerHTML = ''
    storeState.basket.forEach(item => {
        var itemP = document.createElement('p')
        itemP.innerHTML = `${item.name} - ${item.price}`
        basketDiv.append(itemP)
    })
}

function init() {
    drawAvailableProducts()
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        images[i].onclick = changeBigPicture;
    }
    function changeBigPicture(eventObj) {
        var appDiv = document.getElementById("big_picture");
        appDiv.innerHTML = "";
        var eventElement = eventObj.target;
        var imageNameParts = eventElement.id.split("_");
        var src = "img/gallery/big/" + imageNameParts[1] + ".jpg";
        var imageDomElement = document.createElement("img");
        imageDomElement.src = src;
        appDiv.appendChild(imageDomElement);
    }
}



window.onload = init