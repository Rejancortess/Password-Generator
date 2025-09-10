import characters from './characters.js';

let passEl1 = document.getElementById('pass-1');
let passEl2 = document.getElementById('pass-2');
let generateBtn = document.getElementById('generate-btn');

function generatePass() {
  passEl1.textContent = '';
  passEl2.textContent = '';
  for (let i = 1; i <= 15; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    passEl1.textContent += characters[randomIndex];
  }
  for (let i = 1; i <= 15; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    passEl2.textContent += characters[randomIndex];
  }
}

function copyPass1() {
  navigator.clipboard
    .writeText(passEl1.textContent)
    .then(function () {
      alert('Copied: ' + passEl1.textContent);
    })
    .catch(function (err) {
      console.error('Failed to copy: ', err);
    });
}

function copyPass2() {
  navigator.clipboard
    .writeText(passEl2.textContent)
    .then(function () {
      alert('Copied: ' + passEl2.textContent);
    })
    .catch(function (err) {
      console.error('Failed to copy: ', err);
    });
}

generateBtn.addEventListener('click', generatePass);

passEl1.addEventListener('click', copyPass1);
passEl2.addEventListener('click', copyPass2);
