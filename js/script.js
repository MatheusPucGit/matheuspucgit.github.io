function clicar(){
    var num1 = document.querySelector(".num1").value;
    var num2 = document.querySelector(".num2").value;
    var num3 = document.querySelector(".num3").value;
    var num4 = document.querySelector(".num4").value;
    var num5 = document.querySelector(".num5").value;

    var resultado ="R$" +(parseFloat(num1) + parseFloat(num2) + parseFloat(num3)+ parseFloat(num4)+ parseFloat(num5));
    document.querySelector(".Resultado").innerHTML = resultado;
}
