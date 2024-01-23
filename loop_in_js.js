//for loop
/*
Sum=0;
for(var i=0;i<10;i++)
{
 Sum+=i;
}
console.log(Sum)
//while loop
j=0
while(j<10)
{
Sum+=j
j++
}
console.log(Sum)
//do...while
k=0
do{
    console.log("done")
    k++
}
while(k<5)
*/
arr=[10,20,30]
arr1=[10,20,30,30.5] 
arr3=[true,false,10,34]
console.log(arr.length)
for(i=0;i<arr3.length;i++)
    {
        console.log(arr3[i])
    }
//for in loop
arr2=["kongu","ece",12]
for (const elet in arr2){
    console.log("the value present in index is", arr2[elet])
}

for (const elet of arr2){
    console.log("the value present in index is", elet)
}
//for each
arr2=["kongu","ece",12]
arr2.forEach(value=>
    {
    console.log(value)
});

//
var kongu=new Object()
kongu["fees"]=100000
kongu["accomodation"]="Excellent"
kongu["food"]="pretty decent"
kongu["hostelcount"]=10
console.log(kongu)
console.log(kongu.food)
console.log(kongu["hostelcount"] )
for (key in kongu)
    {
    console.log(key,kongu[key])
}
/* it showing error
kongu.forEach((key,element))=>
    {
    console.log(key,element)
};*/