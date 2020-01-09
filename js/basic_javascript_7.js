var time1 = new Date().getHours();

function time_func() {
    var greeting;
    if (time1 < 10 && time1 > 0) {
        greeting = "It's morning time. Ugh";
    }
        else if (10 < time1 && 14 > time1) {
        greeting = "How is work going today? It's almost over now.";
    }
    else {
        greeting = "It's Miller time!!";
    }
    document.getElementById("time1").innerHTML = greeting;
}