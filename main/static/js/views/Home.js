import AbstractView from "./AbstractView.js";
export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Gear");
       
        
    }
    async getHtml() {
        return `<link rel="stylesheet" href="/static/css/home.css">  
        <div id="main">
        <h1>Well come to our SPA web about gear</h1>
        <div class="container" id="click">                           
        <button class="sw"><a href="/mouse" data-link>Mouse</a></button>     
          
        <button class="sw"><a href="/keyboard" data-link>Keyboard</a></button>     
                  
        <button class="sw"><a href="/headphones" data-link>Head phones</a></button>     

        <button class="sw"><a href="/screen" data-link>Screen</a></button>     
         

</div>
        </div>
        
        `;
    }
}