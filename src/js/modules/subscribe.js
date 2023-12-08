import postData from "../tools/postData";

function subscribe() {

    const subscribeForm = document.querySelector('.newsletter__form');
    const input = document.querySelector('.newsletter-form__input');

    const okMassage = document.querySelector('.newsletter-form__msg--ok');
    const errorMassage = document.querySelector('.newsletter-form__msg--error');

    subscribeForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const body = new FormData(subscribeForm);
        const obj = Object.fromEntries(body.entries())

        postData('./db/mail_db.json', obj)
            .then(data => {
                console.log(data);
                okMassage.style.opacity = '1';
            }).catch(err => {
                console.log(err);
                console.log('ops');
                errorMassage.style.opacity = '1';
            }).finally(() => {
                setTimeout(() => {
                    okMassage.style.opacity = '0';
                    errorMassage.style.opacity = '0';
                }, 2000)
            })

    })
}

export default subscribe