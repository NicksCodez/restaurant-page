import RibeyeImg from './ribeye.jpg';

export default function loadMenu() {
  const content = document.querySelector('#content');

  const menu = document.createElement('div');
  menu.setAttribute('id', 'menu');
  content.appendChild(menu);

  const ul = document.createElement('ul');
  menu.appendChild(ul);

  for (let i = 0; i < 5; i++) {
    const li = document.createElement('li');
    li.setAttribute('class', 'item');
    ul.appendChild(li);

    const imageDiv = document.createElement('div');
    imageDiv.setAttribute('class', 'image');
    li.appendChild(imageDiv);

    const image = document.createElement('img');
    image.setAttribute('src', RibeyeImg);
    imageDiv.appendChild(image);

    const titleDiv = document.createElement('div');
    titleDiv.setAttribute('class', 'title');
    titleDiv.textContent = 'Ribeye';
    li.appendChild(titleDiv);

    const descriptionDiv = document.createElement('div');
    descriptionDiv.setAttribute('class', 'description');
    descriptionDiv.textContent = 'mega delicious steak';
    li.appendChild(descriptionDiv);
  }
}
