// Function to toggle the theme
function switchTheme() {
    var body = document.body;
    var header = document.querySelector('header');
    var sections = document.querySelectorAll('.section');
    var button = document.querySelector('#theme-switcher');
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        header.classList.remove('dark-theme');
        sections.forEach(function (section) { return section.classList.remove('dark-theme'); });
        button.textContent = 'Switch to Dark Theme';
    }
    else {
        body.classList.add('dark-theme');
        header.classList.add('dark-theme');
        sections.forEach(function (section) { return section.classList.add('dark-theme'); });
        button.textContent = 'Switch to Light Theme';
    }
}
// Attach event listener to button
document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector('#theme-switcher');
    if (button) {
        button.addEventListener('click', switchTheme);
    }
});
