var firebaseConfig = {
   apiKey: "AIzaSyB1M8bERSm_2vfkNciVw_Bt0FYYd-zVtaU",
   authDomain: "cobrowse-1cae6.firebaseapp.com",
   databaseURL: "https://cobrowse-1cae6.firebaseio.com",
   projectId: "cobrowse-1cae6",
   storageBucket: "cobrowse-1cae6.appspot.com",
   messagingSenderId: "406514255458",
   appId: "1:406514255458:web:c1151edd677e11297db33b",
   measurementId: "G-RRJSTFPENH"
 };
 // Initialize Firebase
// function onUpdate(){
firebase.initializeApp(firebaseConfig);
console.log("Firebase Activated.")
window.addEventListener("mousemove", function(event) {
  console.log(event)
  var x = event.clientX
  var y = event.clientY
  var database = firebase.database()
  firebase.database().ref("/databases/coordinates/").set({user:"josh", x:x, y:y})
})
//  firebase.
  //firebase.return("mousemove")
//  onUpdate("mousemove
// window.addEventListener("message", function(request){
//   console.log(request, 123)
//   if( request.message.user){
//     console.log("user")
//     window.user = request.message.user
//    }
// })

// window.addEventListener("message", function(request){
//   console.log(request.data)
// }, true)
var userInput = document.getElementById("user")
console.log(userInput)
userInput.addEventListener("change", e=>{
  console.log(e.target.value)
})
