let passwordPlaceHolder = document.getElementById('newPassword');

let lowerCaseLetters = ['a','b','c','d','e','f','g','h','i','j','k',
                        'l','m','n','o','p','q','r','s','t','u','v',
                        'w','x','y','z'];

let upperCaseLetters = ['A','B','C','D','E','F','G','H','I','J','K',
                        'L','M','N','O','P','Q','R','S','T','U','V',
                        'W','X','Y','Z'];

let numbers = ['1','2','3','4','5','6','7','8','9','0'];

let specialCharacters = ['!','@','#','$','%','^','&','*','(',')'];


function generatePassword(){

    let newPassword = [];

    let alphaPickerOne = Math.floor(Math.random()*Math.floor(lowerCaseLetters.length));

    let numsAndCharsPickerOne = Math.floor(Math.random()*Math.floor(numbers.length));

    newPassword.push(lowerCaseLetters[alphaPickerOne]);

    newPassword.push(upperCaseLetters[alphaPickerOne]);

    newPassword.push(numbers[numsAndCharsPickerOne]);

    newPassword.push(specialCharacters[numsAndCharsPickerOne]);

    let alphaPickerTwo = Math.floor(Math.random()*Math.floor(lowerCaseLetters.length));

    let numsAndCharsPickerTwo = Math.floor(Math.random()*Math.floor(numbers.length));

    newPassword.push(lowerCaseLetters[alphaPickerTwo]);

    newPassword.push(upperCaseLetters[alphaPickerTwo]);

    newPassword.push(numbers[numsAndCharsPickerTwo]);

    newPassword.push(specialCharacters[numsAndCharsPickerTwo]);

    let alphaPickerThree = Math.floor(Math.random()*Math.floor(lowerCaseLetters.length));

    let numsAndCharsPickerThree = Math.floor(Math.random()*Math.floor(numbers.length));

    newPassword.push(lowerCaseLetters[alphaPickerThree]);

    newPassword.push(upperCaseLetters[alphaPickerThree]);

    newPassword.push(numbers[numsAndCharsPickerThree]);

    newPassword.push(specialCharacters[numsAndCharsPickerThree]);

    let alphaPickerFour = Math.floor(Math.random()*Math.floor(lowerCaseLetters.length));

    let numsAndCharsPickerFour = Math.floor(Math.random()*Math.floor(numbers.length));

    newPassword.push(lowerCaseLetters[alphaPickerFour]);

    newPassword.push(upperCaseLetters[alphaPickerFour]);

    newPassword.push(numbers[numsAndCharsPickerFour]);

    newPassword.push(specialCharacters[numsAndCharsPickerFour]);

    passwordPlaceHolder.value = newPassword.join().replace(/,/g, "");


}