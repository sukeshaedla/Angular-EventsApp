var fs= require('fs');

module.exports.get = function(req, res){
	var event = fs.readFileSync('app/data/event/' + req.params.id + '.json', 'utf8');
	res.setHeader('Content-type', 'application/json');
	res.send(event);
};

module.exports.save = function(req, res){
	var event = res.body;
	res.writeFileSync('/app/data/event/' + req.params.id + '.json' , JSON.stringify(event));
	res.send(event);
}