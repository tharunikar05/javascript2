//objects
//how will you declare objects
//1st way
var studentdetails={
    "Name":"Tharunika",
    "Age":20,
    "degree":"B.E ECE",
     "college":"kongu"
   }
   console.log(studentdetails)
   studentdetails["id"]="ECE"
   console.log(studentdetails)
   //2nd way
var  studentdetails={}
studentdetails["rollno"]="21ecr116"
studentdetails["name"]="hena"
studentdetails["age"]=30
console.log(studentdetails)
//3rd way
var kongu=new Object()
kongu["fees"]=100000
kongu["accomodation"]="Excellent"
kongu["food"]="pretty decent"
kongu["hostelcount"]=10
console.log(kongu)
console.log(kongu.food)
console.log(kongu["hostelcount"]   )
