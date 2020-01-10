var clock = document.getElementById('clock');

function clockTime() {

    var
        time = new Date(),
        h = time.getHours().toString(),
        m = time.getMinutes().toString(),
        s = time.getSeconds().toString();

    if (h.length < 2) { h = '0' + h }
    if (m.length < 2) { m = '0' + m }
    if (s.length < 2) { s = '0' + s }

    var clockString = h + ':' + m + ':' + s;
    clock.textContent = clockString;
    console.log(time)
}

setInterval(clockTime, 1000);