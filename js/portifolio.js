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

      // Animação ao rolar
      const animateOnScroll = () => {
        const elements = document.querySelectorAll(".fade-in-up");
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
        elements.forEach((el) => observer.observe(el));
      };
      animateOnScroll();

      // Animação da Timeline ao rolar
      const timelineItems = document.querySelectorAll(".timeline-item");

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
          rootMargin: "0px 0px -10px 0px",
        }
      );

      timelineItems.forEach((item) => {
        observer.observe(item);
      });

      // Slider de Clientes
      if (typeof Swiper !== "undefined") {
        const swiperClients = new Swiper("#sliderClients", {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          pagination: {
            el: "#paginationClients",
            clickable: true,
          },
          breakpoints: {
            480: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            992: {
              slidesPerView: 1,
            },
            1500: {
              slidesPerView: 5,
            }
          },
        });
      }

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
    // MODAIS DE PROJETOS E CLIENTES
    const timelineItems = document.querySelectorAll(".timeline-item");
    const clientCards = document.querySelectorAll(".swiper-slide");
    const modals = document.querySelectorAll(".modal-overlay");
    const closeButtons = document.querySelectorAll(".close-modal-full");

    // Abrir modal ao clicar nos cards
    timelineItems.forEach((item) => {
      item.addEventListener("click", function () {
        const modalId = this.getAttribute("data-modal");
        const modal = document.getElementById(modalId);
        if (modal) {
          modal.classList.add("active");
          document.body.style.overflow = "hidden";
        }
      });
    });

    clientCards.forEach((card) => {
      card.addEventListener("click", function () {
        const modalId = this.getAttribute("data-modal");
        const modal = document.getElementById(modalId);
        if (modal) {
          modal.classList.add("active");
          document.body.style.overflow = "hidden";
        }
      });
    });

    // Fechar modal ao clicar no X
    closeButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const modal = this.closest(".modal-overlay");
        modal.classList.remove("active");
        document.body.style.overflow = "auto";
      });
    });

    // Fechar modal ao clicar fora
    modals.forEach((modal) => {
      modal.addEventListener("click", function (e) {
        if (e.target === modal) {
          modal.classList.remove("active");
          document.body.style.overflow = "auto";
        }
      });
    });