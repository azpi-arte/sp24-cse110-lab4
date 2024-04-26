function newTime(d) {
    d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time)
}

setInterval(newTime, 1000, d)