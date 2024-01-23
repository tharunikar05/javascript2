//set example
/*setexample=new Set(["aiadmk","bjp","congress"])
//console.log(setexample)
for  (value in setexample){
    console.log("the value present in index is", value)
}
for  (value of setexample){
    console.log("the value present in index is", value)
}
*/
//map example
mapeg=new Map([["id","value"],["name","val1"]])
mapeg.set("age","20")
mapeg.set("phone","200947588")
console.log(mapeg)
mapeg.delete("phone","200947588")

for  (value of mapeg){
    console.log("the value present in index is", value)
}
 console.log(mapeg.has("id"))