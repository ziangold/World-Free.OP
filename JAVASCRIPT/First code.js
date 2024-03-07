// console.log("Hello World")


// console.log("%cHello, World", "color: blue; font-size: 40px; background-color: red;")


// "john"
// var person;
// person = 'john'
// // person;
// // console.log("Hello",  person)
// var greeting;
// greeting = 'Hello'
// // console.log(greeting , person)
// greeting ='hi'
// person = 
// console.log(greeting , person)


// var petdog;
// petdog = 'Rex';
// var petcat  = "Paper";
// console.log(petdog)
// console.log(petcat)
// console.log("My pet cat's name is:" , petcat)
// console.log("My pet dog's name is:" , petdog)
// var catsound = "purr";
// var dogsound = "woof";
// console.log(petcat , "says" , catsound)
// console.log(petdog , "says" , dogsound)
// var catsound = "meow";
// console.log(petcat , "now says " + catsound)


// var petDog = 'Rex' // Task 1 solution
// console.log(petDog)


// var number = 123
// console.log(number)
// number
// var currentTime = 7
// console.log(true || false)

// var petHungry = true
// console.log('Feeding the pet')
// console.log("Pet is hungry: ", !petHungry)
// console.log(petHungry)

// console.log(22 % 5) // 2


// console.log(5 != "5")


// var result = 50;

// if(result > 40){
//     console.log("You have passed")
// }
// else{
//     console.log("You did not pass the test")
// }


// var place = "first";

// if(place == 'first'){
//     console.log('Gold')
// } 
// else if(place == 'second'){
//     console.log('Silver')
// }
// else if(place == 'Third'){
//     console.log('Bronze')
// }
// else{
//     console.log('No medal')
// }


// var place = 'first';
// switch(place){
//     case 'first':
//         console.log('Gold');
//         break;
//     case 'Second':
//         console.log('Silver');
//         break;
//     case 'Third':
//         console.log('Bronze');
//         break;
//     default:
//         console.log('No medal');
// }


// for ( i = 0; i <= 3; i++) {
//     console.log(i)
// }


// var i = 10;

// while(i > 0) {
//     console.log(i);
//     i--;
// }


// for(var month = 1; month < 3; month++)
// {
//     console.log("Month: "+ month)
//     for(var week = 1; week <= 4; week++)
//     {
//         console.log("Week:", week)
//         for(var day = 1; day <= 7; day++)
//         {
//             console.log("Day:", day)
//         } 
//     }
// }


// for (var month = 1; month < 3; month++) {
//     console.log("Month: " + month);
//     for (var week = 1; week <= 4; week++) {
//         console.log("Week:", week);
//         for (var day = 1; day <= 7; day++) {
//             console.log("Day:", day);
//         }
//     }
// }


// for (var firstNum = 0; firstNum < 2; firstNum++) {
//     for (var secondNum = 0; secondNum < 10; secondNum++) {
//         console.log(firstNum + ", " + secondNum);
//     }
// }


// //nested loops - one inside another 
// for (var i = 100; i > 10; i = i - 10) {
//     for (var j = 10; j > 4; j = j - 5) {
//         console.log(i + " divided by " + j + " equals " + i / j);
//     }
// }


// var cubes = 'ABCDEFG';
// //styling console output using CSS with a %c format specifier
// for (var i = 0; i < cubes.length; i++) {
//     var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
//     console.log("%c" + cubes[i], styles)
// }


// var cubes = 'ABCDEFG';
// //styling console output using CSS with a %c format specifier
// for (var i = 0; i < 7; i++) {
//     var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
//     console.log(i + " = %c" + cubes[i], styles)
// }



// for (var i = 1; i < 11; i++) {
//         var place = i;
//         switch(place){
//             case 1:
//                 console.log('Gold');
//                 break;
//             case 2:
//                 console.log('Silver');
//                 break;
//             case 3:
//                 console.log('Bronze');
//                 break;
//             default:
//                 console.log(i);
//         }
// }


// for (var i = 1; i < 11; i++) {
//     var place = i;

//     if(place == 1){
//         console.log('Gold')
//     } 
//     else if(place == 2){
//         console.log('Silver')
//     }
//     else if(place == 3){
//         console.log('Bronze')
//     }
//     else{
//         console.log(i)
//     }
// }


// function listArrayItems(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         console.log(i+1 , arr[i] , '=') //display the array item where the index is euqal to i
//         if (arr[i] == 'yellow') {
//             console.log(i*100, "tomato!")
//         } else {
//             console.log(i*100, arr[i])
//         }
//     }
// }
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
// listArrayItems(colors); //display all items in the array at once


// function letterFinder(words, letter) {
//     for (var i = 0; i < words.length; i++) {
//         for (var j = 0; j < words[i].length; j++) {
//         if (words[i][j] === letter) {
//             console.log(`This letter '${letter}' found in '${words[i]}' at position '${j}'`);
//         }
//         }
//     }
//     }

//     var words = ['zain', 'ali', 'ahmad', 'sibtain'];
//     var letter = 'a';
//     letterFinder(words, letter);


// function letterFinder(words, letter) {
//         for (var i = 0; i < words.length; i++) {
            
//             if (words[i].toLowerCase() === letter.toLowerCase()) {
//                 console.log(`This letter '${letter}' found in '${words}' at position '${i}'`);
//                 }
//             }
//         }
    
//         var words = 'Zain is a very beautiful person';
//         var letter = 'z';
//         letterFinder(words, letter);


// function letterFinder(words, letter) {
//     if(!Array.isArray(words)){
//         words = words.split(' ')
//     }
//     for (var i = 0; i < words.length; i++) {
//         for (var j = 0; j < words[i].length; j++) {
//         if (words[i][j] === letter) {
//             console.log(`This letter '${letter}' found in '${words[i]}' at position '${j}'`);
//         }
//         }
//     }
// }
// var words = 'Zain is a very beautiful person.';
// var letter = 'a';
// letterFinder(words, letter);


