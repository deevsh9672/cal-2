function capitalize(){
  const name = document.querySeletor("#name").value;
  const capitalized = name.charAt(0).toUpperCase()+name.slice(1);

document.querySelector("span").innerHTML=capitalized;
}
