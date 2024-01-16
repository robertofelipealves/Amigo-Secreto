let amigos = [];

function adicionar() {
    let amigoInput = document.getElementById('nome-amigo');
    if (amigoInput.value == '') {
        alert('Informe o nome do amigo!');
        return;
    }

    // Converter o nome para maiúsculo
    let nomeAmigo = amigoInput.value.toUpperCase();

    if (amigos.includes(nomeAmigo)) {
        alert('Nome já adicionado!');
        return;
    }

    let lista = document.getElementById('lista-amigos');

    amigos.push(nomeAmigo);

    if (lista.textContent == '') {
        lista.textContent = nomeAmigo;
    } else {
        lista.textContent = lista.textContent + ', ' + nomeAmigo;
    }

    amigoInput.value = '';
}

function sortear() {
    if (amigos.length < 4) {
        alert('Adicione pelo menos 4 amigos!');
        return;
    }

    embaralhar(amigos);

    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' + amigos[0] + '<br/>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' + amigos[i + 1] + '<br/>';
        }
    }
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}
