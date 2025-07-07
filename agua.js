let costoTotal = 0;

for (let dia = 1; dia <= 7; dia++) {
  
  let consumo = Math.floor(Math.random() * 5) + 1;

  let costoDiario = (consumo > 3) ? 2 : 1;


  costoTotal += costoDiario;


  console.log(`Día ${dia}: Consumo = ${consumo} litros, Costo = $${costoDiario}, Costo Total = $${costoTotal}`);

  
  if (costoTotal > 10) {
    console.log("¡Se ha superado el límite de $10! Seguimiento detenido.");
    break;
  }
}

console.log(`Costo total final: $${costoTotal}`);
