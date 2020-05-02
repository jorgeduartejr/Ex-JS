function calcular() {
    var num = window.document.getElementById('txtn')
    var tab = window.document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('[ERRO] Digite um número válido')
    } else {
        var n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }


    }



    /* for (var count = 1; count <= 10; count++)
         tabuada += ini + 'x' + count + '=' +
         ini * count + '<br/>' */












}