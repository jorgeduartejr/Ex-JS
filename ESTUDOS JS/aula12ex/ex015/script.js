function verificar() {
    var data = new Date() // pega a data do computador
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Digite o ano novamente!')

    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'criançahomem.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'homemjovem.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'homemadulto.png')
            } else {
                // Idoso
                img.setAttribute('src', 'homemidoso.png')
            }
        } else
        if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'criançamulher.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'mulherjovem.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'mulheradulta.png')
            } else {
                // Idoso
                img.setAttribute('src', 'mulheridosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)



    }


}