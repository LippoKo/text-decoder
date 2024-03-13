let encryptButton = document.querySelector('.btn-encrypt');
let decryptButton = document.querySelector('.btn-decrypt');
let puppet = document.querySelector('.puppet-container');
let container = document.querySelector('.paragraph-container');
let result = document.querySelector('.result-text');

encryptButton.onclick = encrypt;
decryptButton.onclick = decrypt;

function encrypt() {
    hideAhead();
    let textBox = retrieveText();
    result.textContent = encryptText(textBox);
}

function decrypt() {
    hideAhead();
    let textBox = retrieveText();
    result.textContent = decryptText(textBox);
}

function retrieveText() {
    let textBox = document.querySelector('.text-box');
    return textBox.value;
}

function hideAhead() {
    puppet.classList.add('hide');
    container.classList.add('hide');
}

function encryptText(message) {
    let text = message;
    let finalText = '';

    for (let i = 0; i < text.length; i++) {
        if (text[i] == 'a') {
            finalText += 'ai';
        } else if (text[i] == 'e') {
            finalText += 'enter';
        } else if (text[i] == 'i') {
            finalText += 'imes';
        } else if (text[i] == 'o') {
            finalText += 'ober';
        } else if (text[i] == 'u') {
            finalText += 'ufat';
        } else {
            finalText += text[i];
        }
    }
    return finalText;
}

function decryptText(message) {
    let text = message;
    let finalText = '';

    for (let i = 0; i < text.length; i++) {
        if (text[i] == 'a') {
            finalText += 'a';
            i++;
        } else if (text[i] == 'e') {
            finalText += 'e';
            i += 4;
        } else if (text[i] == 'i') {
            finalText += 'i';
            i += 3;
        } else if (text[i] == 'o') {
            finalText += 'o';
            i += 3;
        } else if (text[i] == 'u') {
            finalText += 'u';
            i += 3;
        } else {
            finalText += text[i];
        }
    }

    return finalText;
}

const copyButton = document.querySelector('.btn-copy');
copyButton.addEventListener(
    'click',
    (copy = () => {
        let content = document.querySelector('.result-text').textContent;
        navigator.clipboard.writeText(content);
        console.log('hello');
    })
);
