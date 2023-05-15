function join(array) {

    let string = " ";
    for (let i = 0; i < array.length; i ++)
    string += array[i] + " ";

    return string;
}

console.log(join(["resolviendo", "ejercicio", "4"]));
console.log(join(["de", "la", "sesion", "5"]));
console.log(join(["curso", "aspirantes", "top"]));