let cartWrapper = document.querySelector('.cart-wrapper');
window.addEventListener('click', function (event) {
    if (event.target.hasAttribute('data-cart')) {
        let cart = event.target.closest('.card');

        let productInfo = {
            id: cart.dataset.id,
            imgSrc: cart.querySelector('.product-img').getAttribute('src'),
            title: cart.querySelector('.item-title').innerText,
            itemsInBox: cart.querySelector('[data-items-in-box]').innerText,
            weight: cart.querySelector('.price__weight').innerText,
            price: cart.querySelector('.price__currency').innerText,
            counter: cart.querySelector('[data-counter]').innerText
        }
        let cartItemHtml = `<div class="cart-item" data-id="${productInfo.id}">
                                <div class="cart-item__top">
                                    <div class="cart-item__img">
                                        <img src="${productInfo.imgSrc}" alt="">
                                    </div>
                                    <div class="cart-item__desc">
                                        <div class="cart-item__title">${productInfo.title}</div>
                                        <div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}</div>
                                        <!-- cart-item__details -->
                                        <div class="cart-item__details">
                                            <div class="items items--small counter-wrapper">
                                                <div class="items__control" data-action="minus">-</div>
                                                <div class="items_current" data-counter="">${productInfo.counter}</div>
                                                <div class="items__control" data-action="plus">+</div>
                                            </div>
                                            <div class="price">
                                                <div class="price__currency">${productInfo.price}</div>
                                            </div>
                                        </div>
                                        <!-- // cart-item__details -->
                                    </div>
                                </div>
                            </div>`
        cartWrapper.insertAdjacentHTML('beforeend', cartItemHtml);
    }
})