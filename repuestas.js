const preguntas=document.querySelectorAll('.preguntas .contenedor-pregunta')
preguntas.forEach((pregunta)=>{
    pregunta.addEventListener('click',(e)=>{
        e.currentTarget.classList.toggle('activa')

        const repuesta = pregunta.querySelector('.repuesta')
        const alturaRealRespuesta = repuesta.scrollHeight;

        if (!repuesta.style.maxHeight) {
            repuesta.style.maxHeight=alturaRealRespuesta+'px';

        }else{
            repuesta.style.maxHeight=null;
        }
        preguntas.forEach((elemento)=>{
            if (pregunta!==elemento) {
                elemento.classList.remove('activa')
                elemento.querySelector('.repuesta').style.maxHeight=null;
            }
        })
    })
})