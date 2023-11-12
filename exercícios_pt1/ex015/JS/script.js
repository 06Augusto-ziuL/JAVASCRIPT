function verificar() {
    var data = new Date().getFullYear()
    var nasc = document.getElementById('nasc')
    var res = document.querySelector('div#res')
    var idade = Number(data - nasc.value)
    if (nasc.value.length == 0 || nasc.value == 0) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var genero = document.getElementsByName('sexo')
        var img = document.createElement('img')
        if (genero[0].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 11) {
                img.setAttribute('src', 'imagens/little-girl.png')
            } else if (idade < 30) {
                img.setAttribute('src', 'imagens/young-woman.png')
            } else if (idade < 65) {
                img.setAttribute('src', 'imagens/adult-woman.png')
            } else {
                img.setAttribute('src', 'imagens/elderly-woman.png')
            }
        } else if (genero[1].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 11) {
                img.setAttribute('src', 'imagens/little-boy.png')
            } else if (idade < 30) {
                img.setAttribute('src', 'imagens/young-man.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'imagens/adult-man.png')
            } else {
                img.setAttribute('src', 'imagens/elderly-man.png')
            }
        }
        res.style.textAlign = 'center'
        res.style.lineHeight = 4
        res.innerHTML = `Detectamos ${genero} com idade ${idade} anos`
        res.appendChild(img)
    }
}