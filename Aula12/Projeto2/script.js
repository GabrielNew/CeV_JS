function verificaIdade() {
    var data = new Date();
    var img = document.getElementById('imagens')
    var ano = data.getFullYear()
    var nascimento = document.getElementById('nasc')
    var resultado = document.getElementById('res');
    
    if (nascimento.value.length == 0 || nascimento.value > ano) {
        alert('erro')
    } else {
        var sex = document.getElementsByName('sexo')
        var idade = ano - Number(nascimento.value);
        var gen = ''
        if (sex[0].checked) {
            gen = 'Masculino'
            if (idade >= 0 && idade < 10) {
                img.src = 'bbm.png'
            } else if (idade < 21) {
                img.src = 'hfm.png'
            } else if (idade < 50) {
                img.src = 'ham.png'
            } else {
                img.src = 'him.png'
            }
        } else {
            gen = 'Feminino'
            if (idade >= 0 && idade < 10) {
                img.src = 'bbf.png'
            } else if (idade < 21) {
                img.src = 'mjf.png'
            } else if (idade < 50) {
                img.src = 'maf.png'
            } else {
                img.src = 'if.png'
            }
        }

        resultado.innerHTML = `gen é ${gen} e idade é ${idade}`;
    }
}