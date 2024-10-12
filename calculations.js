function square(num1) {
    var num1 = parseFloat(document.getElementById("num1").value);
    var result = num1 * num1;
    document.getElementById("result").innerText = "Площадь квадрата равна: " + result;
}

function tons(num2) {
    var num2 = parseFloat(document.getElementById("num2").value);
    var result = Math.trunc(num2 / 1000);
    document.getElementById("result2").innerText = "Полных тонн: " + result;
}

