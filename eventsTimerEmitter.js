var Eve = require('events');
class ComproStudent extends Eve {
    constructor(){
    super();
    //this.message = 'New Student!';
    setInterval(() =>{this.emit('newStudent')}, 1000);
    }
   
    }

    var student = new ComproStudent();
    student.on('newStudent', function(){console.log('welcome')});