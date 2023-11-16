function contar() {
    let start = document.querySelector('input#inicio')
    let end = document.querySelector('input#final')
    let step = document.querySelector('input#passo')
    let res = document.querySelector('div#res')
    if (start.value.length == 0 || end.value.length == 0 || step.value.length == 0) {
        //window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = `Contando: <br>`
        let i = Number(start.value)
        let f = Number(end.value)
        let p = Number(step.value)
        if (p <= 0) {
            window.alert(`Passo inválido!\nCONSIDERANDO PASSO = 1`)
            p = 1
        }
        if (i < f){
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }  
        }
        res.innerHTML += `\u{1F3C1}`
    }
}