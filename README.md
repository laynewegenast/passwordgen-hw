# passwordgen-hw
### This was definitely the greatest difficulty I have faced in a challenge. I think that starting out was most difficult, but after pseduocoding on paper I finally was able to take the apporach that helped me through this assignment.

## First Steps
### To begin this project I first wrote out four seperate functions that would control the characters used in the password. Because I knew we would need upper and lower case letters, symbols, and numbers, I created this functions using 'const' since these character options needed to be *potentially* constant in each generated password, assuming they are confirmed by the user. The string attached to each const would contain every available character to be used in the password. Ithen use Math.floor in conjunction with math random to ensure a random and whole number was selected everytime the function was run. ![Screen Shot 2022-02-23 at 9 59 21 PM](https://user-images.githubusercontent.com/96094719/155457653-d9f3283b-cd76-4a5d-9970-13f57e9077fd.png)


## generatePassword Function
### After I had created my functions to determine the characters available to be randomized, I then began on the prompt which would allow the user to select a number of character >8 & <128. I used parseInt so that this would be returned as an integer. Then I created an if statement that recognizes if the password is under 8 characters, over 128 characters, or not a number a message will be returned letting the user know they need to enter a valid number as a result of theirs being invalid. ![Screen Shot 2022-02-23 at 9 58 26 PM](https://user-images.githubusercontent.com/96094719/155457676-f3513901-2dc7-4cff-82f4-9633695b3b3d.png)

![Screen Shot 2022-02-23 at 9 58 38 PM](https://user-images.githubusercontent.com/96094719/155457698-dd625a69-e9a6-4079-adf0-a0177ef8466f.png)

### After the password length is determined the user is then guided through 4 prompts allowing them to select the type(s) of characters desired in the randomized password. After establishing these variables I was sure to include another if statement in the case that the user does not select any character type. If this happens the input will be rejected and met with a returned statement letting them know they will need to select at least one character type. I then (slowly but surely and after feeling like my computer was going to explode) wrote out a functioning while loop that will use the functions created previously to create the randomized password depending on the user input. I think this was most difficult because during console logging to test this loop I either couldn't get it to successfully run or couldnt get it to stop. But after testing using the console log and remembering to actually call this function... success! ![Screen Shot 2022-02-23 at 9 58 59 PM](https://user-images.githubusercontent.com/96094719/155457715-516e4c2a-fc8f-4047-a147-5cc70d0ffdb9.png)


## link to application! -> https://laynewegenast.github.io/passwordgen-hw/
