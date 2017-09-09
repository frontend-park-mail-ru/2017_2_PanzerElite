const sections = [
    ['login-sec', 'SIGN IN'],
    ['register-sec', 'SIGN UP'],
    ['menu-sec', 'MENU'],
    ['about-sec', 'ABOUT'],
];

const application = document.getElementById('application');
const nav = document.getElementById('navigation');

for (let sect of sections) {
    const button = document.createElement('input');
    button.setAttribute('type', 'button');
    button.setAttribute('class', 'button-nav');

    button.setAttribute('data-section', sect[0]);
    button.value = sect[1];
    nav.appendChild(button);
}
const liveSectionCollection = application.getElementsByTagName('section');

nav.addEventListener('click', (event) => {

    const sectionID = event.target.getAttribute('data-section');
    const sectionsArray = Array.from(liveSectionCollection);
    sectionsArray.forEach((sectionElement) => {
        sectionElement.hidden = true;
        if (sectionElement.id === sectionID) {
            sectionElement.hidden = false;
        }
    });
}, false);