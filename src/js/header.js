const navHeaderList = document.querySelector('[data-nav-header-list]');
const mobileMenuNavList = document.querySelector('[data-mobile-nav]');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const visibleSectionId = entry.target.id;

        const currentSectionVisible = navHeaderList.querySelector(
          '[data-visibility="true"]'
        );
        if (currentSectionVisible) {
          currentSectionVisible.dataset.visibility = 'false';
        }

        const nextSectionVisible = navHeaderList.querySelector(
          `[data-section-id="${visibleSectionId}"]`
        );
        if (nextSectionVisible) {
          nextSectionVisible.dataset.visibility = true;
        }

        const currentMobSectVisible = mobileMenuNavList.querySelector(
          '[data-visibility="true"]'
        );
        if (currentMobSectVisible) {
          currentMobSectVisible.dataset.visibility = 'false';
        }

        const nextMobSectionVisible = mobileMenuNavList.querySelector(
          `[data-section-id="${visibleSectionId}"]`
        );
        if (nextMobSectionVisible) {
          nextMobSectionVisible.dataset.visibility = true;
        }
      }
    });
  },
  {
    root: null,
    threshold: 0.2,
    rootMargin: '-25% 0px -25% 0px',
  }
);

document
  .querySelectorAll('section')
  .forEach(section => observer.observe(section));
