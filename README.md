# _Code Review 6_
#### _Doctor Lookup_
****************
## _November 22, 2019_
****************
#### _By: Joann Carter_
***************
# _Description_
##### This is a webpage that uses data from BetterDoctor API. It allows the user to enter a condition and receive a list of doctors in the Portland area. They may also search by a Doctor's name and further, narrow their results by radius in miles.
#  _Specification Chart_
| Behavior  | Input  | Output  |
|--------------|-----------|-----------|
|takes in user input and returns name|"sore throat "| "Doctor Name"|
|takes user name search and returns list of names that match search criteria| "John Doe" | List of doctors names |
| displays info about doctor |"John Doe"|  first name, last name, address, phone number, website and whether or not the doctor is accepting new patients.|
|catches API errors|404 error|'API error'|
|the application should return a notification that states that no doctors meet the criteria|"apple"| "please enter a different name"|
******************
#### _Instructions_
Create a .env file in the root directory. Save your API key in the .env file as the example shows below:
ex: API_Key=123456789123456789

OR, you may directy paste your key in the business.js file in place of ${process.env.API_KEY}.
***************
# _Technology Used_
* API from https://developer.betterdoctor.com/
* Javascript
* Webpack
* MDN
* Postman
* CSS
* Bootstrap
*******
###### _Licensing_
MIT public
