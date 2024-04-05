const sections = document.querySelectorAll('.section');
const progressBar = document.querySelector('.progress');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

let currentSectionIndex = 0;

function updateProgressBar() {
    const progress = (currentSectionIndex / (sections.length - 1)) * 100;
    progressBar.style.width = progress + '%';
}

function scrollToSection(index) {
    sections[index].scrollIntoView({ behavior: 'smooth' });
    currentSectionIndex = index;
    updateProgressBar();
}

prevButton.addEventListener('click', () => {
    if (currentSectionIndex > 0) {
        scrollToSection(currentSectionIndex - 1);
    }
});

nextButton.addEventListener('click', () => {
    if (currentSectionIndex < sections.length - 1) {
        scrollToSection(currentSectionIndex + 1);
    }
});

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSectionIndex = index;
            updateProgressBar();
        }
    });
});
