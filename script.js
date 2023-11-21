function countvowels(){
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
