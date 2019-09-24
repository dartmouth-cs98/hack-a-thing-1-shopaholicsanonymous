//controls the pop up and the content written on it
//has the listener for the button click
//Content scripts read and modify the DOM of web pages the browser visits.


// content.js
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if( request.message === "clicked_browser_action" ) {
        // var firstHref = $("a[href^='http']").eq(0).attr("href");
  
        // console.log(firstHref);
  
        // This line is new!
        chrome.runtime.sendMessage({"message": "open_new_tab", "url": 'https://www.bankofamerica.com'});
      }
    }
  );


// // words to keep track of checkout, pay, buy
// document.addEventListener("click", function(){
//     var elementType = $(this).prev().prop('nodeName');
//     if(elementType === 'button'){
//         var button_text = event.target.innerHTML;
//         //splitting string
//         //reminder of parsing text from https://stackoverflow.com/questions/13068225/parsing-text-with-jquery
//         var words = button_text.split(' '); // splits in two halfs based on the position of ':'
//         for (word in words){
//             no_spaces_word = word.replace(/ /g, ''); // removes all the spaces.
//             if(no_spaces_word==='checkout'||no_spaces_word==='pay'||no_spaces_word==='buy'){
//                 alert("You are about to buy something!");
//                 chrome.runtime.sendMessage({type:'buying'});
//             }
//         }
        
//     }
    
// });
