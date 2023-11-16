function calc() {
    let num = document.querySelector('input#num')
    let tab = document.querySelector('select#tabuada')
    if (num.value.length == 0) {
        window.alert('[ERRO] Informe um valor dentro da caixa!')
    } else  {
        n = Number(num.value)
        c = 0
        tab.innerHTML = '<option id="title"></option'
        let title = document.querySelector('option#title')
        if (n >= 0) {
            title.text = `-- Tabuada de ${n} --`
        } else {
            title.text = `-- Tabuada de (${n}) --`
        }
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}
