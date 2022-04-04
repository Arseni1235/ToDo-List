window.addEventListener('click', function (event) {
    if (event.target.hasAttribute('data-action')) {
        let counterWrapper = event.target.closest('.counter-wrapper');
        let counter = counterWrapper.querySelector('[data-counter');
        if (event.target.dataset.action === 'plus') {
            counter.innerText = ++counter.innerText;
        } else if (event.target.dataset.action === 'minus') {
            if (parseInt(counter.innerText) > 1) {
                counter.innerText = --counter.innerText;
            }
        }
    }
})