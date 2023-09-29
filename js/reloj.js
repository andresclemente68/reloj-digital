const mostrarReloj = () =>{
    let fecha = new Date ();
    let hr = fecha.getHours();
    let min = fecha.getMinutes();
    let seg = fecha.getSeconds();
    document.getElementById("hora").innerHTML = `${hr}:${min}:${seg}`;


    const meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
    const dias = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];
    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses [fecha.getMonth()];
    let fechaTexto = `${diaSemana}, ${dia} ${mes}`;    
    document.getElementById("fecha").innerHTML =  fechaTexto;

}





setInterval (mostrarReloj, 1000);

