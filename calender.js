document.addEventListener('DOMContentLoaded', function () {
    const events = [];
    const calendar = document.getElementById('calendar');
    const eventMenu = document.getElementById('event-menu');
    const addEventBtn = document.getElementById('add-event-btn');
    const closeEventMenu = document.getElementById('close-event-menu');
    const eventForm = document.getElementById('event-form');

    let selectedDate = null;

    // Function to render the calendar
    function renderCalendar() {
        calendar.innerHTML = '';
        const currentDate = new Date();
        const today = currentDate.getDate();
        const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

        for (let day = 1; day <= daysInMonth; day++) {
            const dayDiv = document.createElement('div');
            dayDiv.classList.add('calendar-day');
            dayDiv.textContent = day;

            if (day === today) {
                dayDiv.classList.add('current-day');
            }

            dayDiv.addEventListener('click', () => {
                selectedDate = day;
            });

            calendar.appendChild(dayDiv);
        }
    }

    // Function to open the event menu
    function openEventMenu() {
        eventMenu.classList.add('active');
        eventMenu.classList.remove('hidden');
        document.body.classList.add('menu-active');
    }

    // Function to close the event menu
    function closeEventMenuFunc() {
        eventMenu.classList.remove('active');
        document.body.classList.remove('menu-active');
    }

    // Add event listener to the form
    eventForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('event-title').value;
        const time = document.getElementById('event-time').value;
        events.push({ title, time, date: selectedDate });
        closeEventMenuFunc();
        renderCalendar();
        eventForm.reset();
    });

    addEventBtn.addEventListener('click', openEventMenu);
    closeEventMenu.addEventListener('click', closeEventMenuFunc);

    renderCalendar();
});