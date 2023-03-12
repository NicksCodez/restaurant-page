import pageLoad from './pageLoad';
import loadHome from './loadHome';
import loadMenu from './loadMenu';
import loadContact from './loadContact';

function clearContent() {
  const content = document.getElementById('content');
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }
}

export default function switchPages() {
  const buttons = document.getElementsByTagName('button');
  for (let i = 0; i < buttons.length; i++) {
    switch (buttons[i].textContent) {
      case 'Home':
        buttons[i].addEventListener('click', (event) => {
          event.preventDefault();
          clearContent();
          pageLoad();
          loadHome();
          switchPages();
        });
        break;
      case 'Menu':
        buttons[i].addEventListener('click', (event) => {
          event.preventDefault();
          clearContent();
          pageLoad();
          loadMenu();
          switchPages();
        });
        break;
      case 'Contact':
        buttons[i].addEventListener('click', (event) => {
          event.preventDefault();
          clearContent();
          pageLoad();
          loadContact();
          switchPages();
        });
        break;
      default:
        break;
    }
  }
}
