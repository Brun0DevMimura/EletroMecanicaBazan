 document.addEventListener("DOMContentLoaded", function () {
      // Menu Mobile
      const hamburger = document.querySelector(".ic-menu");
      const mobileMenu = document.querySelector(".content-nav");
      if (hamburger && mobileMenu) {
        hamburger.addEventListener("click", function () {
          mobileMenu.classList.toggle("active");
        });
      }

      // Fechar menu ao clicar nos links
      const navLinks = document.querySelectorAll(".nav a");
      navLinks.forEach((link) => {
        link.addEventListener("click", () => {
          if (mobileMenu.classList.contains("active")) {
            mobileMenu.classList.remove("active");
          }
        });
      });

      // Header Sticky
      const header = document.querySelector(".header");
      window.addEventListener("scroll", function () {
        if (window.scrollY > 100) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
      });

      // Botão Voltar ao Topo
      const backToTopButton = document.querySelector(".seta-up");
      window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
          backToTopButton.style.display = "flex";
        } else {
          backToTopButton.style.display = "none";
        }
      });

      backToTopButton.addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });

      // Sliders
      if (typeof Swiper !== "undefined") {
        const swiperDestaques = new Swiper("#sliderDestaques", {
          slidesPerView: 1,
          spaceBetween: 20,
          loop: true,
          pagination: { el: "#paginationDestaques", clickable: true },
          navigation: { nextEl: "#nextDestaques", prevEl: "#prevDestaques" },
          breakpoints: {
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          },
        });
      }

      // Animação do Logo
      const logoElement = document.querySelector(".fadeInDown");
      if (logoElement) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("appear");
              } else {
                entry.target.classList.remove("appear");
              }
            });
          },
          { threshold: 0.1 }
        );
        observer.observe(logoElement);
      }

      // Modais
      const modalButtons = document.querySelectorAll(".btn-essence");
      const modals = document.querySelectorAll(".modal-overlay");
      const closeButtons = document.querySelectorAll(".close-modal");

      modalButtons.forEach((button) => {
        button.addEventListener("click", () => {
          const target = button.getAttribute("data-target");
          const modal = document.getElementById(`modal-${target}`);
          if (modal) {
            modal.classList.add("active");
            document.body.style.overflow = "hidden";
          }
        });
      });

      closeButtons.forEach((button) => {
        button.addEventListener("click", () => {
          const modal = button.closest(".modal-overlay");
          modal.classList.remove("active");
          document.body.style.overflow = "auto";
        });
      });

      modals.forEach((modal) => {
        modal.addEventListener("click", (e) => {
          if (e.target === modal) {
            modal.classList.remove("active");
            document.body.style.overflow = "auto";
          }
        });
      });

      // ANIMAÇÃO DOS MAPAS AO ROLAR
      const animateMapsOnScroll = () => {
        const leftMap = document.querySelector(".slideInLeft");

        if (!leftMap) return;

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("appear");
              } else {
                entry.target.classList.remove("appear");
              }
            });
          },
          {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px",
          }
        );

        observer.observe(leftMap);
      };

      // INICIA A ANIMAÇÃO DOS MAPAS
      animateMapsOnScroll();
    });