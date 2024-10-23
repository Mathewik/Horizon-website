const events = [];

document.getElementById('add-event').addEventListener('click', function() {
    const title = document.getElementById('event-title').value;
    const date = document.getElementById('event-date').value;

    if (title && date) {
        events.push({ title, date });
        renderCalendar();
        document.getElementById('event-title').value = '';
        document.getElementById('event-date').value = '';
    } else {
        alert('Proszę wypełnić wszystkie pola.');
    }
});

function renderCalendar() {
    const calendar = document.getElementById('calendar');
    calendar.innerHTML = '';

    const currentDate = new Date();
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Dodaj puste dni
    for (let i = 0; i < firstDay; i++) {
        const emptyDiv = document.createElement('div');
        calendar.appendChild(emptyDiv);
    }

    // Dodaj dni miesiąca
    for (let day = 1; day <= daysInMonth; day++) {
        const dayDiv = document.createElement('div');
        dayDiv.className = 'day';
        dayDiv.innerText = day;

        // Sprawdź wydarzenia
        const dayEvents = events.filter(event => event.date === `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`);
        dayEvents.forEach(event => {
            const eventDiv = document.createElement('div');
            eventDiv.className = 'event';
            eventDiv.innerText = event.title;
            dayDiv.appendChild(eventDiv);
        });

        calendar.appendChild(dayDiv);
    }
}

// Renderuj kalendarz po załadowaniu strony
renderCalendar();