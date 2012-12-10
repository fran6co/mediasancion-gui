
/*
 * Module dependencies
 */

var fs = require('fs');
var request = require('superagent');


/*
* GET home page.
*/

exports.index = function(req, res){
  res.render('index', { title: 'Media Sanción | Inicio' });
};

exports.acerca = function(req, res){
  res.render('acerca', { title: 'Media Sanción | Acerca' });
};

// exports.proyectos = function(req, res){
//   fs.readFile(__dirname + '/../data/proyecto-list.json', 'utf-8', function(err, data){
//     data = JSON.parse(data);
//     res.render('proyectos', { title: 'Media Sanción | Proyectos', proyectos: data });
//   });
// };

exports.proyectos = function(req, res){
  request('http://198.74.50.217:8011/api/0/proyectos/?format=json', function(resp){
  	res.render('proyectos', { title: 'Media Sanción | Proyectos', proyectos: resp.body });
  });
};


exports.legisladores = function(req, res){
  res.render('legisladores', { title: 'Media Sanción | Legisladores' });
};

exports.comisiones = function(req, res){
  res.render('comisiones', { title: 'Media Sanción | Comisiones' });
};

