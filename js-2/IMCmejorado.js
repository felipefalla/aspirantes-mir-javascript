function bmi(weight, height, maxDecimals = 2) {
    return (weight / height ** 2).toFixed(maxDecimals)
  } // aplique la sugerencia realizada respecto a mi curiosidad sobre la forma en la que limite LOS DECIMALES del resultado del IMC, muchas gracias profe por comparir sus conocimientos...
    
  weight = 65, height = 1.8
  console.log("Teniendo en cuenta que tu masa corporal es de " + weight + " kg" + " y tu estatura es de " + height + " m" + " tu IMC es de " + bmi(weight, height));

  weight = 72, height = 1.6
  console.log("Teniendo en cuenta que tu masa corporal es de " + weight + " kg" + " y tu estatura es de " + height + " m" + " tu IMC es de " + bmi(weight, height));

  weight = 52, height = 1.75
  console.log("Teniendo en cuenta que tu masa corporal es de " + weight + " kg" + " y tu estatura es de " + height + " m" + " tu IMC es de " + bmi(weight, height));