function insert(num)
{
    var numero = document.getElementById('visor-2').innerHTML;
    var maximo = document.getElementById('visor-2').innerHTML = numero + num;
}

function clean()
{
    document.getElementById('visor-2').innerHTML = "";
}

function back()
{
    var resultado = document.getElementById('visor-2').innerHTML;
    document.getElementById('visor-2').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular()
{
    var resultado = document.getElementById('visor-2').innerHTML;
    if(resultado)
    {
        document.getElementById('visor-2').innerHTML = eval(resultado);
    }
    else
    {
        document.getElementById('visor-2').innerHTML = "NaN"
    }

}