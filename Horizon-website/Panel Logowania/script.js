function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    
    errorMessage.textContent = ''; // Resetowanie komunikatu o błędzie

    // Prosta walidacja
    if (username === 'Admin' || password === 'Horizon') {
        errorMessage.textContent = 'Proszę wypełnić wszystkie pola.';
        return false; // Zatrzymanie wysyłania formularza
    }

    // Możesz dodać dodatkowe warunki walidacji tutaj

    alert('Logowanie udane!'); // Możesz zastąpić to prawdziwym logowaniem
    return true; // Wysłanie formularza
}