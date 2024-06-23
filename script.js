document.addEventListener("DOMContentLoaded", function() {
    const monthYear = document.getElementById('month-year');
    const calendarDays = document.getElementById('calendar-days');
    const prevMonthBtn = document.getElementById('prev-month');
    const nextMonthBtn = document.getElementById('next-month');
    const toggleModeBtn = document.getElementById('toggle-mode');
    let currentMonth = new Date().getMonth();
    let currentYear = new Date().getFullYear();
    let darkMode = true;

    function renderCalendar() {
        const firstDay = new Date(currentYear, currentMonth, 1).getDay();
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
        const daysInPrevMonth = new Date(currentYear, currentMonth, 0).getDate();

        calendarDays.innerHTML = '';
        monthYear.innerHTML = new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long', year: 'numeric' });

        // Previous month's days
        for (let i = firstDay; i > 0; i--) {
            const day = document.createElement('div');
            day.classList.add('prev-month-day');
            day.textContent = daysInPrevMonth - i + 1;
            calendarDays.appendChild(day);
        }

        // Current month's days
        for (let i = 1; i <= daysInMonth; i++) {
            const day = document.createElement('div');
            day.textContent = i;
            calendarDays.appendChild(day);
        }

        // Next month's days
        const remainingDays = 7 - (calendarDays.children.length % 7);
        if (remainingDays < 7) {
            for (let i = 1; i <= remainingDays; i++) {
                const day = document.createElement('div');
                day.classList.add('next-month-day');
                day.textContent = i;
                calendarDays.appendChild(day);
            }
        }
    }

    prevMonthBtn.addEventListener('click', () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderCalendar();
    });

    nextMonthBtn.addEventListener('click', () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar();
    });

    toggleModeBtn.addEventListener('click', () => {
        darkMode = !darkMode;
        document.body.className = darkMode ? 'dark-mode' : 'light-mode';
    });

    renderCalendar();
});
