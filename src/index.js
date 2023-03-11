import './style.css';

const content = document.getElementById('content');
const hiDiv = document.createElement('div');
hiDiv.textContent = 'Hi! Testing css';
hiDiv.classList.add('test');
content.appendChild(hiDiv);
