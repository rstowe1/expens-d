//TODO: decide whether I want to store in the backend or if I want to run through fireBase
var config = {
  apiKey: "AIzaSyDSEmwemEjzdnOBJ-kzxyNO-Im5mY2byYc",
  authDomain: "silverton-imports.firebaseapp.com",
  databaseURL: "https://silverton-imports.firebaseio.com",
  projectId: "silverton-imports",
  storageBucket: "",
  messagingSenderId: "1042341083806"
};
firebase.initializeApp(config);

let database = firebase.database();

// new add button expense report table
$('#addNewLine').on('click', function (event) {
  event.preventDefault();


let ername = $('#erName').val().trim();
let erdate = $('#Date').val().trim();
let erbranch = $('#erBranchOrDepartment').val().trim();
let ermanager = $('#Manger').val().trim();
let ertd = $('#erTransactionDate').val().trim();
let erta = $('#erTransactionAmount').val().trim();
let ermi = $('#erMileage').val().trim();
let ertdes = $('#erTransactionDescription').val().trim();


// Local Storage for line Items

let newTrans = {
  name: ername,
  date: erdate,
  branch: erbranch,
  manager: ermanager,
  transactionDate: ertd,
  transactionAmount: erta,
  transactionMileage: ermi,
  transactionDescription: ertdes
};

database.ref().push(newTrans);

alert('Transaction Added');

//I may need to add childsnapshots if I intend to use firebase

// Clear the text boxes

$('#erTransactionDate').val("");
$('#erTransactionAmount').val("");
$('#erMileage').val("");
$('#erTransaction Description').val("");
});

database.ref().on('child_added', function(childSnapShot, prevChildKey) {

  console.log(childSnapShot.val());

  let name = childSnapShot.val().name;
  let date = childSnapShot.val().date;
  let branch = childSnapShot.val().branch;
  let manager = childSnapShot.val().manager;
  let transactionD = childSnapShot.val().transactionDate;
  let transactionA = childSnapShot.val().transactionAmount;
  let transactionM = childSnapShot.val().transactionMileage;
  let transactionDes = childSnapShot.val().transactionDescription;

  let mileageR = transactionM * .535;



$('#erTable > tbody').append('<tr><td>' + name + '</td><td>' +  date  + '</td><td>' + branch + '</td><td>' + manager + '</td><td>' + transactionD + '</td><td>' + transactionA + '</td><td>' + mileageR + '</td><td>' + transactionDes + '</td></tr>');
});