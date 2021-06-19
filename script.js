function myFunction(val) {
    var demo2 = val
    var demo1 = document.getElementById("display").value;
    var comJuros = parseInt(demo1) / parseInt(demo2) * 2;
    document.getElementById("demo2").innerText = "R$ " + parseInt(comJuros)
    document.getElementById("demo1").innerHTML = demo2 + "x"
}
function myFunction2(val) {
    var demo1 = val
    var demo2 = document.getElementById("display2").value;
    var comJuros = parseInt(demo1) / parseInt(demo2) * 2;
    document.getElementById("demo2").innerText = "R$ " + parseInt(comJuros)
}
function credito(){
    alert("----------------------------\n Feito Por Lucas Wagner \n----------------------------")
}