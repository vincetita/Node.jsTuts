/*var adder=function(a,b){
    return `The sum of two numbers is ${a+b}`;
}

module.exports={adder:adder};
*/

var events= require('events');
var myEventEmitter = new events.EventEmitter();
myEventEmitter.on('someEvent',function(mssg){
console.log(mssg)
});

myEventEmitter.emit('someEvent','the event was emitted.');