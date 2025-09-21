import characters from './characters.js';

const passEl1 = document.getElementById('pass-1');
const passEl2 = document.getElementById('pass-2');
const generateBtn = document.getElementById('generate-btn');
const DEFAULT_LENGTH = 15;

function getLength() {
  const lenEl = document.getElementById('length');
  const val = lenEl ? parseInt(lenEl.value, 10) : DEFAULT_LENGTH;
  return Number.isInteger(val) && val > 0 ? val : DEFAULT_LENGTH;
}

function generatePassword(len) {
  let out = '';
  for (let i = 0; i < len; i++) {
    const idx = Math.floor(Math.random() * characters.length);
    out += characters[idx];
  }
  return out;
}

function generatePass() {
  const len = getLength();
  if (passEl1) passEl1.textContent = generatePassword(len);
  if (passEl2) passEl2.textContent = generatePassword(len);
}

async function copyText(text) {
  if (!text) return;
  try {
    await navigator.clipboard.writeText(text);
    alert('Copied: ' + text);
  } catch (err) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
      alert('Copied: ' + text);
    } catch (e) {
      console.error('Copy failed', e);
    } finally {
      document.body.removeChild(ta);
    }
  }
}

generateBtn && generateBtn.addEventListener('click', generatePass);

passEl1 && passEl1.addEventListener('click', () => copyText(passEl1.textContent));
passEl2 && passEl2.addEventListener('click', () => copyText(passEl2.textContent));
