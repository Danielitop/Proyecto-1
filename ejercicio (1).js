let tiempo= 1;
let limite= 30;
let costo=0;

if (tiempo === 0) {

    console.log("Error: El tiempo no puede ser cero");
} else {
    while (tiempo < limite) {
        tiempo++;
        if (tiempo <= 15) {
            costo += 0.5;
        } else {
            costo += 0.3;
        }
        console.log(`Tiempo transcurrido: ${tiempo} minutos, Costo acumulado: $${costo.toFixed(2)}`);
    }
    console.log(`Costo total del domicilio: $${costo.toFixed(2)}`);
}