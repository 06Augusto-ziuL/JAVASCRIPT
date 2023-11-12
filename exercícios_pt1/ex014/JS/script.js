function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var hora = new Date().getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora > 4 && hora <= 12) {
        document.body.style.background = '#e2cd9f'
        img.src = 'images/foto-dia.png'
    } else if (hora > 12 && hora < 18) {
        img.src = 'images/foto-tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        img.src = 'images/foto-noite.png'
        document.body.style.background = 'rgb(40, 30, 55)'
    }
}