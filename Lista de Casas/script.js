function addCasa() {
    const casaNum = document.querySelector("input[name ='casaNum']").value
    const bairro = document.querySelector("input[name ='bairro']").value
    const cidade = document.querySelector("input[name ='cidade']").value
    const casaArea = document.querySelector("input[name ='casaArea']").value

    // um li vai ser criado
    const casaInfo = document.createElement("li")

    //cada elemento de li vai receber as seguintes informações
    casaInfo.innerText = `Área: ${casaArea}m2\n    
    Número: ${casaNum}\n
    Bairro: ${bairro}\n
    Cidade: ${cidade}`

    //criando o botao de remover
    let removerCasa = document.createElement("button")
    removerCasa.type = "button"
    removerCasa.innerText = "remover casa"
    removerCasa.setAttribute("onclick", "removerCasa(this)")

    //o botao vai ser adicionado junto com o li que foi criado
    casaInfo.appendChild(removerCasa)

    document.getElementById("lista-de-casas").appendChild(casaInfo)
}

function removerCasa(button) {
    let liRemover = button.parentNode //remove
    document.getElementById("lista-de-casas").removeChild(liRemover)
}
