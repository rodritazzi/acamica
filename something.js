var codigo, pi, password;

//función que suma dos números
function suma(nro1, nro2) {
    nro1 = parseInt(prompt("Ingrese el primer número"));
    nro2 = parseInt(prompt("Ingrese el segundo número"));
    return nro1 + nro2;
}

//función que promedia 5 números
function promedio(nro1, nro2, nro3, nro4, nro5) {
    nro1 = parseInt(prompt("Ingrese el primer número"));
    nro2 = parseInt(prompt("Ingrese el segundo número"));
    nro3 = parseInt(prompt("Ingrese el tercer número"));
    nro4 = parseInt(prompt("Ingrese el cuarto número"));
    nro5 = parseInt(prompt("Ingrese el quinto número"));
    return (nro1 + nro2 + nro3 + nro4 + nro5) / 5

//funcion que saca el perímetro de un cúrculo
function perimetro(nro1) {
    nro1 = parseInt(prompt("Ingrese el diámetro"));
    return nro1 * (Math.PI);
}

//función que divide dos números
function division(nro1, nro2) {
    nro1 = parseInt(prompt("Ingrese el primer número"));
    nro2 = parseInt(prompt("Ingrese el segundo número"));
    if ((nro1 / nro2) == "Infinity") {
        alert("No se puede dividir por cero");
    } else {

        return (nro1 / nro2);
    }
}

password = prompt("Ingrese la contraseña")
if (password == "bicicleta") {

    codigo = parseInt(prompt("¿Qué aplicación quiere realizar?\n\nSuma = 1\nPromedio = 2\nPerímetro de un círculo = 3\n division de dos numeros=4\n"))

    if (codigo == 1) {

        alert("La suma es " + suma());

    } else {
        if (codigo == 2) {

            alert("El promedio es " + promedio());

        } else {
            if (codigo == 3) {

                alert("El promedio es " + perimetro());

            } else {
                if (codigo == 4) {
                    alert("la division es " + division());
                    if (division == Infinity) {
                        alert("No se puede dividir por cero");
                    }
                } else {

                }
            }

        }
    }
} else {

    alert("Contraseña incorrecta");
}