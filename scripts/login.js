
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBs5aJA-ytz8k6ych2oBRNbFcbCowxxpac",
    authDomain: "cpreference-46d14.firebaseapp.com",
    databaseURL: "https://cpreference-46d14.firebaseio.com",
    projectId: "cpreference-46d14",
    storageBucket: "cpreference-46d14.appspot.com",
    messagingSenderId: "309468014422"
};
firebase.initializeApp(config);

const loginform = document.getElementById('loginform');
const addform = document.getElementById('addForm');

const email = document.getElementById('email');
const pwd = document.getElementById('passwd');
const signin = document.getElementById('signin');
const signout = document.getElementById('signout');

var uid = "";

const addR = document.getElementById('addR');
const cate = document.getElementById('categories');

const programs = firebase.database().ref().child("programs");


signin.addEventListener('click', e => {
    const auth = firebase.auth();
    auth.signInWithEmailAndPassword(email.value, pwd.value)
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);
        });
});

signout.addEventListener('click', e => {
    firebase.auth().signOut();
});

addR.addEventListener('click', e => {
    var nkey = document.getElementById('sno').value;
    console.log("New Key: " + nkey);
    if(nkey != "" ) {
        programs.child(cate.value).child(nkey).set({
            'Title' : $('#title').val(),
            'Link' : $('#link').val()
        }).then( () => {
            alert("Inserted successfully.!");
            document.getElementById('sno').value = "";
            document.getElementById('title').value = "";
            document.getElementById('link').value = "";
        });
    }
    else {
        alert("Select a category.!");
    }
    
});

cate.addEventListener('change', e => {
    if(cate.value != "") {
        var selectedcat = programs.child(cate.value);
        var count = 0;
        selectedcat.on('child_added', snap => {
            count++;
            console.log("Selected Category count: " + count);
            document.getElementById('sno').value = count;
        });
    }
    else {
        document.getElementById('sno').value = "";
    }       
});

function clearCategories() {
    console.log('Clearing Dropdownlist.');
    $('#categories').find('option').remove();
}

function loadCategories() {   
    $("#categories").append('<option selected="selected"></option>');
    var count = 0;
    programs.on('child_added', data => {
        $("#categories").append('<option>' + data.key + '</option>'); 
        count++;       
        console.log("Inserted Key: " + data.key);
        console.log("Inserted count: " + count);        
    });
}

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        uid = user.uid;
        loginform.style.display = "none";
        addform.style.display = "inline";
        signin.style.display = "none";
        signout.style.display = "inline";
        clearCategories();
        loadCategories();

    } else {
        // No user is signed in.
        loginform.style.display = "inline";
        addform.style.display = "none";
        signin.style.display = "inline";
        signout.style.display = "none";
    }
});