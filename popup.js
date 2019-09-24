

let save_button = document.getElementById('saving');

save_button.onclick = function(element) {
    chrome.runtime.sendMessage({"message": "open_new_tab", "url": 'https://www.bankofamerica.com'});
};



// document.forms[0].onsubmit = function(e) {
//     e.preventDefault(); // Prevent submission
//     var choice = document.getElementById('choice').value;
//     if(choice === 'save'){
//         chrome.runtime.sendMessage({"message": "open_new_tab", "url": 'https://www.bankofamerica.com'});
//     }

//     if(choice === 'spend'){
//         chrome.runtime.sendMessage({"message": "open_same_tab", "url": 'https://www.bankofamerica.com'});
//     }

//     window.close();     // Close dialog
   
// };





