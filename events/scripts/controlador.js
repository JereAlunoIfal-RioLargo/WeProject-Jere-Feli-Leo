let divResultadoEventos = document.getElementById("resultadoEventos")

function carregarEventos ()
{
    divResultadoEventos.innerHTML = "";

    for(let i = 0; i < calendario.listaDeEventos.length; i++)
    {
        divResultadoEventos.innerHTML += 
        `<div class = 'card'>
            <p class = "p1">${calendario.listaDeEventos[i].nome} |</p>
            <p class = "p2">${calendario.listaDeEventos[i].data} |</p>
            <p class = "p3">${calendario.listaDeEventos[i].hora}</p>
            <img src = "img/${calendario.listaDeEventos[i].imagemEvento}">
        </div>`;
 
    }
}