# hack-a-thing shopaholicsanonymous
### This project will explore building out a google chrome extension

## Purpose 
- Delay rethink impulse buying to put more though into it 
- To help saving by remining you of financial goals

## Design Idea
### This extension is to have a pop up everytime you go to 'buy' or 'pay now' and will ask if you'd rather save the money and offer redirecing to your savings account. It will also remind you of the financial goals you *should* be saving for

## Set Up Prior Information Needed Before Use
1.  Will have bank name itself to redirect to website (just the website, not the login)
2. 3 financial goals you're saving for

## Stretch functionality
- User is able to disable extention for certain sites
- User is able to label 'essentials' that are exempt from being flagged
- Being able to detect the contents of the cart and non having pop up for things on 'essentials' list
- or....having a user input high risk websites they are concerned about spending money on

##What you learned
- Google chrome extensions can't actually track where the user clicks with that data, has to do werid parsing with heml elements and event listeners to try to extract information
- The flow of information for an en extension is strage with the seperation of the background and the content handler and also the user interface.

##What didn’t work
- Again spent too much time coding out what theoretically worked and then didn't have too much time to debug, so stripped it down into a very simplified version of the idea
- Ask I was working on it, things I assumed would be easy (detecting button clicks for things that say buy) and things I hadn't even though of (state management to make sure pop up isn't always to the side) quickly came apparent.
- It actaulyy took me a solid hour of just plain reading and research to even start understanding the interaction of the different components of an extension, that was more research than I anticipated.
- Also, the person I know in the class was working with someone else so I was too nervous to ask anyone else so I worked alone which was time consuming and with no one to bounce ideas off of.....will ask to work with a partnerelse next time



##Tutorials/Resources
- Most of the code to set up the extension was done following this tutorial: https://thoughtbot.com/blog/how-to-make-a-chrome-extension
- The rest of it was tweaked to make my functionality work   
- http://code.jquery.com/
- image icon from 
- alot of the notes I took along the way in comments is from the offical googal tutorial (https://developer.chrome.com/extensions/overview)
- websites used as reference when designing
    - amazon (weird to work with)
    - uniqlo
    - h&m
    - urban outfitters