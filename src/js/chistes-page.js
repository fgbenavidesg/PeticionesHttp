import { obtenerChiste } from "./http-provider";

const body = document.body;
let btnOtro,olList;

const crearChisteHtml= () =>{

    const html = `
    <h1 class="mt-5">chistes</h1>
    <hr>
    <button class="btn btn-primary" >nuevo chiste</button>
    <ol class="mt-2 list-group">
    </ol>
    `;
    const divChistes = document.createElement('div'); 
    body.append(divChistes);


}
const eventos =() =>{
     //solo hay un ol por lo tanto preferimos ol al id o clase
     olList = document.querySelector('ol');
     btnOtro= document.querySelector('button');

    btnOtro.addEventListener('click',async() => {
        btnOtro.disabled=true;
        dubujarChiste(await obtenerChiste());
        btnOtro.disabled=false;
    }); 
 }
 const dubujarChiste=(chiste) =>{

    const olItem = document.createElement('li');
    olItem.innerHTML =`<b>${chiste.id}:${chiste.value} </b>`; 
    olItem.classList.add('list-group-item');
    olList.append(olItem);
 }

export const init =() =>{
    crearChisteHtml();
    eventos();
}