
// function nameCount(name, sentence){
//   let words = sentence.split(" ");
//   let count = 0;
//   for(let i = 0; i < words.length; i++){
//     if(words[i].includes(name)){
//       count++;
//     }
//   }

//   console.log(count)
// }

function nameCount(name, sentence){
  let words = sentence.split(" ");
  let count = 0;
  let names = words.filter(element => element.includes(name))

  count = names.length 
  console.log(count)
}

let person = "John";
let announcement = "Congratulations John! John is a yoga master since the beginning of next week. A lot of last week began when John was only a banana. Trees from nectarines became apparent when he began mastering the weather"

nameCount(person, announcement); // 3
