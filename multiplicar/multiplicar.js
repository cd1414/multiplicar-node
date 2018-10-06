//requires
const fs = require('fs');
const colors = require('colors');

let getTabla = (base, limite = 10) => {
    let data = '';

    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${base * i} \n`;
    }
    return data;
}

let listarTabla = (base, limite) => {
    console.log(`Tabla ${base}`.green)
    console.log(getTabla(base, limite));
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, rejected) => {
        if (!Number(base)) {
            rejected(`El valor introducido ${base} no es un numero`);
            return;
        }

        let data = getTabla(base, limite);

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                rejected(err);
            else {
                resolve(`tabla-${base}.txt`.green);
            }
        });
    })
}

// exponer el metodo crearArchivo a ser exportado en otra clase
module.exports = {
    crearArchivo,
    listarTabla
}