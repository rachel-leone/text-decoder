// Seleciona os elementos HTML necessários
const inputTextArea = document.getElementById('input-text');
const outputTextArea = document.getElementById('output-text');
const encryptButton = document.getElementById('encrypt-btn');
const decryptButton = document.getElementById('decrypt-btn');
const copyButton = document.getElementById('copy-btn');

// Dicionário de chaves de criptografia
const encryptionKeys = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

// Inverte as chaves de criptografia para descriptografia
const decryptionKeys = Object.fromEntries(
    Object.entries(encryptionKeys).map(([key, value]) => [value, key])
);

// Função para criptografar o texto
function encryptText(text) {
    return text.replace(/[eioua]/g, match => encryptionKeys[match]);
}

// Função para descriptografar o texto
function decryptText(text) {
    return text.replace(/enter|imes|ai|ober|ufat/g, match => decryptionKeys[match]);
}

// Event listener para o botão de criptografia
encryptButton.addEventListener('click', () => {
    const inputText = inputTextArea.value;
    outputTextArea.value = encryptText(inputText);
});

// Event listener para o botão de descriptografia
decryptButton.addEventListener('click', () => {
    const inputText = inputTextArea.value;
    outputTextArea.value = decryptText(inputText);
});

// Event listener para o botão de copiar
copyButton.addEventListener('click', () => {
    outputTextArea.select();
    document.execCommand('copy');
    alert('Texto copiado para a área de transferência!');
});
