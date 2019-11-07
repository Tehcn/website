//Replaces console.log
function log(x) {
	console.log(x);
}
//Writes Text To An Element
function write(element, x) {
	$(element).html(x);
}
//Appends Text To An Element
function append(element, x) {
    $(element).append(x);
}
//Prepends Text To An Element
function prepend(element, x) {
    $(element).prepend(x);
}
