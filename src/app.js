import { LightningElement } from "lwc";

export default class App extends LightningElement {
  
  submit(){
    var btn = this.template.querySelector(".btn");
    var btnText = this.template.querySelector(".btnText");
    btnText.innerHTML = "Submitted";
    btn.classList.add("active");
  }
}
