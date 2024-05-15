
var config = {
    apiKey: "AIzaSyB0Bg3J8v4Q9XMU_r0f386pm_qNffcHQDk",
    authDomain: "project2-208b1.firebaseapp.com",
    databaseURL: "https://project2-208b1-default-rtdb.firebaseio.com",
    projectId: "project2-208b1",
    storageBucket: "project2-208b1.appspot.com",
    messagingSenderId: "642388532035",
    appId: "1:642388532035:web:a319462dc04e5645afedf6",
    databaseURL: "https://project2-208b1-default-rtdb.firebaseio.com"
  };

  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('CriminalRecords');
  
  // Listen for form submit
  document.getElementById('insertRecord').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    var criminalID = getInputVal('criminalID');
    var fullName = getInputVal('fullName');
    var aliase = getInputVal('aliase');
    var crimeInvolvedIn = getInputVal('crimeInvolvedIn');
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var address = getInputVal('address');
    var aadhaar = getInputVal('aadhaar');
  
    // Save message
    saveMessage(criminalID, fullName, aliase, crimeInvolvedIn, gender, address, aadhaar);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    }, 3000);
  
    // Clear form
    document.getElementById('insertRecord').reset();
  });
  
// Function to get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(criminalID, fullName, aliase, crimeInvolvedIn, gender, address, aadhaar){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      criminalID: criminalID,
      fullName: fullName,
      aliase: aliase,
      crimeInvolvedIn: crimeInvolvedIn,
      gender: gender,
      address: address,
      aadhaar: aadhaar
    });
  }