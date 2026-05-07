function cargarComponente(id, archivo) {
    fetch(archivo)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        });
}

cargarComponente('navbar', 'components/navbar.html');
cargarComponente('registro', 'components/registro.html');
cargarComponente('footer', 'components/footer.html');