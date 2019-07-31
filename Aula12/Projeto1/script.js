function carregar() {

    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagens');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`
    
    if (hora >= 0 && hora < 12) {
        img.src = 'morning.png'
    } else if(hora < 18) {
        img.src = 'afternoon.png'
    } else {
        img.src = 'night.png'
    }

}