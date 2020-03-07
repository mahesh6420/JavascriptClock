function currentDate() {
    var currentDate = new Date();
    var hour = currentDate.getHours();
    var minute = currentDate.getMinutes();
    var second = currentDate.getSeconds();
    document.getElementById('hour').style.transform = `rotate(${hour * 30}deg)`;
    document.getElementById('minute').style.transform = `rotate(${minute * 6}deg)`;
    document.getElementById('second').style.transform = `rotate(${second * 6}deg)`;
    var ampm = hour > 12 ? 'PM' : 'AM';
    hour = hour > 12 ? `0${hour - 12}` : hour;
    minute = minute < 10 ? `0${minute}`: minute;
    second = second < 10 ? `0${second}`: second;
    document.getElementById('digital-hour').innerHTML = `${hour}`;
    document.getElementById('digital-minute').innerHTML = `${minute}`;
    document.getElementById('digital-second').innerHTML = `${second}`;
    document.getElementById('digital-ampm').innerHTML = `${ampm}`;
}

setInterval(() => {
    currentDate()
}, 1000);