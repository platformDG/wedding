$(document).ready(function() {
    function generateCalendar(year, month) {
        const calendar = $('#calendar');
        calendar.empty();

        const dayNames = ["일", "월", "화", "수", "목", "금", "토"];
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDay = new Date(year, month, 1).getDay();

        // Add day names
        for (let i = 0; i < dayNames.length; i++) {
            if (i === 0) {
                calendar.append('<div class="header sun">' + dayNames[i] + '</div>');
            } else {
                calendar.append('<div class="header">' + dayNames[i] + '</div>');
            }
        }

        // Add empty slots for days before the first day of the month
        for (let i = 0; i < firstDay; i++) {
            calendar.append('<div></div>');
        }

        // Add days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            if (day === 10) {
                calendar.append('<div class="day special">' + day + '</div>');
            } else {
                calendar.append('<div class="day">' + day + '</div>');
            }
        }
    }

    function updateCountdown(targetDate) {
        const now = new Date();
        const diff = targetDate - now;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        if (days < 0) {
            $('#countdown').text(`D-Day`);
            $('#time-left').text(`00일 00시간 00분 00초 남았습니다`);
        } else {
            $('#countdown').text(`D-Day`);
            $('#time-left').text(`-${days}일 -${hours}시간 -${minutes}분 -${seconds}초 남았습니다`);
        }
    }

    const year = 2024;
    const month = 10; // November (0-indexed)
    const weddingDate = new Date(2024, 10, 10);

    generateCalendar(year, month);

    setInterval(function() {
        updateCountdown(weddingDate);
    }, 1000);
});