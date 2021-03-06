var _ = require('underscore');

module.exports = function(variablesToSet, parseValue) {

	this.perform = function(responseAsJson, testStep, variables) {
		for(var variable in variablesToSet) {
			var value = parseValue(variablesToSet[variable], variables, responseAsJson, testStep);

			//Replace any special characters in the variable name before storing it.
			var variableName = variable.replace('${', '').replace('}', '');
			
			variables[variableName] = value;
		}
	};
};
