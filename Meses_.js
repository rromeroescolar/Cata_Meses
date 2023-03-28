
function obtenerTrimestre() {
  let month = prompt("Introduce el numero de un mes del año");

  if (month >= 1 && month <= 3) {
      alert("El mes " + month + " pertenece al primer trimestre");

  }

  else if (month > 3 && month <= 6) {
      alert("El mes " + month + " pertenece al segundo trimestre");

  }

  else if (month > 6 && month <= 9) {
      alert("El mes " + month + " pertence al tercer trimestre");

  }
  else if (month > 9 && month <= 12) {
      alert("El mes " + month + " pertenece al cuarto trimestre");
  }


  else {
      alert("El mes " + month + " no exixte o no pertenece a los primeros 12 meses")
  }
}
 
