// Function to toggle the theme
function switchTheme() {
    const body = document.body;
    const header = document.querySelector('header') as HTMLElement;
    const sections = document.querySelectorAll('.section') as NodeListOf<HTMLElement>;
    const button = document.querySelector('#theme-switcher') as HTMLButtonElement;

    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        header.classList.remove('dark-theme');
        sections.forEach(section => section.classList.remove('dark-theme'));
        button.textContent = 'Switch to Dark Theme';
    } else {
        body.classList.add('dark-theme');
        header.classList.add('dark-theme');
        sections.forEach(section => section.classList.add('dark-theme'));
        button.textContent = 'Switch to Light Theme';
    }
}

// Attach event listener to button
document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('#theme-switcher') as HTMLButtonElement;
    if (button) {
        button.addEventListener('click', switchTheme);
    }
});
