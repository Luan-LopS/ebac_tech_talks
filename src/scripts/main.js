AOS.init();

const dataDoEvento = new Date('Dec 12, 2024 19:00:00');
const timeStampDoEvento = dataDoEvento.getTime();

const interval = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    const distanciaEvento = timeStampDoEvento - timeStampAtual;

    const dia = Math.floor(distanciaEvento / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distanciaEvento % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distanciaEvento % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distanciaEvento % (1000 * 60)) / 1000);


    document.getElementById('contador').innerHTML = `${dia}d ${horas}h ${minutos}m ${segundos}s`

    if(distanciaEvento < 0){
        clearInterval(interval)
        document.getElementById('contator').innerHTML = `Evendo expirado`
    }
}, 1000)

