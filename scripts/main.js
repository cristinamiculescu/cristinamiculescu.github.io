let Image = document.querySelector('img');
// functia document.querySelector selecteaza data type pentru variabila noastra 
Image.onclick = function() {
    let mySrc = Image.getAttribute('src');
    //functia .getAttribute salveaza in variabila mySrc sursa imagini curente 
    if ( mySrc === 'images/images.jpg' )
         Image.setAttribute('src', 'images/kittens.jpg');
         // .setAttribute aloca surcei atributulu celei de a doua imagini
    else if(mySrc === 'images/kittens.jpg' )
         Image.setAttribute('src', 'images/pisici.jpg');
    else
        Image.setAttribute('src', 'images/images.jpg');
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('Please enter your name.');
    if(!myName){ /*if myName has no value than it runs the function again so 
        that you are somehow oblijed to enter your name */
        setUserName();
    } else {
        localStorage.setItem('name', myName); 
        myHeading.textContent = 'Cats are cool, ' + myName 
    }
}
 /* promt() = displays a dialog box similar to alert() but does more as alert()
 promt() also asks the user to enter data into a field and stores it into a variable in our case in myName 
 this line call the API localSorage which allowes us to store data into a browser and retrieve it later 
 .setItem() = function for localStorage which sets the given name to the variable myName */
 // we set the textContent of the heading to a string adding the name

if(!localStorage.getItem('name')){
    // this if uses negation to verify if the 'name' data exists
    // if not the setUserName runs to create the data 
    setUserName();
} else{ 
    let storedName = localStorage.getItem('name');
    // we retrive the stored name by using getItem()
    myHeading.textContent = 'Cats are cool, ' + storedName;
}

myButton.onclick = function(){
    setUserName();
}
