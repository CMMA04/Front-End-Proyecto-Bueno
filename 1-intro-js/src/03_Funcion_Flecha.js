const obtenerInfo =  (name = 'Carlos', apellido = 'Marroquin') => `${name} ${apellido}`;
const sum = (a=0, b=0) => a+b;

const info = obtenerInfo('Juan', 'Tovar');

console.log(info);
console.log(sum(10,20));