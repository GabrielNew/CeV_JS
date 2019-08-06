function contar() {
    var inicio = document.getElementById('ini');
    var fim = document.getElementById('end');
    var passo = document.getElementById('pass')
    var msg = document.getElementById('msg')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        msg.innerHTML = 'Erro'
        window.alert('Erro')
    } else {

        if (p <= 0) {
            window.alert('Passo Incorreto... Trocando passo para 1')
            p = 1
        }

        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if (i<f) {
            msg.innerHTML = 'Contagem Progressiva: '
            for (let index = i; index < f; index += p ) {
                msg.innerHTML += ` ${index}` 
            }
        } else {
            msg.innerHTML = 'Contagem Regressiva: '
            for (let index = i; index > f; index -= p) {
                msg.innerHTML += ` ${index}`
            }
        }
    }
}