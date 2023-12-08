function closeNotification() {
    const notification = document.querySelector('.notification');
    const closeNotificationButton = document.querySelector('.notification__close-button');
    const header = document.querySelector('.header');
    const headerMobile = document.querySelector('.header-mobile');



    closeNotificationButton.addEventListener('click', () => {
        header.style.marginTop = 0;
        headerMobile.style.marginTop = 0;

        notification.remove();
    })
}

export default closeNotification