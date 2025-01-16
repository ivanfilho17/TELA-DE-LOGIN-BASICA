// Arquivo script.js

function validateForm() {
    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');

    // Regex atualizado para validar e-mails mais conhecidos
    const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail|hotmail|yahoo|outlook|live|icloud|aol|zoho)\.[a-zA-Z]{2,}$/;

    // Limpa mensagens anteriores
    messageDiv.innerHTML = '';

    let hasError = false;

    if (!email) {
        const emailError = document.createElement('p');
        emailError.textContent = 'O campo de e-mail é obrigatório.';
        emailError.className = 'error-message';
        messageDiv.appendChild(emailError);
        hasError = true;
    } else if (!emailRegex.test(email)) {
        const emailError = document.createElement('p');
        emailError.textContent = 'Por favor, insira um endereço de e-mail válido.';
        emailError.className = 'error-message';
        messageDiv.appendChild(emailError);
        hasError = true;
    }

    if (!password) {
        const passwordError = document.createElement('p');
        passwordError.textContent = 'O campo de senha é obrigatório.';
        passwordError.className = 'error-message';
        messageDiv.appendChild(passwordError);
        hasError = true;
    } else if (password.length < 6) {
        const passwordError = document.createElement('p');
        passwordError.textContent = 'A senha deve ter pelo menos 6 caracteres.';
        passwordError.className = 'error-message';
        messageDiv.appendChild(passwordError);
        hasError = true;
    }

    if (hasError) {
        return;
    }

    // Se todas as validações passarem
    const successMessage = document.createElement('p');
    successMessage.textContent = 'Login realizado com sucesso!';
    successMessage.className = 'success-message';
    messageDiv.appendChild(successMessage);

    // Redirecionar para a tela pós-login após 2 segundos
    setTimeout(() => {
        window.location.href = 'pos-login.html';
    }, 2000);
}
