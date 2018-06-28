var Eve = require('events');
class Violin extends Eve {
    constructor(){
    super();
    //this.message = 'New Student!';
    setInterval(() =>{this.emit('printNote')}, 1000);
        }
    }

    var vio = new Violin();
    vio.on('printNote', function(){console.log('Note')});
    
    module.exports = Violin;