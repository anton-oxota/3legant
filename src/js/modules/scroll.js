function scroll() {
    const productWindow = document.querySelector('.product__carousel');
    const productWrapper = document.querySelector('.product__carousel-wrapper');
    const scrollBox = document.querySelector('.product__carousel-scroll');
    const scrollThumb = scrollBox.querySelector('div');


    let scrollPosition = 0;
    const scrollPx = 50;

    function setProductWrapperWidth() {
        const gap = parseInt(window.getComputedStyle(productWrapper).gap);
        const elemWidth = parseInt(window.getComputedStyle(productWrapper.children[0]).width);
        const totalElems = productWrapper.childElementCount

        productWrapper.style.width = `${(elemWidth * totalElems) + (gap * (totalElems - 1))}px`;

        productWrapper.style.transform = `translateX(${scrollPosition}px)`;
        scrollThumb.style.transform = `translateX(${scrollPosition}px)`;
    }
    setProductWrapperWidth();


    const k = productWindow.getClientRects()[0].width / productWrapper.getClientRects()[0].width;

    function setScrollThumbWidth() {
        scrollThumb.style.width = `${scrollBox.getClientRects()[0].width * k}px`
    }
    setScrollThumbWidth();


    function shiftScroll(wrapper, scroll) {
        wrapper = wrapper ?? (scroll / k);
        scroll = scroll ?? (wrapper * k);

        productWrapper.style.transform = `translateX(${-wrapper}px)`;
        scrollThumb.style.transform = `translateX(${scroll}px)`;
    }

    const productWindowWidth = parseInt(productWindow.getClientRects()[0].width);
    const productWrapperWidth = parseInt(productWrapper.getClientRects()[0].width);

    const scrollBoxWidth = parseInt(scrollBox.getClientRects()[0].width);
    const scrollThumbWidth = parseInt(scrollThumb.getClientRects()[0].width);



    function scrollByWheel() {
        productWrapper.addEventListener('wheel', (event) => {
            event.preventDefault();

            if (event.deltaY < 0) {
                scrollPosition = scrollPosition < scrollPx ? 0 : scrollPosition - scrollPx;
                shiftScroll(scrollPosition);
            }

            if (event.deltaY > 0) {
                scrollPosition =
                    scrollPosition > productWrapperWidth - productWindowWidth - scrollPx ?
                        productWrapperWidth - productWindowWidth : scrollPosition + scrollPx;
                shiftScroll(scrollPosition);
            }
        })
    }

    scrollByWheel();


    function scrollByScrollThumb() {

        scrollThumb.addEventListener('mousedown', (event) => {

            const matrix = window.getComputedStyle(scrollThumb).transform.replace(/[^0-9\-.,]/g, '').split(',');
            const positionStart = +(matrix[12] || matrix[4]);
            const x = event.clientX;

            function mouseMoveHandler(event) {
                let pos = 0;

                if (positionStart - (x - event.clientX) < 0) {
                    pos = 0;
                } else if (positionStart - (x - event.clientX) > scrollBoxWidth - scrollThumbWidth) {
                    pos = scrollBoxWidth - scrollThumbWidth;
                } else {
                    pos = positionStart - (x - event.clientX);
                }

                scrollPosition = pos / k;
                shiftScroll(scrollPosition)

                // scrollThumb.style.transform = `translateX(${pos}px)`;

            }

            function mouseUpHandler() {
                document.removeEventListener('mousemove', mouseMoveHandler);
                document.removeEventListener('mouseup', mouseUpHandler);
            }

            document.addEventListener('mousemove', mouseMoveHandler);
            document.addEventListener('mouseup', mouseUpHandler);
        })
    }

    scrollByScrollThumb();

    function scrollByTouch() {
        productWrapper.addEventListener('touchstart', (event) => {
            event.preventDefault();

            const matrix = window.getComputedStyle(productWrapper).transform.replace(/[^0-9\-.,]/g, '').split(',');
            const positionStart = +(matrix[12] || matrix[4]);
            const x = event.touches[0].clientX;

            function touchMoveHandler(event) {

                let pos = positionStart - (x - event.touches[0].clientX)

                if (pos < 0 && pos > -(productWrapperWidth - productWindowWidth)) {
                    scrollPosition = -pos;

                    shiftScroll(scrollPosition);

                    // productWrapper.style.transform = `translateX(${pos}px)`;
                }
            }

            function touchEndHandler() {
                document.removeEventListener('touchmove', touchMoveHandler);
                document.removeEventListener('touchend', touchEndHandler);
            }

            document.addEventListener('touchmove', touchMoveHandler);
            document.addEventListener('touchend', touchEndHandler);
        })
    }

    scrollByTouch();

}

export default scroll