const fs = require('fs');
const util = require('util');

const uuidv1 = require('uuid/v1');

const writeFileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile);

class Storage {

    read() {

    }

    write(note) {

    }

    getNotes() {

    }

    addNote(note) {
        
    }
    
    removeNote(id) {

    }
    

}


module.exports = new Storage();