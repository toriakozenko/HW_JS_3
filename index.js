// String: greeting
// {
//   let userName = prompt("What is your name?");
//   alert(`Greeting, ${userName}!`);
// }

// String: gopni4ek
// {
//   let str = prompt("Введіть якийсь текст");
//   let result = str.split(' ').join(', блін, ');
//   alert(result);
// }

// String: capitalize
// {
//   let str = "cANBerRa";
//   let result = str[0].toUpperCase() + str.slice(1).toLowerCase();
//   console.log(result);
// }

// String: word count
// {
//   let str = prompt("Введіть якийсь текст");
//   let length = str.trim().length;
//   alert(`Довжина вашого рядка - ${length}`);
// }

// String: credentials
// {
//   let lastName = prompt("Enter your last name:").trim();
//   let firstName = prompt("Enter your first name:").trim();
//   let byFather = prompt("Enter your by father:").trim();
//   let lastNameResult = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
//   let firstNameResult = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
//   let byFatherResult = byFather[0].toUpperCase() + byFather.slice(1).toLowerCase();
//   let fullName = `${lastNameResult} ${firstNameResult} ${byFatherResult}`;
//   alert(fullName);
// }

// String: beer
// {
//   let str = "Було жарко. Василь пив пиво вприкуску з креветками";
//   let words = str.split(" "); 
//   let index = words.indexOf("пиво"); 
//   if (index !== -1) { 
//     words.splice(index, 1, "чай"); 
//   }
//   let result = words.join(" ");
//   console.log(result); 
// }

// String: no tag
// {
//   let str = "якийсь текст, в якому є один тег <br /> і всяке інше";
//   let startIndex = str.indexOf("<");
//   let endIndex = str.indexOf(">", startIndex) + 1; 
//   let result = str.slice(0, startIndex) + str.slice(endIndex);
//   console.log(result); 
// }

// String: big tag
// {
//   let str = "якийсь текст у якому є один тег <br /> і всяке інше";
//   let startIndex = str.indexOf("<br");
//   let endIndex = str.indexOf("/>");
//   let tag = str.slice(startIndex, endIndex + 2);
//   let upperCaseTag = tag.toUpperCase();
//   let result = str.slice(0, startIndex) + upperCaseTag + str.slice(endIndex + 2);
//   console.log(result); 
// }

// String: new line
// {
//   let str = prompt("Enter some text with \\n");
//   let splitString = str.split("\\n");
//   let outputString = splitString.join("\n");
//   alert(outputString);
// }

// String: youtube
// { 
//   const youtubeLinkRegex = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/;
//   const videoLink = prompt('Enter your video link:');
//   const videoId = videoLink.match(youtubeLinkRegex)[1];
//   const iFrameElement = `<iframe width="800" height="700" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
//   document.write(iFrameElement);
// }
