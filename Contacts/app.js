import { html, render } from './node_modules/lit-html/lit-html.js';
import { contacts } from './contacts.js';
const toggleData = (event) => {
    const element = event.target.closest('.contact').querySelector('.details');
    console.log(element);
    if(element.classList.contains('hidden')) {
        element.style.display='block';
        element.classList.remove('hidden');
    } else {
        element.style.display='none';
        element.classList.add('hidden');
    }
};
const contactTemplate = (contact) => html`
  <div class="contact card">
    <div>
      <i class="far fa-user-circle gravatar"></i>
    </div>
    <div class="info">
      <h2>Name: ${contact.name}</h2>
      <button class="detailsBtn" @click=${(event)=>{toggleData(event)}}>Details</button>
      <div class="details hidden" id="${contact.id}">
        <p>Phone number: ${contact.phoneNumber}</p>
        <p>Email: ${contact.email}</p>
      </div>
    </div>
  </div>
`;


const element = document.getElementById('contacts');

if (element) {
  render(html`
    ${contacts.map(contact => contactTemplate(contact))}
  `, element);
}