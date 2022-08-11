class App {
    addProperty() {
        event.preventDefault()
        let kind = document.querySelector("select[name='kind']").value
        let area = document.querySelector("input[name='area']").value
        let rented = document.querySelector("input[name='rented']").checked
        
        let property = new Property(kind, area, rented)//esta em outro arquivo
        this.addOnPropertiesList(property)
        this.cleanForm()
    }

    addOnPropertiesList(property) {
        let listElement = document.createElement("li") //vai ser adicionado dentro de ul
        let propertyInfo = " Tipo: " + property.kind + "(Área: " + property.area + "m²)" //string que vai ser adicionada dentro do li
       
        if (property.rented) { //se a propriedade estiver alugada, cria a marca de alugado
            let rentedMark = this.createRentedMark()
            listElement.appendChild(rentedMark) //adiciona esse elemento no li
        }

        listElement.innerHTML += propertyInfo
        //criando o botao de remover
        let buttonToRemove = this.createRemoveButton()
        listElement.appendChild(buttonToRemove)
        document.getElementById("properties").appendChild(listElement)
    }

    // a marca de alugado
    createRentedMark() {
        let rentedMark = document.createElement("span")
        rentedMark.style.color = "white"
        rentedMark.style.backgroundColor = "red"
        rentedMark.innerText = "ALUGADO"
        return rentedMark
    }

    // o botao de remover
    createRemoveButton() {
        let buttonToRemove = document.createElement("button")
        buttonToRemove.setAttribute("onclick", "app.remove()")
        buttonToRemove.innerText = "Remover"
        return buttonToRemove
    }

    //limpar o elemento name="area"
    cleanForm() {
        document.querySelector("input[name='area']").value = ""
        document.querySelector("input[name='rented']").checked = false
    }

    remove() {
        let liToRemove = event.target.parentNode
        document.getElementById("properties").removeChild(liToRemove)
    }

}
