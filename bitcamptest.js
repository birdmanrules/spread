var toolbox 	= require('toolbox');
var nlpsum		= require('nlpsum').main;
var _ 			= require('underscore');

var sum = new nlpsum();

var sources = ["body"];

_.each(sources, function(filename) {
	
	toolbox.file.read(filename+".txt", function(content) {
		
		var types = ["sinFrequency"];
		_.each(types, function(type) {
			
			generateSummary(filename, content, type);
		});
	});
});

function generateSummary(filename, content, type) {


		var summary = sum.sinFrequencySummary(content, 5);

	console.log(summary.text);
	console.log("");
	toolbox.file.write("summary.txt", summary.text);
	
	return JSON.stringify(sum.tag(summary.text), null, 1);

}
