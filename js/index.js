export default class Main {
    constructor(branch){
        this.branch = branch;
        this.inputCant = document.getElementById("cantidad")
        console.log("Branch main: "+branch)
        this.addEvento()
    }

    addEvento(){
        this.inputCant.addEventListener("change", e => {
            this.insertarElmentos(this.inputCant.value)
        })
    }

    insertarElmentos(cantidad){
        let divElem = document.getElementById("elementos")
        divElem.innerHTML = ""
        for (let index = 0; index < cantidad; index++) {
            let h3 = document.createElement("h3")
            h3.innerHTML = "Branch " + (index + 1)
            divElem.appendChild(h3)
        }
    }

    

}

let main = new Main("branch_initial")