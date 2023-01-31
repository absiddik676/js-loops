var array=[10, 10, 30, 40, 20, 350, 33, 77, 110]
for(i=0; i<array.length; i++){
    var number=array[i]
    if(number > 50){
        continue;
    }
    console.log(number)
}
