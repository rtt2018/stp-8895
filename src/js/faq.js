const spoilerList = document.querySelector('[data-faq-list]')
spoilerList.addEventListener('click', openSpoiler);

function openSpoiler(event) {
    const tagName = event.target.tagName;
    if (['button', 'svg', 'use', 'h3', 'li'].includes(String(tagName).toLowerCase())) {
        const listItem = event.target.closest('li');
        const isOpenSpoiler = listItem.dataset.isOpen === "true";
        listItem.dataset.isOpen = String(!isOpenSpoiler);
    }
}