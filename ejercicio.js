/* let dia = 7;
let intento = 0;
let maxIntentos = 4;
let horario;

switch (dia) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        horario = 9;
        break;
    case 6:
        horario = 11;
        break;
    case 7:
        horario = 16;
        break;
    default:
        horario = 0;
}

console.log(`Horario base para día ${dia}: ${horario}:00`);

while (intento < maxIntentos) {
    let ajustar = intento < 4 ? true : false;
    if (!ajustar) break;
    intento++;
    horario++;
    console.log(`Intento ${intento}: Ajustando a ${horario}:00`);
}

console.log(`Horario asignado para la clase: ${horario}:00`);
// Salida:
// Horario base para día 6: 10:00
// Intento 1: Ajustando a 11:00
// Intento 2: Ajustando a 12:00
// Horario final para la cita: 12:00 */



let dia = 7; 
let intento = 0;
const maxIntentos = 4;

switch (dia) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        horario = 9;
        break;
    case 6:
        horario = 11;
        break;
    case 7:
        horario = 16;
        break;
    default:
        horario = 0; 
        break;
}

console.log(`Horario base para día ${dia}: ${horario}:00`);

while (intento < maxIntentos) {

    let ajustar = intento < 4;

    if (!ajustar) {
        break;
    }

    intento++;
    horario--;
    console.log(`Intento ${intento}: Ajustando a ${horario}:00`);

    if (horario < 7) {
        console.log("Error: Horario demasiado temprano");
        break;
    }
}

if (horario >= 7) {
    console.log(`Horario final para la clase: ${horario}:00`);
}
