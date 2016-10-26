//step 0: console.log data in JS
var congressUrl = 'http://openstates.org/api/v1/legislators/?apikey=4d83b4ccbc0c47f6917e9e47d93200f2'

var cutie = document.querySelector('.cutie-container')

var promise = $.getJSON(congressUrl)

var responseHandler = function(response){
	var congressArray = response
	for (var i = 0; i < congressArray.length; i ++){
		var currentObj = congressArray[i]
		var cutieNode = document.createElement('div')
		cutieNode.innerHTML += '<p>' + currentObj.full_name + '</p>'

		cutie.appendChild(cutieNode)
	}
}

promise.then(responseHandler)
console.log("this is working")
