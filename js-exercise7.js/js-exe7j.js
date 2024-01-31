function getSum(){
    var separeted = string.split(",");
    var sum =0; 
    for(var i=0;i<arguments.length;i++){

        sum += parseInt(arguments[i].toString()..match(/(\d+)/));

    }
   return sum;
}
var sum = getSum(1,"1","one",[2,'2', 'two']);
console.log(sum);