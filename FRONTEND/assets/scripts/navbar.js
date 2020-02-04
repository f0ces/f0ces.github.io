const h = document.getElementById('js-navbar-toggle');
const m = document.getElementById('mobile');

function openNav() {

    if (m.style.display === "none") {
        m.style.display = 'block';
        m.classList.add('mobile');


    } else {
        
        m.style.display = 'none';

    }
}
h.addEventListener("click", function () {
    openNav();
});