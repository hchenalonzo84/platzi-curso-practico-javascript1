const tiposDeSuscripciones = {
    free:'solo puedes tomar los cursos gratis',
    basic:'solo puedes tomar casi todos los cursod e platzi durante un mes',
    expert: 'solo puedes tomar casi todos los cursos de platzi durante un año',
    expertDuo: 'ty y alguien mas pueden tomar TODOS los cursos de platzi durante un año',
    };

    function conseguirTipoDeSuscripcion(suscripcion) {
        if (tiposDeSuscripciones[suscripcion]) {
            console.log(tiposDeSuscripciones[suscripcion])
            return;
        }    
        console.warn('ese tipo de suscripcion no existe');

    }
    