/* ======================================
   COMPONENTES
====================================== */

function cargarComponente(id, archivo) {
    fetch(archivo)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;

            if (id === 'navbar') {
                initializeLanguageSystem();
            }
        });
}

cargarComponente('navbar', 'components/navbar.html');
cargarComponente('registro', 'components/registro.html');
cargarComponente('footer', 'components/footer.html');

/* ======================================
   IDIOMAS
====================================== */

let currentLanguage = 'es';

function translatePage() {
    const currentLanguageElement = document.getElementById('currentLanguage');

    if (currentLanguageElement) {
        currentLanguageElement.textContent =
            translations[currentLanguage].language_short;
    }

    document.querySelectorAll('.translate')
        .forEach(element => {

            const key = element.dataset.key;

            if (translations[currentLanguage][key]) {
                element.textContent =
                    translations[currentLanguage][key];
            }
        });
}

function changeLanguage(language) {
    currentLanguage = language;
    translatePage();
}

function initializeLanguageSystem() {
    document.addEventListener('click', function (e) {

        const button = e.target.closest('.change-language');

        if (button) {
            const selectedLanguage = button.dataset.language;
            changeLanguage(selectedLanguage);
        }
    });

    translatePage();
}