function imc(){
	var altura = parseFloat(document.getElementById("altura").value);
	var peso = parseFloat(document.getElementById("peso").value);
	var imc = peso/(altura*altura);
	document.getElementById("imc").value = imc;

	if(imc<=18.5){
		document.getElementById("diagnostico").innerHTML = "Bajo peso";
	} else if(imc<=24.9){
		document.getElementById("diagnostico").innerHTML = "Peso normal";
	} else if(imc<=29.9){
		document.getElementById("diagnostico").innerHTML = "Sobrepeso";
	} else if(imc<=34.9){
		document.getElementById("diagnostico").innerHTML = "Obesidad Grado I";
	} else if(imc<=39.9){
		document.getElementById("diagnostico").innerHTML = "Obesidad Grado II";
	} else if(imc>40){
		document.getElementById("diagnostico").innerHTML = "Obesidad Morbida";
	}
}