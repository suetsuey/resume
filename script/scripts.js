const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        darkModeToggle.innerHTML = '<img src="images/sun-line.png" alt="Sun Icon" id="sunIcon">'; // Sun emoji when in dark mode
    }
    else {
        darkModeToggle.innerHTML = '<img src="images/moon-line.png" alt="Moon Icon" id="moonIcon">'; // Moon emoji when in light mode
    }
});

document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});