import getData from "../tools/getData";

import ProductItem from "../class/ProductItem";

import scroll from "./scroll";

function renderNewArrivals() {

    const productCaruselWrapper = document.querySelector('.product__carousel-wrapper');
    const productSpinner = document.querySelector('.product__spinner');
    getData('./db/products_db.json')
        .then(data => {
            productSpinner.remove();
            data.forEach(obj => {
                const product = new ProductItem(obj);
                productCaruselWrapper.append(product.productItem);
            });

            scroll();

        })
        .catch(error => {
            productSpinner.remove();
            const errorMessage = document.createElement('div');
            errorMessage.classList.add('message', 'h5');
            errorMessage.innerHTML = "Opss... <br> We can't load products";

            productCaruselWrapper.append(errorMessage)
            console.error(error.status, 'Fetch')
        })
        /* .finally(() => {
            productSpinner.remove();
        })  */
        
}

export default renderNewArrivals;