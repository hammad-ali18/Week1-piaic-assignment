//Name : Muhammad Hammad Ali                       Date : 30/09/22

// Q2
console.log("\n----------------------------Q2-----------------------------")

let person_name = "Marnus"
console.log("Hello",person_name,",would you like to learn some Python today?")

// Q3
console.log("\n----------------------------Q3-----------------------------")

let person_name1 = "surya"
person_name1= person_name1.charAt(0).toUpperCase()+person_name1.slice(1,person_name1.length)// title
console.log(person_name1)
person_name1=person_name1.toUpperCase() // uppercase
console.log(person_name1)
console.log(person_name1.toLowerCase())//lowercase
//Q4
console.log("\n----------------------------Q4-----------------------------")

let qoute ="'We cannot solve our problems with the same thinking we used when we created them.'"
console.log("Albert Eintein once said,",qoute)
//Q5
console.log("\n----------------------------Q5-----------------------------")

person_name2 = "Albert Einstein"
msg = "The Einstein named "+ person_name2 +" said, " +qoute
console.log(msg)
//Q6
console.log("\n----------------------------Q6-----------------------------")

person_name3 = "\tHammad\n"
console.log(person_name3)
console.log(person_name3.trim())
//Q7 & Q8
console.log("\n----------------------------Q7 & Q8------------------------")

console.log(10+2)
console.log("__________________________________________________________________________________________________________________")
console.log(10-2)
console.log("__________________________________________________________________________________________________________________")
console.log(10*2)
console.log("__________________________________________________________________________________________________________________")
console.log(10/2)
console.log("__________________________________________________________________________________________________________________")

//Q9
console.log("\n----------------------------Q9------------------------------")

fav_num = 18
message1= "My favourite number is " + fav_num
console.log(message1)
//Q10
console.log("\n----------------------------Q10----------------------------")

 //I have written name and date and comment it out

 //Q11
console.log("\n----------------------------Q11----------------------------")

 friends_name = ["bilal",'hassan','shahzaib','asad','hanif']
 friends_name.forEach(element => {
    console.log(element)
 });
 //Q12
console.log("\n----------------------------Q12----------------------------")

 friends_name.forEach(element => {
    console.log("Hey "+element+", How you doin?")
 });
 //Q13
console.log("\n----------------------------Q13----------------------------")

 cars = ['BMW','HONDA','TOYOTA','LEXUS']
 for( i =0;i<cars.length;i++){
    console.log("My favourite car brand is ",cars[i])
 }
//Q14
console.log("\n----------------------------Q14----------------------------")

let gents = ['ahmed','bilal','abdullah']
gents.forEach(element =>{
  console.log("Hello "+element+" you are invited for the dinner")
})
//Q15
console.log("\n----------------------------Q15----------------------------")

gents.splice(1,1)
gents.splice(1,0,"Riaz")
gents.forEach(element =>{
console.log("Hello I am  gonna invite "+ element+ "for the dinner")
})
//Q16
console.log("\n----------------------------Q16----------------------------")

console.log("Hello I found a big table so I will invite")
gents.unshift("Hania")
gents.splice(1,1,"Khanzada")
gents.push("Taha")
gents.forEach(element=>{
console.log("Hello "+element+" you are invited")
})
//Q17
console.log("\n----------------------------Q17----------------------------")

console.log("I can only invite two guys for the dinner\nThe persons whom I can't invite are:")
for(i = gents.length-1;i>1;i--){
    console.log("Hey "+gents.pop()+", Sorry I cannot invite you in the dinner")
}
console.log("You 2 guys are invited")
gents.forEach(element=>{
    console.log(element)
})
gents.pop()
gents.pop()
console.log("Now list is "+gents+"Empty")
//Q18
console.log("\n----------------------------Q18----------------------------")
//slice() just makes a copy of the array
const location = ['Nanga Parbat','K2','Mount Everest','Himalaya','Kati pahari']
console.log('Original Order :')
console.log(location)
console.log("\nAlphabetical Order :")
const sorted = location.slice().sort();
console.log(sorted)
console.log("Original Order : ")
console.log(location)
console.log("\nReverse Alphabetical Order :")
reversed = location.slice().reverse()
console.log(reversed)
console.log("Original Order : ")
console.log(location)
console.log("\nReverse Alphabetical Order(again) :")
reversed = location.reverse()
console.log(reversed)
console.log("\nReverse Alphabetical Order(again & again) :")
reversed = location.reverse()
console.log(reversed)
console.log("\nAlphabetical Order :")
sorted1 = location.sort();
console.log(sorted1)
console.log("\nReversed Order :")
sorted1 = location.reverse();
console.log(sorted1)

//Q19
console.log("\n----------------------------Q19----------------------------")

console.log("The number of people I am inviting is :"+gents.length+"(as I have make the array empty)")
//Q20
console.log("\n----------------------------Q20----------------------------")

var list =[]//empty array
list.push("BMW")
list.push("HONDA")
list.push("TOYOTA")
list.push("HYUNDAI")
list.push("SUZUKI")
console.log("LIST: ",list)
//Q21
console.log("\n----------------------------Q21----------------------------")

var obj ={
    name:'hammad',
    age :20,
    sex: 'M'
}
console.log(obj)
//Q22
console.log("\n----------------------------Q22----------------------------")

let bike = ['Honda','Suzuki','Yamaha']
console.log(bike[-5])
//Q23
console.log("\n----------------------------Q23----------------------------")

let car ="hyundai"
let bike1 = 'Honda'
let color = "red"
let age =12
let name2 ='abdal'
console.log(car=="hyundai"? true:false)
console.log(bike1=="Honda"? true:false)
console.log(color=="red"? true:false)
console.log(age==12? true:false)
console.log(name2=="abdal"? true:false)
console.log(car=="suzuki"? true:false)
console.log(bike1=="yamaha"? true:false)
console.log(color=="yellow"? true:false)
console.log(age==13? true:false)
console.log(name2=="abdul"? true:false)
//Q24
//equality and inequality
console.log("\n----------------------------Q24----------------------------")

name3 ="hania"
console.log(name3.length == 5?"yes the length is 5 ":"no the length is not 5")
console.log(name3 == "hamza"?"yes it is hania":"no it is not hania")

console.log(name3.toUpperCase())
console.log(name3.toLowerCase() == "hania"?"Yes the lower hania":"No not the lower hania")

console.log(name3.length>=5 ?"Yes the length is greater than equal to 5":"No the length is not greter equal to 5")
console.log(name3.length<=5 ?"Yes the length is greater than equal to 5":"No the length is not greter equal to 5")
console.log(name3.length==5 ?"Yes the length is  equal to 5":"No the length is not  equal to 5")
console.log(name3.length !=5 ?"Yes the length is not equal to 5":"No the length is equal greter equal to 5")
console.log(name3.length>=5 ?"Yes the length is greater than equal to 5":"No the length is not greter equal to 5")

console.log(name3.length == 5 || name3 == "hamza"?"Yes the length is greater than equal to 5":"No the length is not greter equal to 5")
console.log(name3.length == 5 && name3 == "hamza"?"Yes the length is greater than equal to 5":"No the length is not greter equal to 5")

let animals =['tiger','giraffe','leopard','goat']
console.log("Is Goat is the array\n"+animals.includes('goat'))
console.log("Is lion is the array\n"+animals.includes('lion'))

//Q25
console.log("\n----------------------------Q25----------------------------")

let alien_color = 'green'
if(alien_color == 'green'){
    console.log("Player just earned 5 points")
}
else{
    console.log("No the color is not green")
}

if(alien_color == 'yellow'){
    console.log("yes the color is yellow")
}
//Q26
console.log("\n----------------------------Q26----------------------------")

//i
console.log("\ni-")

if(alien_color == 'green'){
    console.log("Player just earned 5 points")
}
else{
    console.log("No the color is not green")
}
//ii
console.log("\nii-")

alien_color = "yellow"
if(alien_color != 'green'){
    console.log("Player just earned 10 points")
}
else{
    console.log("Nothing")
}
//iii
console.log("\niii-")

if(alien_color.length == 6){
     if(alien_color == 'yellow'){
    console.log("Player just earned 5 points")
    }  
     else{
    console.log("No the color is not green")
    }
     if(alien_color == 'green'){
    console.log("Player just earned 5 points")
    }
     else{
    console.log("No the color is not yellow")
    }
}
else{
    console.log("We made you april fool")
}
//Q27
console.log("\n----------------------------Q27----------------------------")

//i
console.log("\ni-")
alien_color ="green"
if(alien_color == 'green'){
    console.log("Player just earned 5 points")
}
else{
    console.log("No the color is not green")
}
//ii
console.log("\nii-")
alien_color ="yellow"
if(alien_color == 'yellow'){
    console.log("Player just earned 10 points")
}
else{
    console.log("No the color is not yellow")
}
//iii
console.log("\niii-")
alien_color = 'red'
if(alien_color == 'red'){
    console.log("Player just earned 15 points")
}
else{
    console.log("No the color is not red")
}
//iv
console.log("\niv-")
alien_color = 'red'
if (alien_color == 'green'){
     console.log("You just earned 5 points!")
}
     else if (alien_color == 'yellow'){
     console.log("You just earned 10 points!")
    }
    else{
     console.log("You just earned 15 points!")
}
//Q28
console.log("\n----------------------------Q28----------------------------")

//i
console.log("\ni-")
let age1 =1
if(age1  < 2 ){
    console.log("It's a baby")
}else{
    console.log("No a baby")
}
//ii
console.log("\nii-")
age1 = 2
if(age1  <= 2 && age1 < 4 ){
    console.log("The person is todler")
}else{
    console.log("The person isn't todler")
}
//iii
console.log("\niii-")
age1=4
if(age1  <= 4 && age1 < 13 ){
    console.log("The person is a kid")
}else{
    console.log("The person isn't kid")
}
//iv
console.log("\niv-")
age1=13
if(age1  <= 13 && age1 < 20 ){
    console.log("The person is a teenager")
}else{
    console.log("The person isn't teenager")
}
//v
age1=20
if(age1  <= 20 && age1 < 65 ){
    console.log("The person is a adult")
}else{
    console.log("The person isn't adult")
}
//vi
age1=65
if(age1  == 65 && age1 > 65 ){
    console.log("The person is an elder")
}else{
    console.log("The person isn't an elder")
}

//Q29
console.log("\n----------------------------Q29----------------------------")
console.log("\ni-")
let fav_fruits =['apple','banana','pineapple','stawberry','watermelon']
let favourite_fruits=[]
for(i=0;i<fav_fruits.length-1;i++){
favourite_fruits.push(fav_fruits[i])    
}
console.log(favourite_fruits)


//ii
console.log("\nii-")
if(fav_fruits.includes("apple")){
    console.log("apple is your fav fruit!")
}
else{
    console.log("No it is not your fav")
}
if(fav_fruits.includes("banana")){
    console.log("banana is your fav fruit1")
}
else{
    console.log("No it is not your fav")
}
if(fav_fruits.includes("watermelon")){
    console.log("apple is your fav fruit!")
}
else{
    console.log("No it is not your fav")
}
if(fav_fruits.includes("pineapple")){
    console.log("pineapple is your fav fruit!")
}
else{
    console.log("No it is not your fav")
}
if(fav_fruits.includes("stawberry")){
    console.log("stawberry is your fav fruit!")
}
else{
    console.log("No it is not your fav")
}
//Q30
console.log("\n----------------------------Q30----------------------------")

let  username =['Admin','Associate Engineer','Senior Engineer','Data Analyst','Manager']
username.forEach(element=>{
    if(element == 'Admin'){
     console.log("Hello "+element+", would you like to see a status report?")

    }
    else{
     console.log("Hello "+element+", thankyou for logging in again")
    }
})
//Q31
console.log("\n----------------------------Q31----------------------------")

for(i =0; i<6;i++){
    username.pop()
}
if(username.length ==0){
    console.log("We need to add some users")
}
else{
    console.log("Npthin")
}
console.log("The array is empty :",username)
//Q32
console.log("\n----------------------------Q32----------------------------")

let current_users = ['hammad','bilal','adnan','shafiq','raj']
let new_users =  ['asad','huzaifa','aamir','hammad','adnan']
console.log("iterating each arrray so that we could see where we need to add user")
for(i =0 ;i<5;i++){
   for(j=i;j<5;j++){
    if(current_users[i]== new_users[j]){
        console.log("The person is need to add a new username")
    }
    else{
        console.log("username is available")
    }
   }
   
}
//Q33
console.log("\n----------------------------Q33----------------------------")

let numbers = [1,2,3,4,5,6,7,8,9]
for(i =0 ;i<numbers.length;i++){
if(numbers[i] == 1){
    console.log("1st")
}
else if(numbers[i] == 2){
    console.log("2nd")
}
else if(numbers[i] == 3) {
    console.log("3rd")
}else if(numbers[i] == 4) {
    console.log("4th")
}else if(numbers[i] == 5) {
    console.log("5th")
}else if(numbers[i] == 6) {
    console.log("6th")
}else if(numbers[i] == 7) {
    console.log("7th")
}else if(numbers[i] == 8) {
    console.log("8th")
}else if(numbers[i] == 9){
    console.log("9th")
}
else{
    console.log("NOthing")
}
}
//Q34
console.log("\n----------------------------Q34----------------------------")

let pizza =['tikka','pepperoni','fajita','supreme']
for(i=0;i<pizza.length;i++){
    console.log("I like "+pizza[i]+" pizza!")
}
console.log(" I really love "+pizza[1]+"\n as oftenly chicken irritates me\n so I really enjoy the flow of cheese and pepperoni in that pizza ")

//Q35
console.log("\n----------------------------Q35----------------------------")

let animal = ['goat','dog','cow']
for(i =0;i<animal.length;i++){
    console.log(animal[i]+" can make a great pet")
    console.log("-"+animal[i]+" has 4 legs common")
    
}
//Q36
console.log("\n----------------------------Q36----------------------------")

function make_shirt(a){
 return a
}
console.log("The shirt is small and\nThe size of the shirt is "+ make_shirt(10))
//Q37
console.log("\n----------------------------Q37----------------------------")

function make_shirt(a,msg){
    return a ,msg
}
console.log("The shirt is medium and\nThe size of the shirt is "+ make_shirt(15 , "& I love JAVASCRIPT"))
console.log("The shirt is Large and\nThe size of the shirt is "+ make_shirt(20,"& I Love JAVASCRIPT"))
//Q38
console.log("\n----------------------------Q38----------------------------")

function describe_city(city,country = 'Pakistan'){
return "The city "+city + " is in "+country 
}
console.log(describe_city('karachi'))
console.log(describe_city('Peshawar'))
console.log(describe_city('Quetta'))
//Q39
console.log("\n----------------------------Q39----------------------------")

function city_country(city,country = 'Pakistan'){
    return '"'+ city+", "+country+'"'
}
console.log(city_country('Lahore'))
console.log(city_country('Hyderabad'))
console.log(city_country('Islamabad'))
//Q40 
console.log("\n----------------------------Q40----------------------------")

console.log('Q40')
function make_album(artist, Title,tracks){
   
   album_dict = {
        'artist': artist,
       'Title':Title
        }
        if(tracks){
            album_dict['Tracks'] = tracks
        }
    return album_dict
    }
album = make_album('Metallica', 'ride the lightning',12)
console.log(album)

console.log(make_album('Beethoven', 'ninth symphony',08))
console.log(make_album('Willie nelson', 'red-headed stranger',04))
//Q41
console.log("\n----------------------------Q41----------------------------")

magicians = ['S.S.ADAMS','JAY MARSHALL',"MAX MAVEN",'MASKED MAGICICAN']
function show_magicians(magicians){
    return magicians
}
console.log(show_magicians(magicians))
//Q42
console.log("\n----------------------------Q42----------------------------")

function show_magicians(magicians){
     magicians.forEach(element=>{
console.log(element)
     })
     
}
function make_great(magicians){
    
    great_magicians = []

    
    while (magicians.length !=0){
        magician = magicians.pop()
        great_magician = magician + ' the Great'
        great_magicians.push(great_magician)
    }

    great_magicians.forEach(element=>{
        magicians.push(element)
    })
   

magicians = ['Harry Houdini', 'David Blaine', 'Teller']
show_magicians(magicians)
}
console.log("\n")
make_great(magicians)
show_magicians(magicians)

//Q43
console.log("\n----------------------------Q43----------------------------")

function show_magicians(magicians){
     magicians.forEach(element=>{
console.log(element)
     })
     
}
function make_great(magicians){
    
    great_magicians = []

    
    while (magicians.length !=0){
        magician = magicians.pop()
        great_magician = magician + ' the Great'
        great_magicians.push(great_magician)
    

    great_magicians.forEach(element=>{
        magicians.push(element)
    })
     
    return magicians
}
}
magicians = ['Harry Houdini', 'David Blaine', 'Teller']
show_magicians(magicians)

console.log("\nGreat magicians: ")
great_magicians = make_great(magicians)
show_magicians(great_magicians)

console.log("\nOriginal magicians:")
show_magicians(magicians)

//Q44
console.log("\n----------------------------Q44----------------------------")

 sandwitch_content = ['lettuce','iceberg','tomatto','cheese','onions','cucumber'
,'mayo']
function sandwitch(...sandwitch_content){
    console.log("\n I will make a great sandwitch:")
  for ( i=0;i<sandwitch_content.length;i++){
    console.log("-adding "+sandwitch_content[i]+" to your sandwtich")
    }
    console.log("---Your sandwitch  is ready---")
}
console.log(sandwitch('lettuce','cheese','iceberg'))
console.log("\n")
console.log(sandwitch('onions','cheese','lettuce'))
console.log("\n")
console.log(sandwitch('lettuce','tomatto','cucumber'))


//Q45
console.log("\n----------------------------Q45----------------------------")
function make_car(manufacturer, model,...args){
    // """Make a dictionary representing a car."""
  car_dict = {
        'manufacturer': manufacturer,
        'model': model,
        'color':args[0],
        'headlights':args[1]
        
        }
    return car_dict
}
my_outback = make_car('subaru', 'outback',color='blue', tow_package=true)
console.log(my_outback)

my_accord = make_car('honda', 'accord', year=1991, color='white',
        headlights='popup')
console.log(my_accord)

console.log("\n<=============================END======================================>")