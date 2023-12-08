class ProductItem {
    constructor({
        productImgSrc,
        productImgAlt,
        lables,
        productRate,
        productName,
        productPrice
    }) {
        this.productImgSrc = productImgSrc;
        this.productImgAlt = productImgAlt;
        this.lables = lables;
        this.productRate = productRate;
        this.productName = productName;
        this.productPrice = productPrice;

        this.productLablesElement = this.createLables();
        this.productImgElement = this.createImgCard();
        this.productAddToFavoriteButton = this.createButtonAddToFavorite();
        this.productAddToCartButton = this.createButtonAddToCart();

        this.productCard = this.createProductCard();

        this.productRateElement = this.createProductRate();
        this.productNameElement = this.createProductName();
        this.productPriceElement = this.createProductPrice();

        this.productInfo = this.createProductInfo();

        this.productItem = this.createProductItem();
    }

    createLables() {
        const lablesElementsArray = this.lables.map(obj => {
            switch (obj.name) {
                case 'new': {
                    const label = document.createElement('div');
                    label.classList.add('product-item__label');
                    label.textContent = 'New';
                    return label
                }

                case 'discount': {
                    const label = document.createElement('div');
                    label.classList.add('product-item__label', 'product-item__label--green');
                    label.textContent = `${obj.value}%`;
                    return label
                }
            }
        })

        const productLablesElement = document.createElement('div');
        productLablesElement.classList.add('product-item__lables');

        lablesElementsArray.forEach(elem => {
            productLablesElement.append(elem)
        });

        return productLablesElement
    }

    createImgCard() {
        const productImgElement = document.createElement('img');
        productImgElement.classList.add('product-item__img');
        productImgElement.src = this.productImgSrc;
        productImgElement.alt = this.productImgAlt;

        return productImgElement
    }

    createButtonAddToFavorite() {
        const button = document.createElement('button');
        button.classList.add('product-item__add-to-favorite');
        button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.577 5.76422C10.2546 6.07365 9.74545 6.07365 9.42301 5.76422L8.84601 5.2105C8.17065 4.56239 7.25829 4.16667 6.25001 4.16667C4.17894 4.16667 2.50001 5.8456 2.50001 7.91667C2.50001 9.90219 3.57483 11.5417 5.12647 12.8888C6.67944 14.237 8.53618 15.1312 9.64555 15.5876C9.87751 15.683 10.1225 15.683 10.3545 15.5876C11.4638 15.1312 13.3206 14.237 14.8735 12.8888C16.4252 11.5417 17.5 9.90218 17.5 7.91667C17.5 5.8456 15.8211 4.16667 13.75 4.16667C12.7417 4.16667 11.8294 4.56239 11.154 5.2105L10.577 5.76422ZM10 4.00798C9.02676 3.074 7.70542 2.5 6.25001 2.5C3.25847 2.5 0.833344 4.92512 0.833344 7.91667C0.833344 13.2235 6.64196 16.1542 9.0115 17.1289C9.64965 17.3914 10.3504 17.3914 10.9885 17.1289C13.3581 16.1542 19.1667 13.2235 19.1667 7.91667C19.1667 4.92512 16.7416 2.5 13.75 2.5C12.2946 2.5 10.9733 3.074 10 4.00798Z" fill="#6C7275" />
                            </svg>`;
        return button
    }

    createButtonAddToCart() {
        const button = document.createElement('button');
        button.classList.add('product-item__add-to-cart', 'button-s');
        button.textContent = 'Add to cart'

        return button
    }

    createProductCard() {
        const productCard = document.createElement('div');
        productCard.classList.add('product-item__card');

        productCard.append(this.productImgElement);
        productCard.append(this.productLablesElement);
        productCard.append(this.productAddToFavoriteButton);
        productCard.append(this.productAddToCartButton);

        return productCard
    }

    createProductRate() {
        const productRateElement = document.createElement('div');
        productRateElement.classList.add('product-item__rate');
        
        for (let i = 0; i < this.productRate; i++) {
            productRateElement.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M7.53834 1.10997C7.70914 0.699319 8.29086 0.699318 8.46166 1.10996L9.99874 4.80556C10.0707 4.97868 10.2336 5.09696 10.4204 5.11194L14.4102 5.4318C14.8535 5.46734 15.0332 6.02059 14.6955 6.30993L11.6557 8.91378C11.5133 9.03576 11.4512 9.22715 11.4947 9.40952L12.4234 13.3028C12.5265 13.7354 12.0559 14.0773 11.6764 13.8455L8.26063 11.7592C8.10062 11.6615 7.89938 11.6615 7.73937 11.7592L4.32363 13.8455C3.94408 14.0773 3.47345 13.7354 3.57665 13.3028L4.50534 9.40952C4.54884 9.22715 4.48665 9.03576 4.34426 8.91378L1.30453 6.30993C0.966758 6.02059 1.14652 5.46734 1.58985 5.4318L5.57955 5.11194C5.76645 5.09696 5.92925 4.97868 6.00126 4.80556L7.53834 1.10997Z" fill="#343839" />
                                            </svg>`;
        }

        return productRateElement;
    }

    createProductName() {
        const productNameElement = document.createElement('div');
        productNameElement.classList.add('product-item__name');
        productNameElement.textContent = this.productName;

        return productNameElement
    }

    createProductPrice() {
        const productPriceElement = document.createElement('div');
        productPriceElement.classList.add('product-item__price');

        productPriceElement.innerHTML = `$${this.productPrice.current} ` +  ((this.productPrice.old) ? `<span>$${this.productPrice.old}</span>` : '');

        return productPriceElement
    }


    createProductInfo() {
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-item__info');

        productInfo.append(this.productRateElement)
        productInfo.append(this.productNameElement)
        productInfo.append(this.productPriceElement)

        return productInfo
    }

    createProductItem() {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        
        productItem.append(this.productCard);
        productItem.append(this.productInfo);

        return productItem
    }
}

export default ProductItem

/* 
<div class="product-item">
    <div class="product-item__card">
        <img src="img/product/item.png" alt="" class="product-item__img">

        <div class="product-item__lables">
            <div class="product-item__label">new</div>
            <div class="product-item__label product-item__label--green">-50%</div>
        </div>

        <button class="product-item__add-to-favorite">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.577 5.76422C10.2546 6.07365 9.74545 6.07365 9.42301 5.76422L8.84601 5.2105C8.17065 4.56239 7.25829 4.16667 6.25001 4.16667C4.17894 4.16667 2.50001 5.8456 2.50001 7.91667C2.50001 9.90219 3.57483 11.5417 5.12647 12.8888C6.67944 14.237 8.53618 15.1312 9.64555 15.5876C9.87751 15.683 10.1225 15.683 10.3545 15.5876C11.4638 15.1312 13.3206 14.237 14.8735 12.8888C16.4252 11.5417 17.5 9.90218 17.5 7.91667C17.5 5.8456 15.8211 4.16667 13.75 4.16667C12.7417 4.16667 11.8294 4.56239 11.154 5.2105L10.577 5.76422ZM10 4.00798C9.02676 3.074 7.70542 2.5 6.25001 2.5C3.25847 2.5 0.833344 4.92512 0.833344 7.91667C0.833344 13.2235 6.64196 16.1542 9.0115 17.1289C9.64965 17.3914 10.3504 17.3914 10.9885 17.1289C13.3581 16.1542 19.1667 13.2235 19.1667 7.91667C19.1667 4.92512 16.7416 2.5 13.75 2.5C12.2946 2.5 10.9733 3.074 10 4.00798Z" fill="#6C7275" />
            </svg>
        </button>
        <button class="product-item__add-to-cart button-s">Add to cart</button>
    </div>
    <div class="product-item__info">
        <div class="product-item__rate">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M7.53834 1.10997C7.70914 0.699319 8.29086 0.699318 8.46166 1.10996L9.99874 4.80556C10.0707 4.97868 10.2336 5.09696 10.4204 5.11194L14.4102 5.4318C14.8535 5.46734 15.0332 6.02059 14.6955 6.30993L11.6557 8.91378C11.5133 9.03576 11.4512 9.22715 11.4947 9.40952L12.4234 13.3028C12.5265 13.7354 12.0559 14.0773 11.6764 13.8455L8.26063 11.7592C8.10062 11.6615 7.89938 11.6615 7.73937 11.7592L4.32363 13.8455C3.94408 14.0773 3.47345 13.7354 3.57665 13.3028L4.50534 9.40952C4.54884 9.22715 4.48665 9.03576 4.34426 8.91378L1.30453 6.30993C0.966758 6.02059 1.14652 5.46734 1.58985 5.4318L5.57955 5.11194C5.76645 5.09696 5.92925 4.97868 6.00126 4.80556L7.53834 1.10997Z" fill="#343839" />
            </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M7.53834 1.10997C7.70914 0.699319 8.29086 0.699318 8.46166 1.10996L9.99874 4.80556C10.0707 4.97868 10.2336 5.09696 10.4204 5.11194L14.4102 5.4318C14.8535 5.46734 15.0332 6.02059 14.6955 6.30993L11.6557 8.91378C11.5133 9.03576 11.4512 9.22715 11.4947 9.40952L12.4234 13.3028C12.5265 13.7354 12.0559 14.0773 11.6764 13.8455L8.26063 11.7592C8.10062 11.6615 7.89938 11.6615 7.73937 11.7592L4.32363 13.8455C3.94408 14.0773 3.47345 13.7354 3.57665 13.3028L4.50534 9.40952C4.54884 9.22715 4.48665 9.03576 4.34426 8.91378L1.30453 6.30993C0.966758 6.02059 1.14652 5.46734 1.58985 5.4318L5.57955 5.11194C5.76645 5.09696 5.92925 4.97868 6.00126 4.80556L7.53834 1.10997Z" fill="#343839" />
            </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M7.53834 1.10997C7.70914 0.699319 8.29086 0.699318 8.46166 1.10996L9.99874 4.80556C10.0707 4.97868 10.2336 5.09696 10.4204 5.11194L14.4102 5.4318C14.8535 5.46734 15.0332 6.02059 14.6955 6.30993L11.6557 8.91378C11.5133 9.03576 11.4512 9.22715 11.4947 9.40952L12.4234 13.3028C12.5265 13.7354 12.0559 14.0773 11.6764 13.8455L8.26063 11.7592C8.10062 11.6615 7.89938 11.6615 7.73937 11.7592L4.32363 13.8455C3.94408 14.0773 3.47345 13.7354 3.57665 13.3028L4.50534 9.40952C4.54884 9.22715 4.48665 9.03576 4.34426 8.91378L1.30453 6.30993C0.966758 6.02059 1.14652 5.46734 1.58985 5.4318L5.57955 5.11194C5.76645 5.09696 5.92925 4.97868 6.00126 4.80556L7.53834 1.10997Z" fill="#343839" />
            </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M7.53834 1.10997C7.70914 0.699319 8.29086 0.699318 8.46166 1.10996L9.99874 4.80556C10.0707 4.97868 10.2336 5.09696 10.4204 5.11194L14.4102 5.4318C14.8535 5.46734 15.0332 6.02059 14.6955 6.30993L11.6557 8.91378C11.5133 9.03576 11.4512 9.22715 11.4947 9.40952L12.4234 13.3028C12.5265 13.7354 12.0559 14.0773 11.6764 13.8455L8.26063 11.7592C8.10062 11.6615 7.89938 11.6615 7.73937 11.7592L4.32363 13.8455C3.94408 14.0773 3.47345 13.7354 3.57665 13.3028L4.50534 9.40952C4.54884 9.22715 4.48665 9.03576 4.34426 8.91378L1.30453 6.30993C0.966758 6.02059 1.14652 5.46734 1.58985 5.4318L5.57955 5.11194C5.76645 5.09696 5.92925 4.97868 6.00126 4.80556L7.53834 1.10997Z" fill="#343839" />
            </svg><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M7.53834 1.10997C7.70914 0.699319 8.29086 0.699318 8.46166 1.10996L9.99874 4.80556C10.0707 4.97868 10.2336 5.09696 10.4204 5.11194L14.4102 5.4318C14.8535 5.46734 15.0332 6.02059 14.6955 6.30993L11.6557 8.91378C11.5133 9.03576 11.4512 9.22715 11.4947 9.40952L12.4234 13.3028C12.5265 13.7354 12.0559 14.0773 11.6764 13.8455L8.26063 11.7592C8.10062 11.6615 7.89938 11.6615 7.73937 11.7592L4.32363 13.8455C3.94408 14.0773 3.47345 13.7354 3.57665 13.3028L4.50534 9.40952C4.54884 9.22715 4.48665 9.03576 4.34426 8.91378L1.30453 6.30993C0.966758 6.02059 1.14652 5.46734 1.58985 5.4318L5.57955 5.11194C5.76645 5.09696 5.92925 4.97868 6.00126 4.80556L7.53834 1.10997Z" fill="#343839" />
            </svg>
        </div>
        <div class="product-item__name">Loveseat Sofa</div>
        <div class="product-item__price">$199.00 <span>$400.00</span></div>
    </div>
</div>
*/