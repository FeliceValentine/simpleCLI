const fs = require('fs');
const command = process.argv[2];
const input = process.argv[3];
const value = process.argv[4];
const { add, list, update, deleteMovie } = require('./utils');

const app = () =>{
    let movieListArr;
    try{
        movieListArr = JSON.parse(fs.readFileSync('./netflix.json'));
    }catch(error){
        movieListArr = [];
    }    
    
    if(command === 'add'){
      
        add(movieListArr, input);
    }else if (command === 'list'){
        
        list();
    }else if (command === 'update'){
     
        update(movieListArr,input,value)

    }else if (command === 'delete'){
       
        deleteMovie(movieListArr, input);
    }
}

app();
