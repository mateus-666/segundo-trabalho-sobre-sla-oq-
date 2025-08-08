
```javascript
// Seleciona os elementos do HTML com os quais vamos interagir
const passwordDisplay = document.getElementById('passwordDisplay');
const passwordLengthInput = document.getElementById('passwordLength');
const includeUppercaseCheckbox = document.getElementById('includeUppercase');
const includeLowercaseCheckbox = document.getElementById('includeLowercase');
const includeNumbersCheckbox = document.getElementById('includeNumbers');
const includeSymbolsCheckbox = document.getElementById('includeSymbols');
const generateButton = document.getElementById('generateButton');
const copyButton = document.getElementById('copyButton');

// Define os caracteres que podem ser usados na senha
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

// Função para gerar a senha
function generatePassword() {
    // Pega o comprimento desejado da senha
    const length = parseInt(passwordLengthInput.value);
    let characters = ''; // String que vai juntar todos os tipos de caracteres permitidos
    let password = ''; // A senha final

    // Verifica quais tipos de caracteres foram selecionados e os adiciona à string 'characters'
    if (includeUppercaseCheckbox.checked) {
        characters += uppercaseChars;
    }
    if (includeLowercaseCheckbox.checked) {
        characters += lowercaseChars;
    }
    if (includeNumbersCheckbox.checked) {
        characters += numberChars;
    }
    if (includeSymbolsCheckbox.checked) {
        characters += symbolChars;
    }

    // Verifica se pelo menos um tipo de caractere foi selecionado
    if (characters.length === 0) {
        alert('Por favor, selecione pelo menos um tipo de caractere!');
        return; //