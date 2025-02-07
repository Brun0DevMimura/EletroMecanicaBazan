// Smooth Scrolling
$("#navbar a, .btn").on("click", function (event) {
    if (this.hash !== "") {
        event.preventDefault();

        const hash = this.hash;

        $("html, body").animate(
            {
                scrollTop: $(hash).offset().top - 50
            },
            800
        );
    }
});

// Sticky menu background
window.addEventListener("scroll", function () {
    if (window.scrollY > 150) {
        document.querySelector("#navbar").style.opacity = 0.9;
    } else {
        document.querySelector("#navbar").style.opacity = 1;
    }
});

// Método 1: Usando reset() do formulário
const form = document.getElementById('contact-form');
    
form.addEventListener('submit', function(e) {
    setTimeout(() => {
        form.reset();
        alert('Mensagem enviada com sucesso!');
    }, 100);
});

document.querySelectorAll(".navbar-items a").forEach(link => {
    link.addEventListener("click", function() {
        document.getElementById("menu-toggle").checked = false; // Fecha o menu
    });
});
