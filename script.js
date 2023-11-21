/*function countvowels(){
  let name= docuent.querySelctor("#name").value;
  const vowles = aeiouAEIOU;

let count =0;
   for (let i=0; i<name.length; i++){
count++;
   }
}

alert(`the name $ {name} includes $ {count}vowels`);

document.querySeklector("#result").innerHTML=count;
}
*/

function countVowels() {
  let name = document.querySelector("#name").value;
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < name.length; i++) {
    if (vowels.includes(name[i])) {
      count++;
    }
  }
  alert(`The Name ${name} includes ${count} vowels`);
  document.querySelector("#result").innerHTML = count;
}
