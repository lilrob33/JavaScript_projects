function list() {
    var summer = {
        months:"June through August",
        weather:"Warm to Hot",
        Activities:"Outside a lot-Waterparks",
        dangers:"Heat stroke and drownings",
    };
    delete summer.Activities;
    document.getElementById("dictionary").innerHTML = summer.Activities;
}