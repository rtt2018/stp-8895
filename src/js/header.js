const sections = document.querySelectorAll('section');
const navHeaderList = document.querySelector('[data-nav-header-list]')
const mobileMenuNavList = document.querySelector('[data-mobile-nav]');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const visibleSectionId = entry.target.id;
            const currentSectionVisible = navHeaderList.querySelector('[data-visibility="true"]')
            currentSectionVisible.dataset.visibility = 'false';
            const nextSectionVisible = navHeaderList.querySelector(`[data-section-id="${visibleSectionId}"]`)
            nextSectionVisible.dataset.visibility = true;

            const currentMobSectVisible = mobileMenuNavList.querySelector('[data-visibility="true"]')
            currentMobSectVisible.dataset.visibility = 'false';
            const nextMobSectionVisible = mobileMenuNavList.querySelector(`[data-section-id="${visibleSectionId}"]`)
            nextMobSectionVisible.dataset.visibility = true;
        }
    });
}, {
    threshold: 0.25
});

sections.forEach(section => observer.observe(section));