// background.js
//"event handles
//has all the listeners important to extension
//dormant until event is fired"


chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) 
{

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        console.log(tabs);
        var url = tabs[0].url;
        var suspect = ['uniqlo.com', 'www.amazon.com', 'https://www.urbanoutfitters.com', 'https://www.sephora.com'];
        for (store in suspect){
            if (url===suspect){
                alert("Please use your savings extension to come to your senses.");
            }
        }
    })
    
});
  

chrome.browserAction.onClicked.addListener(function(tab) {s
  // Send a message to the active tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  });
});

// This block is new!
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "open_new_tab" ) {
      chrome.tabs.create({"url": request.url});
    }
  }
);


// Called when the user clicks on the browser action. Does nothing for right now, keeping for possible expansions


//   //function addapted from https://stackoverflow.com/questions/10340481/popup-window-in-chrome-extensionc
//   chrome.runtime.onMessage.addListener(function(request) {
//     if (request.type === 'buying') {
//         chrome.tabs.create({
//             url: chrome.extension.getURL('popup.html'),
//             active: false
//         }, function(tab) {
//             // After the tab has been created, open a window to inject the tab
//             chrome.windows.create({
//                 tabId: tab.id,
//                 type: 'popup',
//                 focused: true
//                 // incognito, top, left, ...
//             });
//         });
//     }
// });
//   // listens for url from other page grabbed and opens it
//   chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//       if( request.message === "open_new_tab" ) {
//         chrome.tabs.create({"url": request.url});
//       }
//     }
//   );

// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//       if( request.message === "open_same_tab" ) {
//         chrome.tabs.create({"url": request.url});
//       }
//     }
//   );