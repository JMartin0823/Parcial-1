import * as components from "./components/card/card.js"

import data from "./components/data.js";

class App extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({ mode: "open" })
    }

    connectedCallback(){
        this.render();
    }

    render(){
        data.forEach((HP)=>{
            this.shadowRoot.innerHTML += `
            <app-card name="${HP.name}" species="${HP.species}" gender="${HP.gender}" house="${HP.house}" yearOfBirth="${HP.yearOfBirth}" alternate_names="${HP.alternate_names}"></app-card>

            `
        })
        
    }

}

customElements.define("app-container", App)
