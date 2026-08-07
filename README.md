# Talponia Chat
This is a chatroom for pawpaw peduncle borers _(Talponia plummeriana)_, a moth species that feeds and lives on pawpaw trees. Pawpaws are the largest fruit native to North America. Peduncle Borers enter their name, date the egg they hatched from was laid, and their message which is displayed at the location of their click on the page. 

## How to run Locally
1. Clone the talponia-chat repository to your local enviornment
2. Open the repo in VScode
3. Open index.html and use the Go Live feature in VScode to view the project

## Features  

__API__  
I utilized the github API to display the README from my project's repository on the about page.

__Media Query__  
I used a media query to have the messages only take up 15% of the screen for screens 1200 px and wider, istead of the default wodth of 25% so the messages don't look stretched.

__Two pages/routes in the Project__  
I have the main page (index.html) and the about page (about.html)

__Analyze data that is stored in arrays, objects, sets or maps and display information about it in your app__  
I store each set of input from each form submission in formObj and all the objects from each form submission are saved in formArray. I use the click location to determine where the message will be displayed and then use the dob to determine what image is displyed to represent the peduncle borer's current life cycle stage. 

__Validate user input and either prevent the invalid input or inform the user about it (in all cases prevent invalid input from being stored or saved)__  
I use the functions validateName, validateDOB, and validateMessage to ensure the peduncle borers don't submit only spaces or a blank for the names and message inputs and that they do elect a date for the dob input.

__Calculate and display data based on an external factor (ex: get the current date, and display how many days remaining until some event)__  
I use the peduncle borer's dob and the current date to determine how many days old the peduncle borer is which is used to detrmine what life cycle stage they are in, which determines which image is displayed next to their name. 