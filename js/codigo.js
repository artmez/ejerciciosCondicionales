const ejercicio1 = function() {
    let respuesta = prompt("¿Eres bellísimo/a?" + " (si o no)");
    if (respuesta.toLowerCase() === "si") {
        alert("Ciertamente");
    } else if (respuesta.toLowerCase() === "no") {
        alert("No te Creo");
    } else {
        alert("Por favor responde 'si' o 'no'");
        ejercicio1();
    }
}

function ejercicio2() {
    let numero = prompt("Escribe un número entero.");
    if (!isNaN(numero)) {    
         if (numero % 2 === 0) {
              alert("El número " + numero + " es divisible entre 2.");
          } else {
             alert("El número " + numero + " NO es divisible entre 2.");
          }
        } else {
            alert("Por favor escribe un número entero");
            ejercicio2();
        }
}

const ejercicio3 = () => {
    let numero = prompt("Escribe un número entero.");
    if (!isNaN(numero)) {    
         if ((numero & 1) === 0) {
              alert("El número " + numero + " es PAR.");
          } else {
             alert("El número " + numero + " es IMPAR.");
          }
        } else {
            alert("Por favor escribe un número entero");
            ejercicio2();
        }
}

const ejercicio4 = () => {
    let numeroCliente = prompt("Escribe tu número de cliente:");
    if (numeroCliente === '1000') {
        alert("Ganaste un Premio!");
    } else {
        alert("Lo sentimos! Sigue participando.");
    }
}

const ejercicio5 = function() {
    let numero1 = prompt("Escribe el primer número.");
    let numero2 = prompt("Escribe el segundo número.");
    if (!isNaN(numero1) && !isNaN(numero2)) {
        let resultado = numero1 - numero2;
        if (resultado > 0) alert("El número menor es " + numero2)
        else alert("El número menor es " + numero1)
    } else {
        alert("Por favor escribe solamente números enteros.");
        ejercicio5();
    }
}

const ejercicio6 = function() {
    let numero1 = prompt("Escribe el primer número.");
    let numero2 = prompt("Escribe el segundo número.");
    let numero3 = prompt("Escribe el tercer número.");
    let arreglo = [numero1, numero2, numero3];
    let arregloOrdenado = arreglo.sort();
        if (!isNaN(numero1) && !isNaN(numero2) && !isNaN(numero3)) {
            if (numero1 == numero2 && numero2 == numero3) 
                alert("Los tres números son iguales.")
            else
                alert("El número mayor es " + arregloOrdenado[2]);
        } else {
        alert("Por favor escribe solamente números enteros.");
        ejercicio6();
    }
}

function ejercicio7() {
    let diaDeLaSemana = prompt("Escribe un día de la semana.");
    if (diaDeLaSemana.toLowerCase() === "lunes") alert("El dia de la semana es " + diaDeLaSemana)
    else if (diaDeLaSemana.toLowerCase() === "viernes") alert("El dia de la semana es " + diaDeLaSemana)
    else if (diaDeLaSemana.toLowerCase() ==="sabado" || diaDeLaSemana.toLowerCase() ==="domingo") alert("El dia de la semana es " + diaDeLaSemana)
    else alert("No es el día correcto!")
}

function ejercicio8() {
    let calificacion = prompt("Escribe una calificación del 1 al 10.");
    if (!isNaN(calificacion) && calificacion > 0 && calificacion <= 10) {
        if (calificacion < 6) alert("Reprobado!")
        else if (calificacion >= 6 && calificacion <=8) alert("Regular!")
        else if (calificacion == 9) alert("Bien!")
        else alert("Excelente!")
    } else {
        alert("Por favor escribe un número del 1 al 10.");
        ejercicio8();
    }
}

function ejercicio9() {
    let pregunta = prompt("¿Quieres tu helado con topping? (Responde si o no)");
    if (pregunta.toLowerCase() === "no") {
        alert("El precio de tu helado sin topping es de 50 MXN.");
    } else if (pregunta.toLowerCase() === "si") {
            let topping = prompt("¿De que quieres tu topping?");
            if (topping.toLowerCase() === "oreo") alert("El precio de tu helado con Oreo es de 60 MXN.")
            else if (topping.toLowerCase() === "kitkat") alert("El precio de tu helado con KitKat es de 65 MXN.")
            else if (topping.toLowerCase() === "brownie") alert("El precio de tu helado con brownie es de 70 MXN.")
            else alert("No tenemos ese topping, lo sentimos. El precio de tu helado sin topping es de 50 MXN.")
    } else {
        alert("Por favor responde si o no.");
        ejercicio9();
    }
}

function ejercicio10() {
    let course = 4999;
    let carrera = 3999;
    let master = 2999;
    let facebook = 0.2;
    let google = 0.15;
    let jesua = 0.5;
    let descuento = 0;
    let pregunta = prompt("¿En que programa educativo estás interesado? (Course, Carrera o Master)");
    if (pregunta.toLowerCase() === "course") alert("El costo del programa Course es de $" + course + " MXN mensuales.")
    else if (pregunta.toLowerCase() === "carrera") alert("El costo del programa Carrera es de $" + carrera + " MXN mensuales.")
    else if (pregunta.toLowerCase() === "master") alert("El costo del programa Master es de $" + master + " MXN mensuales.")
    else {
        alert("Por favor responde Course, Carrera o Master.");
        ejercicio10();
    }

    ejercicio10_1();
    
    if (pregunta.toLowerCase() === "course") 
    alert("El precio total de tu programa Course, con duración de 2 meses, es de $" + 2*(course-descuento) + " MXN.")
    else if (pregunta.toLowerCase() === "carrera") 
    alert("El precio total de tu programa Carrera, con duración de 6 meses, es de $" + 6*(carrera-descuento) + " MXN.")
    else 
    alert("El precio total de tu programa Master, con duración de 12 meses, es de $" + 12*(master-descuento) + " MXN.")

    function ejercicio10_1() {
        let beca = prompt("¿Cuentas con algún tipo de beca? (Facebook, Google o Jesua)");
        if (beca.toLowerCase() === "facebook") {
            if (pregunta.toLowerCase() === "course") {
                descuento = course*facebook;
                alert("El precio del programa Course con beca Facebook es de: " + (carrera-descuento) + " MXN mensuales.");
            }
            else if (pregunta.toLowerCase() === "carrera") {
                descuento = carrera*facebook;
                alert("El precio del programa Carrera con beca Facebook es de: " + (carrera-descuento) + " MXN mensuales.");
            }
            else {
                descuento = master*facebook;
                alert("El precio del programa Master con beca Facebook es de: " + (master-descuento) + " MXN mensuales.");
            }
        } else if (beca.toLowerCase() === "google") {
            if (pregunta.toLowerCase() === "course") {
                descuento = course*google;
                alert("El precio del programa Course con beca Google es de: " + (course-descuento) + " MXN mensuales.");
            }
            else if (pregunta.toLowerCase() === "carrera") {
                descuento = carrera*google;
                alert("El precio del programa Carrera con beca Google es de: " + (carrera-descuento) + " MXN mensuales.");
            }
            else {
                descuento = master*google;
                alert("El precio del programa Master con beca Google es de: " + (master-descuento) + " MXN mensuales.");
            }
        } else if (beca.toLowerCase() === "jesua") {
            if (pregunta.toLowerCase() === "course") {
                descuento = course*jesua;
                alert("El precio del programa Course con beca Jesua es de: " + (course-descuento) + " MXN mensuales.");
            }
            else if (pregunta.toLowerCase() === "carrera") {
                descuento = carrera*jesua;
                alert("El precio del programa Carrera con beca Jesua es de: " + (carrera-descuento) + " MXN mensuales.");
            }
            else {
                descuento = master*jesua;
                alert("El precio del programa Master con beca Jesua es de: " + (master-descuento) + " MXN mensuales.");
            }
        } else if (beca.toLowerCase() === "no") alert("No tienes ningún descuento.")
        else {
            alert("Por favor responde Facebook, Google, Jesua o no.");
            ejercicio10_1();
        }
    }
}

function ejercicio11() {
    let precioPorKm = null;
    let preguntaAuto = null;
    preguntaAuto = prompt("¿Qué vehículo es el que se usó? (Coche, Moto o Autobus)");
    switch(preguntaAuto.toLowerCase()) {
        case "coche":
            precioPorKm = 0.2;
            ejercicio11_1();
            break;
        case "moto":
            precioPorKm = 0.1;
            ejercicio11_1();
            break;
        case "autobus":
            precioPorKm = 0.5;
            ejercicio11_1();
            break;
        default:
            alert("Indica solamente coche, moto o autobus");
            ejercicio11();
    }

    function ejercicio11_1() {
        let costoAdicional = null;
        let totalAPagar = null;
        let distancia = null;
        distancia = prompt("¿Cuántos kilometos se recorrieron?");
        if (!isNaN(distancia)  && distancia > 0) {
         if (distancia <= 100) {
            costoAdicional = 5;
         } else {
            costoAdicional = 10;
         }
         totalAPagar = (precioPorKm * distancia + costoAdicional);
         alert("El costo total a pagar es de $" + totalAPagar);
        } else {
        alert("Los kilometros deben ser un número entero mayor a cero.");
        ejercicio11_1();
        }

    }
}