// //requires
// const fs = require('fs');

// Movedd to config yargs 
// const argv = require('yargs')
//     .command('listar', 'Imprime en consola la tabla de multiplicar', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .command('crear', 'Genera un archivo con la tabla de multiplicar', {
//         base: {
//             demand: true,
//             alias: 'b'
//         },
//         limite: {
//             alias: 'l',
//             default: 10
//         }
//     })
//     .help()
//     .argv; // YARGS

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');

let command = argv._[0];

switch (command) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo ${archivo} fue creado!!`))
            .catch(err => console.log(err));

        break;

    default:
        console.log(`Comando  no reconocido.`)
        break;
}

//let argv2 = process.argv; // PROCESS
//let base = '5';

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo ${archivo} fue creado!!`))
//     .catch(err => console.log(err));


/* Moved to ../Multiplicar */
// let data = '';

// for (let i = 1; i <= 10; i++) {
//     data += `${base} * ${i} = ${base * i} \n`;
// }


// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//     if (err) throw err;
//     console.log(`The file tabla-${base}.txt  has been saved!`);
// });