var express = require('express');
var app = express();
var datos=[ ];
var persona={};



app.get("/", (req, res) =>{
	console.log(req);
  res.send('OwO');
});

app.get("/:id/:persona/:edad", (req, res) =>{
	if(req.url!="favicon.ico"){
		var dato=req.params.id;
		var dato1=req.params.persona;
		var dato2=req.params.edad;

		console.log(dato);
		console.log(dato1)
		console.log(dato2);
		datos.push(dato);
		persona.nombre=dato1;
		persona.edad=dato2;
		res.send('Si se pudo');
		console.log(datos);
		console.log(persona);
	};
	
app.listen(3000, () =>{
  console.log('El servidor esta corriendo...');
});