// JavaScript para funcionalidad interactiva

document.addEventListener('DOMContentLoaded', function() {
    // Variables
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const ctaButton = document.querySelector('.cta-button');
    const contactForm = document.querySelector('.contact-form');
    
    // Toggle del menú hamburguesa
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Animación de las barras del hamburger
        const bars = hamburger.querySelectorAll('.bar');
        if (hamburger.classList.contains('active')) {
            bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
        } else {
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        }
    });

    // Cerrar menú al hacer click en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            
            // Resetear animación del hamburger
            const bars = hamburger.querySelectorAll('.bar');
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        });
    });

    // Scroll suave para navegación
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Altura del navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Funcionalidad del botón CTA
    ctaButton.addEventListener('click', function() {
        const serviciosSection = document.querySelector('#servicios');
        const offsetTop = serviciosSection.offsetTop - 70;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    });

    // Animación de aparición al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar elementos para animación
    const animatedElements = document.querySelectorAll('.service-card, .about-content, .contact-content');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Manejo del formulario de contacto
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener valores del formulario
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;
        
        // Validación básica
        if (!nombre || !email || !mensaje) {
            mostrarMensaje('Por favor, completa todos los campos.', 'error');
            return;
        }
        
        if (!validarEmail(email)) {
            mostrarMensaje('Por favor, ingresa un email válido.', 'error');
            return;
        }
        
        // Simular envío del formulario
        const submitButton = contactForm.querySelector('.submit-button');
        const originalText = submitButton.textContent;
        
        submitButton.textContent = 'Enviando...';
        submitButton.disabled = true;
        
        setTimeout(() => {
            mostrarMensaje('¡Mensaje enviado correctamente! Te contactaremos pronto.', 'success');
            contactForm.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 2000);
    });

    // Función para validar email
    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Función para mostrar mensajes
    function mostrarMensaje(texto, tipo) {
        // Remover mensaje anterior si existe
        const mensajeAnterior = document.querySelector('.mensaje-temporal');
        if (mensajeAnterior) {
            mensajeAnterior.remove();
        }
        
        const mensaje = document.createElement('div');
        mensaje.className = `mensaje-temporal ${tipo}`;
        mensaje.textContent = texto;
        mensaje.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 8px;
            color: white;
            font-weight: bold;
            z-index: 10000;
            transition: all 0.3s ease;
            transform: translateX(400px);
            ${tipo === 'success' ? 'background-color: #27ae60;' : 'background-color: #e74c3c;'}
        `;
        
        document.body.appendChild(mensaje);
        
        // Animación de entrada
        setTimeout(() => {
            mensaje.style.transform = 'translateX(0)';
        }, 100);
        
        // Remover después de 5 segundos
        setTimeout(() => {
            mensaje.style.transform = 'translateX(400px)';
            setTimeout(() => {
                if (mensaje.parentNode) {
                    mensaje.parentNode.removeChild(mensaje);
                }
            }, 300);
        }, 5000);
    }

    // Efecto parallax suave en el hero
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const rate = scrolled * -0.5;
        
        if (hero) {
            hero.style.transform = `translateY(${rate}px)`;
        }
        
        // Cambiar opacidad del navbar al hacer scroll
        const navbar = document.querySelector('.navbar');
        if (scrolled > 50) {
            navbar.style.backgroundColor = 'rgba(44, 62, 80, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.backgroundColor = 'var(--secondary-color)';
            navbar.style.backdropFilter = 'none';
        }
    });

    // Contador animado (ejemplo)
    function animarContador(elemento, objetivo, duracion = 2000) {
        let inicio = 0;
        const incremento = objetivo / (duracion / 16);
        
        function actualizar() {
            inicio += incremento;
            if (inicio < objetivo) {
                elemento.textContent = Math.floor(inicio);
                requestAnimationFrame(actualizar);
            } else {
                elemento.textContent = objetivo;
            }
        }
        
        actualizar();
    }

    // Función para detectar si un elemento está visible
    function estaVisible(elemento) {
        const rect = elemento.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Agregar funcionalidad de teclas de acceso rápido
    document.addEventListener('keydown', function(e) {
        // Alt + H = Ir al inicio
        if (e.altKey && e.key === 'h') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        
        // Alt + C = Ir a contacto
        if (e.altKey && e.key === 'c') {
            e.preventDefault();
            const contacto = document.querySelector('#contacto');
            if (contacto) {
                contacto.scrollIntoView({ behavior: 'smooth' });
            }
        }
        
        // Escape = Cerrar menú móvil
        if (e.key === 'Escape') {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    console.log('🚀 Página web cargada correctamente!');
    console.log('💡 Atajos de teclado disponibles:');
    console.log('   Alt + H: Ir al inicio');
    console.log('   Alt + C: Ir a contacto');
    console.log('   Escape: Cerrar menú móvil');
});