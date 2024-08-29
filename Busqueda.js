function buscarNombreEnArreglo(nombreBuscado) {

    const nombres = ["Ana", "Jose", "Gabriel", "María", "Chelino", "Sofía"];
  
    const nombreEncontrado = nombres.includes(nombreBuscado);
  
    if (nombreEncontrado) {
      console.log(`El nombre "${nombreBuscado}" se encuentra en el arreglo.`);
    } else {
      console.log(`El nombre "${nombreBuscado}" no se encuentra en el arreglo.`);
    }
  }
  
  const nombre = "Karina";
  buscarNombreEnArreglo(nombre);
  