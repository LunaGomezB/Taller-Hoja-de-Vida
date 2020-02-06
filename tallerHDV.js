const express = require('express'),
        app = express(),
        path = require('path');

    app.use(express.static(path.join(__dirname,'/public')));

    app.get('/',(peticion, respuesta)=>{
        respuesta.sendFile(`${__dirname}/views/index.html`);
    });

    app.route('/descripcion').get((peticion, respuesta)=>{
        respuesta.sendFile(`${__dirname}/views/descripcion.html`);
    });

    app.route('/experiencia').get((peticion, respuesta)=>{
        respuesta.sendFile(`${__dirname}/views/experiencia.html`);
    });

    app.route('/estudios').get((peticion, respuesta)=>{
        respuesta.sendFile(`${__dirname}/views/estudios.html`);
    });

    app.route('/aptitudes').get((peticion, respuesta)=>{
        respuesta.sendFile(`${__dirname}/views/aptitudes.html`);
    });

    app.route('/contacto').get((peticion, respuesta)=>{
        respuesta.sendFile(`${__dirname}/views/contacto.html`);
    });

    app.listen(8080);
    console.log('Conexion exitosa!');
