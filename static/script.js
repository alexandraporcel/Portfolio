// Nav con sombra al hacer scroll 
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 10);
});

// Animación al hacer scroll 

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {              // ¿está visible?
            entrada.target.classList.add('visible'); // agregamos la clase que dispara el CSS
            observador.unobserve(entrada.target);     // dejamos de vigilarlo (ya se animó)
        }
    });
}, { threshold: 0.15 }); // se activa cuando el 15% del elemento es visible

document.querySelectorAll('.reveal').forEach(el => observador.observe(el));

// Efecto tilt (inclinación) en las tarjetas 
function activarTilt(card) {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotY = ((x - rect.width / 2) / (rect.width / 2)) * 4;
        const rotX = ((rect.height / 2 - y) / (rect.height / 2)) * 4;
        card.style.transform = `perspective(600px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => card.style.transform = '');
}

document.querySelectorAll('.card, .passion-card').forEach(activarTilt);