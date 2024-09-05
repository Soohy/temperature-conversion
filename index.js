//temperature conversion program
const txt=document.getElementById("txt");
const fr=document.getElementById("fr");
const c=document.getElementById("c");
const res=document.getElementById("res");
let temp;
function convert(){
if(fr.checked)
    {
      temp=Number(txt.value);
        temp=temp*9/5+32;
    res.textContent=temp.toFixed(1)+"°F";

    }
else if(c.checked)
    {
        temp=Number(txt.value);
        temp=(temp-32)*(5/9);
    res.textContent=temp.toFixed(1)+"°C";

    }
else{
    res.textContent="Please select a temperature unit";
}
}