const spoilerList = document.querySelector('[data-faq-list]')
spoilerList.addEventListener('click', openSpoiler);

function openSpoiler(event) {
    const tagName = event.target.tagName;
    console.log("🚀 ~ openSpoiler ~ tagName:", tagName)
    if (tagName === 'BUTTON' || tagName === 'svg' || tagName === 'use') {
        const listItem = event.target.closest('li');
        const isOpenSpoiler = listItem.dataset.isOpen === "true";
        listItem.dataset.isOpen = String(!isOpenSpoiler);

    }
}