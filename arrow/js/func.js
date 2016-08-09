// Display all user data on screen
function allUserData(){
  for (i = 0; i < users.length; i++){
    $('#userdata').append("Name: "+ users[i].username_first +" "+ users[i].username_last+". Registered: "+users[i].userdateregistered+"<br />");
  }
}

// Traditional JavaScript Boilerplate
const whenDidThomRegister = users
.filter(function(event) {
  return event.username_first === "Thomas"
})
.filter(function(event) {
  return event.username_last === "Banks"
})
.map(function(event){
  return event.userdateregistered
});

// Arrow syntax JavaScript
const whenDidThomRegisterShort = users
.filter(event => event.username_first === "Thomas")
.filter(event => event.username_last === "Banks")
.map(event => event.userdateregistered);
