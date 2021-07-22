exports.proyectosHome = (req,res)=>{ 
    res.render('index',{
        nombrePagina : 'Proyectos'
    });
}

exports.formularioProyecto = (req,res)=>{
    res.render('nuevoProyecto',{
        nombrePagina : 'Nuevo Proyecto'
    });
}

exports.nuevoProyecto = (req,res)=>{
    //Enviar a la consola lo que escriba el usuario
    //console.log(req.body);

    //validar que tengamos algo en el input
    const {nombre} = req.body;

    let errores = [];

    if(!nombre){
        errores.push({'texto': 'Agrega un Nombre al Proyecto'})
    }

    //si hay errores
    if (errores.length > 0) {
        res.render('nuevoProyecto',{
            nombrePagina : 'Nuevo Proyecto',
            errores
        })
    }
}
/*exports.nosotros = (req,res)=>{ 
    res.send('Nosotros');
}*/
