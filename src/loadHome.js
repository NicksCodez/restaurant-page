export default function loadHome() {
  const content = document.getElementById('content');

  const home = document.createElement('div');
  home.setAttribute('id', 'home');
  content.appendChild(home);

  const headline = document.createElement('div');
  headline.setAttribute('class', 'headline');
  headline.textContent = 'Steak Adorers';
  home.appendChild(headline);

  const information = document.createElement('div');
  information.setAttribute('class', 'information');
  information.appendChild(document.createElement('p'));
  home.appendChild(information);

  document.querySelector('.information > p').innerText =
    'The best place to visit if you wish to indulge in a high-quality steak';
}
