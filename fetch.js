document.getElementById('form').addEventListener('submit', async(event)=>{
    event.preventdefault()
    // prevent refreshing the page without sending the data to the data base

    var name = document.getElementById('name').value

var email = document.getElementById('email').value

var phonenumber = document.getElementById('phonenumber').value

console.log(name) 

console.log(email)

console.log(phonenumber)
})

// Package the data in JSON format 
 var data = {
    name : name,
    email : email,
    phoneNumber: phoneNumber
 }

 try{
    const response = await fetch ('https://localhost:6000/api/sendOrder')
 }
 catch(err){
    console.log(error)
 }