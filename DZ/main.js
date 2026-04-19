const form = document.getElementById('profileForm');
const clearBtn = document.getElementById('clearBtn');
const errorText = document.getElementById('error');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const age = document.getElementById('age').value.trim();
    const city = document.getElementById('city').value.trim();
    const hobbies = document.getElementById('hobbies').value.trim();

    if (!name || !age || !city || !hobbies) {
        errorText.textContent = 'Заполните все поля!';
        resultDiv.style.display = 'none';
        return;
    }

    errorText.textContent = '';
    resultDiv.innerHTML = `
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Возраст:</strong> ${age}</p>
        <p><strong>Город:</strong> ${city}</p>
        <p><strong>Хобби:</strong> ${hobbies}</p>
    `;
    resultDiv.style.display = 'block';
});

clearBtn.addEventListener('click', function() {
    form.reset(); 
    resultDiv.style.display = 'none';
    errorText.textContent = '';
});