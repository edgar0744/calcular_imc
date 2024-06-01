function calcular_imc()
{
    altura=parseFloat(document.getElementById("altura").value)
    peso=parseFloat(document.getElementById("peso").value)
    resultado=peso/(altura*altura)
    estado=""
    if(resultado<18.5)
    {
        estado=" bajo"
    }
    else if(resultado<=24.9)
    {
        estado=" normal"
    }
     else if(resultado<=29.9)
    {
        estado=" sobrepeso"
    }
    else
    {
        estado=" obeso"
    }
    IMC.value=resultado
    estado_s.value=estado
    event.preventDefault()
}
function limpiar()
{
    location.reload()
}