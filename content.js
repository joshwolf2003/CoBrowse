function setUpFirebase(){
  return new Promise(function(resolve){
    var firebaseScript = document.createElement('script');
    firebaseScript.setAttribute('src','https://www.gstatic.com/firebasejs/7.5.2/firebase-app.js');
    document.head.appendChild(firebaseScript);
    firebaseScript.addEventListener("load", resolve)
  })
}
function setUpFirebaseDatabase(){
  return new Promise(function(resolve){
    var firebaseScript = document.createElement('script');
    firebaseScript.setAttribute('src','https://www.gstatic.com/firebasejs/7.5.2/firebase-database.js');
    document.head.appendChild(firebaseScript);
    firebaseScript.addEventListener("load", resolve)
  })
}
var user
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  //  console.log(request.message)
    if( request.message === "clicked_browser_action" ) {
      setUpFirebase().then(function(){
        var firebaseCredentials = document.createElement('script');
        firebaseCredentials.src = chrome.runtime.getURL("CoBrowse.js")
        document.head.appendChild(firebaseCredentials);
      })
      setUpFirebaseDatabase()
    }
    if( request.message.user){
      console.log("user")
      window.postMessage("user", "*")
      // window.user = request.message.user
      // var evt = document.createEvent("userEvent")
      // evt.initCustomEvent("userEvent", true, true, {a:1})
      // document.dispatchEvent(evt)
    }
  }
);


//chrome.runtime.onMessage.addListener
