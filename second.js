//  function add(a , b){
//     console.log(a + b);
// }
 function mul(a , b){
    console.log(a * b);
}
 function sub(a , b){
    console.log(a - b);
}
 function div(a , b){
    console.log(a / b);
}

module.exports = { sub , mul , div};    


const os = require('os');

console.log(os.platform());
console.log(os.arch());

const data = ' thhis is a test file';

const fs = require('fs');



fs.writeFileSync('test.txt' , 'Hello World');
fs.writeFile('test.txt' , data , (err) => {
    if(err) throw err;  
    console.log('File created');
});
fs.readFile('test.txt' , 'utf-8' , (err , data) => {
    if(err) throw err;
    console.log(data);
});  


fs.appendFile('test.txt' , 'This is a test file' , (err) => {
    if(err) throw err;
    console.log('File appended');
});
