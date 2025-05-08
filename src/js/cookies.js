const acceptButton = document.querySelector('[data-is-accept="true"]')
const declineButton = document.querySelector('[data-is-accept="false"]')
const cookiesPoppup = document.querySelector('[ data-accept-cookies]')


document.addEventListener('DOMContentLoaded', function () {
    if (!localStorage.getItem('COOKIES_ACCEPT')) {
        cookiesPoppup.dataset.isVisible = true;
        document.documentElement.dataset.scrollLock = true;
        console.log('trersdasd')
    }
})


acceptButton.addEventListener('click', acceptCookies);
declineButton.addEventListener('click', acceptCookies);

function acceptCookies(event) {
    localStorage.setItem('COOKIES_ACCEPT', event.target.dataset.isAccept === 'true')
    cookiesPoppup.dataset.isVisible = false;
    document.documentElement.dataset.scrollLock = false;

}
