console.log("background")
chrome.browserAction.onClicked.addListener(function(tab) {
  console.log("messages")
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});

    chrome.identity.getProfileUserInfo((userInfo)=>{
      chrome.tabs.sendMessage(activeTab.id, {"message": {user: userInfo.email} });
    })
  });
});
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "open_new_tab" ) {
      chrome.tabs.create({"url": request.title});
    }
  }
);
