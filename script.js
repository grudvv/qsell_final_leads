```javascript
document.getElementById('addLeadBtn').addEventListener('click', () => {
  document.getElementById('modal').classList.remove('hidden');
});

document.getElementById('cancelLeadBtn').addEventListener('click', () => {
  document.getElementById('modal').classList.add('hidden');
});

document.getElementById('saveLeadBtn').addEventListener('click', () => {
  const name = document.getElementById('leadName').value;
  const email = document.getElementById('leadEmail').value;
  const phone = document.getElementById('leadPhone').value;
  const value = parseFloat(document.getElementById('leadValue').value) || 0;
  const probability = parseFloat(document.getElementById('leadProbability').value) || 0;
  const priority = document.getElementById('leadPriority').value;

  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `<strong>${name}</strong><br>
    ${email}<br>${phone}<br>
    Wartość: ${value} zł<br>
    Szansa: ${probability}%<br>
    Priorytet: ${priority}`;

  document.querySelector('.column[data-status="nowy"]').appendChild(card);
  document.getElementById('modal').classList.add('hidden');
  document.querySelectorAll('#modal input').forEach(i => i.value = '');
});
```
