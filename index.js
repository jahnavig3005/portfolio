const sr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 2000,
    reset: true
});

sr.reveal(`.intro, .btn, .social-links, .about, .img-container, .me, .aboutcontainer, .about-content, .imgcontainer, .q, .education-card, .education-info, .u, .r, .work-container, .x, .contact-box`, {
    interval: 200
});

document.getElementById("aboutbtn").addEventListener("click", function () {
    scrollToSection('about', this);
});

document.getElementById("edubtn").addEventListener("click", function () {
    scrollToSection('education', this);
});

document.getElementById("h1btn").addEventListener("click", function () {
    scrollToSection('home', document.querySelector('nav ul li a[href="#home"]'));
});

document.querySelector('nav ul li a[href="#home"]').addEventListener("click", function (event) {
    event.preventDefault(); 
    scrollToSection('home', this);
});

document.querySelector('nav ul li a[href="#about"]').addEventListener("click", function (event) {
    event.preventDefault(); 
    scrollToSection('about', this);
});

document.querySelector('nav ul li a[href="#education"]').addEventListener("click", function (event) {
    event.preventDefault(); 
    scrollToSection('education', this);
});

function scrollToSection(sectionId, element) {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    setActive(element);
}

function setActive(currentElement) {
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.classList.remove('active');
    });

    currentElement.classList.add('active');
}


