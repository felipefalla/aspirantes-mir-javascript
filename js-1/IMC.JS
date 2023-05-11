function bmi(weight, height) {
    return weight / height ** 2 
  }
    
  weight = 65, height = 1.8
  let decimales = "Teniendo en cuenta que tu masa corporal es de " + weight + " kg" + " y tu estatura es de " + height + " m" + " tu IMC es de " + bmi(weight, height).toFixed(2);
  console.log(decimales);

  weight = 72, height = 1.6
  decimales = "Teniendo en cuenta que tu masa corporal es de " + weight + " kg" + " y tu estatura es de " + height + " m" + " tu IMC es de " + bmi(weight, height).toFixed(2);
  console.log(decimales);

  weight = 52, height = 1.75
  decimales = "Teniendo en cuenta que tu masa corporal es de " + weight + " kg" + " y tu estatura es de " + height + " m" + " tu IMC es de " + bmi(weight, height).toFixed(2);
  console.log(decimales);
  