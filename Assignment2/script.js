// Assignment NO 2: Suppose you are building a program that takes a user's choice of fruit and outputs its color based on the following options:

// Apple: red Banana: yellow Orange: orange

// Using a switch statement in JavaScript, you can write a program that takes a fruit as an input and returns the corresponding color

var fruit = prompt("Enter a fruit (apple, banana, or orange): ");

switch (fruit) {
  case "apple":
    console.log("The color of an apple is red");
    break;
  case "banana":
    console.log("The color of a banana is yellow");
    break;
  case "orange":
    console.log("The color of an orange is orange");
    break;
  default:
    console.log("Sorry, we don't recognize that fruit.");
}
