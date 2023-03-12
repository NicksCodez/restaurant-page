export default function pageLoad() {
  // const content = document.getElementById('content');

  const header = document.createElement('div');
  header.setAttribute('id', 'header');
  const ul = document.createElement('ul');
  header.appendChild(ul);
  for (let i = 0; i < 3; i++) {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    ul.appendChild(li);
    li.appendChild(btn);
    switch (i) {
      case 0:
        btn.textContent = 'Home';
        break;
      case 1:
        btn.textContent = 'Menu';
        break;
      case 2:
        btn.textContent = 'Contact';
        break;
      default:
        break;
    }
  }
  // content.appendChild(header);
  document.body.append(header);

  const footer = document.createElement('div');
  footer.setAttribute('id', 'footer');
  footer.textContent = 'Some awfully grave copyright information';
  // content.appendChild(footer);
  document.body.appendChild(footer);
}
