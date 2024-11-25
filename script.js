document.addEventListener('DOMContentLoaded', () => {
    loadPage('inicio');

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(savedTheme);
    }

    const toggleThemeBtn = document.getElementById('toggle-theme');
    toggleThemeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark-mode');
        } else {
            localStorage.removeItem('theme');
        }
    });
});

function loadPage(page) {
    fetch(page + '.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;
        })
        .catch(error => {
            console.error('Erro ao carregar a página:', error);
        });
}

function abrirTrailer(url) {
    window.open(url, 'Trailer', 'width=600,height=400');
}

document.addEventListener('submit', function (event) {
    if (event.target.id === 'form-contato') {
        event.preventDefault();
        document.getElementById('mensagem-sucesso').style.display = 'block';
    }
});
