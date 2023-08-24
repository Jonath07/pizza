function agregar(valor){

    const num = parseInt(document.getElementById('cant').value);

    const num2 = parseInt(valor);
    
    resultado = num + num2;

    document.getElementById('cant').value = resultado;

}