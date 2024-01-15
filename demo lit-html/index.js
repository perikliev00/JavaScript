import { html, render } from './node_modules/lit-html/lit-html.js';
function chanchgeColor() {
    let myHeader=document.getElementsByTagName('h1')[0];
    myHeader.style.color='red';
}
let data= {
    value:123,
    chanchgeColor,
}
  let sayHello = (name) => html `<h1 >Hello ${name}</h1>`;
  let addInput=(data)=> html`<input  value=${data.value}></input>`

  let element = document.querySelector('main');
  let container=document.querySelector('main');
  let button= (data,name) => html `<button @click=${data.chanchgeColor}>${name}</button>`;
  let comined= html`
  ${sayHello('Alex')}
  ${button(data,`Click`)}
  ${button(data,'New Button')}
  ${addInput(data)}
  `
  render(comined,container);
  