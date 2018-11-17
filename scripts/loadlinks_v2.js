$(document).ready(() => {
    document.getElementById('dataTable').style.visibility = "hidden";
    document.getElementById('dataTable2').style.visibility = "hidden";
});

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

var ref = firebase.database().ref().child("concepts");
ref.on("child_added", data => {
    var tbody = $("#tableBody");
    concept = data.val();
    //console.log(data.key + ':' + data.val()['AURL']);

    var tr = $('<tr></tr>');
    tr.append("<td>" + concept["Sno"] + "</td>");
    tr.append("<td>" + concept["Title"] + "</td>");
    tr.append("<td>" + concept["For"] + "</td>");
    tr.append("<td> <a href='" + concept["URL"] + "' class='btn btn-primary btn-sm' target='_blank'>Download</a></td>");

    tbody.append(tr);
    
    document.getElementById('loader').innerText = "Concept Reference Documents:";
    document.getElementById('dataTable').style.visibility = "visible";
});

var ref = firebase.database().ref().child("additional");
ref.on("child_added", data => {
    var tbody = $("#tableBody2");
    concept = data.val();
    //console.log(data.key + ':' + data.val()['AURL']);

    var tr = $('<tr></tr>');
    tr.append("<td>" + concept["Sno"] + "</td>");
    tr.append("<td>" + concept["Title"] + "</td>");
    tr.append("<td>" + concept["For"] + "</td>");
    tr.append("<td> <a href='" + concept["URL"] + "' class='btn btn-primary btn-sm' target='_blank'>Download</a></td>");

    tbody.append(tr);
    
    document.getElementById('loader2').innerText = "Additional Reference Documents:";
    document.getElementById('dataTable2').style.visibility = "visible";
});
