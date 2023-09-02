import data from "../data.js";

class Card extends HTMLElement {

    static get observedAttributes(){
        return ["name", "species", "gender", "house", "yearOfBirth", "alternate_names"]
    }

    constructor(){
        super();
        this.attachShadow({ mode: "open" })
        this.onButtonClicked.bind(this)
    }

    connectedCallback(){
        this.mount();
    }

    attributeChangedCallback(propName, _, newValue){
        this[propName] = newValue;
        this.render()

    }

    mount(){
        this.render();
        this.addEventListener();
    }

    addEventListener(){
        this.shadowRoot
        .querySelector("button")
        .addEventListener("click",()=>{
            console.log("funciona")
            this.name = `${this.alternate_names}`
            this.mount();
        });
    }

    onButtonClicked(){
        console.log("funciona")
        this.name = `${this.alternate_names}`
        this.mount();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/card/card.css">
        <section>
        <h1>${this.name}<h1/>
        <h2>${this.species}<h2/>
        <h2>${this.gender}<h2/>
        <h2>${this.house}<h2/>
        <h2>${this.yearOfBirth}<h2/>
        <button>Change name</button>
        </section>
        `
    }

}

customElements.define("app-card", Card)

export default Card

