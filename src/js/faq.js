const spoilerList = document.querySelector('[data-faq-list]')
spoilerList.addEventListener('click', openSpoiler);

function openSpoiler(event) {
    const tagName = event.target.tagName;
    if (tagName === 'BUTTON' || tagName === 'svg' || tagName === 'use' || tagName === 'SVG' || tagName === 'USE') {
        const listItem = event.target.closest('li');
        const isOpenSpoiler = listItem.dataset.isOpen === "true";
        listItem.dataset.isOpen = String(!isOpenSpoiler);
    }
}