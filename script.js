
// Destacar a seção ao clicar no menu
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
    item.addEventListener('click', event => {
        // Remove a classe 'active' de todas as seções
        document.querySelectorAll('section').forEach(section => {
            section.classList.remove('active');
        });

        // Adiciona a classe 'active' à seção correspondente
        const targetId = event.target.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.classList.add('active');
    });
});

// Mudar cor do menu ao passar o mouse (efeito adicional)
menuItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.color = 'red';
    });

    item.addEventListener('mouseout', () => {
        item.style.color = 'white';
    });
});

// Captura todos os links que apontam para IDs
const menuLinks = document.querySelectorAll('a[href^="#"]');

menuLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Evita o comportamento padrão do link

        const targetId = this.getAttribute('href').substring(1); // Obtém o ID do destino
        const targetElement = document.getElementById(targetId);

        // Faz o deslizamento suave
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});