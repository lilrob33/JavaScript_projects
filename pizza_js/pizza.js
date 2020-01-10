function getReceipt() {
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>";
        }
    }
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");
    getMeat(runningTotal, text1);
};
 
    function getMeat(runningTotal, text1) {
        var MeatTotal = 0;
        var selectedMeat = [];
        var MeatArray = document.getElementsByClassName("meats");
        for (var j = 0; j < MeatArray.length; j++) {
            if (MeatArray[j].checked) {
                selectedMeat.push(MeatArray[j].value);
                console.log("selected topping item: (" + MeatArray[j].value + ")");
                text1 = text1 + MeatArray[j].value + "<br>";
            }
        }
        var MeatCount = selectedMeat.length;
        if (MeatCount > 1) {
            MeatTotal = (MeatCount - 1);
        } else {
            MeatTotal = 0;
        }
    runningTotal = (runningTotal + MeatTotal);
    console.log("total selected Meat items: " + MeatCount);
    console.log(MeatCount + " Meat - 1 free topping = " + "$" + MeatTotal + ".00");
    console.log("Meat text1: " + text1);
    console.log("Purchase Total: " + "$" + runningTotal + ".00");
    getVeggie(runningTotal, text1);
    }
    function getVeggie(runningTotal, text1) {
        var VeggieTotal = 0;
        var selectedVeggie = [];
        var VeggieArray = document.getElementsByClassName("veggies");
        for (var k = 0; k < VeggieArray.length; k++) {
            if (VeggieArray[k].checked) {
                selectedVeggie.push(VeggieArray[k].value);
                console.log("selected topping item: (" + VeggieArray[k].value + ")");
                text1 = text1 + VeggieArray[k].value + "<br>";
            }
        }
        var VeggieCount = selectedVeggie.length;
        if (VeggieCount > 1) {
            VeggieTotal = (VeggieCount - 1);
        } else {
            VeggieTotal = 0;
        }
    runningTotal = (runningTotal + VeggieTotal);
    console.log("total selected Veggie items: " + VeggieCount);
    console.log(VeggieCount + " Veggie - 1 free topping = " + "$" + VeggieTotal + ".00");
    console.log("Veggie text1: " + text1);
    console.log("Purchase Total: " + "$" + runningTotal + ".00");

    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";
};	