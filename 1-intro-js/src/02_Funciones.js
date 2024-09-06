function obtenerInfo(name = 'Carlos', apellido = 'Marroquin'){
    const info = `${name} ${apellido}`;
    
    return info;
}

const info = obtenerInfo('Juan', 'Tovar');

console.log(info);