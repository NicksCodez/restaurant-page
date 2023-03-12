export default function loadContact() {
  const content = document.getElementById('content');

  const contact = document.createElement('div');
  contact.setAttribute('id', 'contact');
  content.appendChild(contact);

  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  const p3 = document.createElement('p');

  p1.textContent = 'Eager to have you visit us!';
  p2.textContent = 'Some phone number';
  p3.textContent = 'Some address';

  contact.appendChild(p1);
  contact.appendChild(p2);
  contact.appendChild(p3);
}
