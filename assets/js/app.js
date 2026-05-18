/* ======================================
   COMPONENTES
====================================== */

function cargarComponente(id, archivo) {
    fetch(archivo)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
            translatePage();
        });
}

cargarComponente('navbar', 'components/navbar.html');
cargarComponente('registro', 'components/registro.html');


/* ======================================
   IDIOMAS
====================================== */

let currentLanguage = 'es';

function translatePage() {
    const currentLanguageElement =
        document.getElementById('currentLanguage');
    if (currentLanguageElement) {
        currentLanguageElement.textContent =
            translations[currentLanguage].language_short;
        const pageTitle =
            document.getElementById('pageTitle');

        if (pageTitle) {

            pageTitle.textContent =
                translations[currentLanguage].page_about_title;

        }
    }
    document.querySelectorAll('.translate')
        .forEach(element => {
            const key = element.dataset.key;
            if (translations[currentLanguage][key]) {
                element.textContent =
                    translations[currentLanguage][key];
            }
        });
    document.querySelectorAll('.translate-placeholder')
        .forEach(element => {
            const key = element.dataset.key;
            if (translations[currentLanguage][key]) {
                element.placeholder =
                    translations[currentLanguage][key];
            }
        });
    const aboutSlide1 =
        document.getElementById('aboutSlide1');
    const aboutSlide2 =
        document.getElementById('aboutSlide2');
    const aboutSlide3 =
        document.getElementById('aboutSlide3');
    if (aboutSlide1) {
        aboutSlide1.src =
            `assets/img/aboutSlide1_${currentLanguage}.png`;
    }

    if (aboutSlide2) {
        aboutSlide2.src =
            `assets/img/aboutSlide2_${currentLanguage}.png`;
    }
    if (aboutSlide3) {
        aboutSlide3.src =
            `assets/img/aboutSlide3_${currentLanguage}.png`;
    }
}

function changeLanguage(language) {
    currentLanguage = language;
    translatePage();
}

document.addEventListener('click', function (e) {
    const button = e.target.closest('.change-language');
    if (button) {
        const selectedLanguage =
            button.dataset.language;
        changeLanguage(selectedLanguage);
    }
});

/* ======================================
   ABOUT SLIDER
====================================== */

document.addEventListener('click', function (e) {

    const slider =
        document.getElementById('aboutSlider');

    if (!slider) return;

    const slideWidth =
        slider.clientWidth;

    // SIGUIENTE
    if (e.target.closest('#aboutNext')) {

        slider.scrollBy({
            left: slideWidth,
            behavior: 'smooth'
        });

    }

    // ANTERIOR
    if (e.target.closest('#aboutPrev')) {

        slider.scrollBy({
            left: -slideWidth,
            behavior: 'smooth'
        });

    }

});

translatePage();