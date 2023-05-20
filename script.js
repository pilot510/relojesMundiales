function updateClocks() {
    // Obtener la hora actual
    var date = new Date();

    // Calcular la hora en diferentes zonas horarias
    var timezoneOffset1 = -3;  // Ajuste horario para Argentina (UTC-3)
    var timezoneOffset2 = -6;  // Ajuste horario para México (UTC-6)
    var timezoneOffset3 = 2;   // Ajuste horario para España (UTC+2)
    var timezoneOffset4 = -6;  // Ajuste horario para Costa Rica (UTC-6)
    var timezoneOffset5 = -5;  // Ajuste horario para Ecuador (UTC-5)
    var timezoneOffset6 = -4;  // Ajuste horario para Venezuela (UTC-4)

    var hours1 = date.getUTCHours() + timezoneOffset1;
    var minutes1 = date.getUTCMinutes();
    var seconds1 = date.getUTCSeconds();

    var hours2 = date.getUTCHours() + timezoneOffset2;
    var minutes2 = date.getUTCMinutes();
    var seconds2 = date.getUTCSeconds();

    var hours3 = date.getUTCHours() + timezoneOffset3;
    var minutes3 = date.getUTCMinutes();
    var seconds3 = date.getUTCSeconds();

    var hours4 = date.getUTCHours() + timezoneOffset4;
    var minutes4 = date.getUTCMinutes();
    var seconds4 = date.getUTCSeconds();

    var hours5 = date.getUTCHours() + timezoneOffset5;
    var minutes5 = date.getUTCMinutes();
    var seconds5 = date.getUTCSeconds();

    var hours6 = date.getUTCHours() + timezoneOffset6;
    var minutes6 = date.getUTCMinutes();
    var seconds6 = date.getUTCSeconds();

    // Actualizar los relojes en la página
    document.getElementById('clock1').textContent = 'Argentina: ' + formatTime(hours1, minutes1, seconds1);
    document.getElementById('clock2').textContent = 'México: ' + formatTime(hours2, minutes2, seconds2);
    document.getElementById('clock3').textContent = 'España: ' + formatTime(hours3, minutes3, seconds3);
    document.getElementById('clock4').textContent = 'Costa Rica: ' + formatTime(hours4, minutes4, seconds4);
    document.getElementById('clock5').textContent = 'Ecuador: ' + formatTime(hours5, minutes5, seconds5);
    document.getElementById('clock6').textContent = 'Venezuela: ' + formatTime(hours6, minutes6, seconds6);
}

function formatTime(hours, minutes, seconds) {
    var formattedHours = hours < 0 ? 24 + hours : hours; // Manejar valores de horas negativos o igual a cero
    return padZero(formattedHours) + ':' + padZero(minutes) + ':' + padZero(seconds);
}


function padZero(value) {
    return value < 10 ? '0' + value : value;
}

// Actualizar los relojes cada segundo
setInterval(updateClocks, 1000);
