var nro1, nro2, nro3, nro4, nro5, codigo, pi, password;

pi = parseInt(Math.PI)

//funcion que suma dos numeros
    function suma(nro1, nro2) {
    nro1 = parseInt(prompt("Ingrese el primer numero"));
    nro2 = parseInt(prompt("Ingrese el segundo numero"));
    let suma = (nro1+nro2);
    return suma;
    }

//funcion que promedia 5 numeros
    function promedio(nro1, nro2, nro3, nro4, nro5) {
    nro1 = parseInt(prompt("Ingrese el primer numero"));
    nro2 = parseInt(prompt("Ingrese el segundo numero"));
    nro3 = parseInt(prompt("Ingrese el tercer numero"));
    nro4 = parseInt(prompt("Ingrese el cuarto numero"));
    nro5 = parseInt(prompt("Ingrese el quinto numero"));
    let promedio = ((nro1+nro2+nro3+nro4+nro5)/5);
    return promedio;
    }

//funcion que saca el perimetro de un circulo
    function perimetro(nro1) {
    nro1 = parseInt(prompt("Ingrese el diametro"));
    let perimetro = (nro1*pi);
    return perimetro;
}

password = prompt("Ingrese la contraseña")
    if (password == "bicicleta") {    

        codigo = parseInt(prompt("Que aplicacion quiere realizar?\n\nSuma = 1\nPromedio = 2\nPerimetro de un circulo = 3\n"))
        if (codigo == 1) {

            alert (suma());

            } else{
                if (codigo == 2) {
                    
                    alert(promedio());

                } else{
                    if (codigo == 3) {

                        alert(perimetro());

                    } else {

                }
            }
        }
    } else 
    {

alert("Contraseña incorrecta");
}
