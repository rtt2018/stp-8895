const acceptButton = document.querySelector('[data-is-accept="true"]')
const declineButton = document.querySelector('[data-is-accept="false"]')
const cookiesPoppup = document.querySelector('[ data-accept-cookies]')


document.addEventListener('DOMContentLoaded', function () {
    if (!localStorage.getItem('COOKIES_ACCEPT')) {
        cookiesPoppup.dataset.isCookiesVisible = true;
        document.documentElement.dataset.scrollLock = true;
        console.log('trersdasd')
    }
})


acceptButton.addEventListener('click', acceptCookies);
declineButton.addEventListener('click', acceptCookies);

function acceptCookies(event) {
    localStorage.setItem('COOKIES_ACCEPT', event.target.dataset.isAccept === 'true')
    cookiesPoppup.dataset.isCookiesVisible = false;
    document.documentElement.dataset.scrollLock = false;

}
