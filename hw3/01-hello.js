// Mahad S. Ghani | CS463 | HW3/01-hello.js

// Create an img element
var imgElement = document.createElement("img");
imgElement.src = "../images/mahad.JPG"; // Replace with your image URL
imgElement.alt = "Personal Photo";
imgElement.width = 200; // Set the desired width
imgElement.id = "selfImg";
document.body.append(imgElement);

// Create a paragraph element
var paragraphElement = document.createElement("p");
paragraphElement.textContent =
  "My name is Mahad Ghani and I will be taking CS 463 this term to gain an introduction to Web Dev. I am pursuing a Bachelor's Degree in Computer Science and entering my final year. I like wathcing MMA and hiking in my free time!";
paragraphElement.id = "bio";
document.body.append(paragraphElement);

// Make first sentence bold
var firstSentence = paragraphElement.textContent.split(".")[0]; // split text into array separating using periods. use first
var spanElement = document.createElement("span"); // make span tag
spanElement.textContent = firstSentence;
spanElement.style.fontWeight = "bold"; // make it bold
paragraphElement.innerHTML = paragraphElement.innerHTML.replace(
  // repalce old with new bolded sentence
  firstSentence,
  spanElement.outerHTML
);
