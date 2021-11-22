let key;
let detext;
let entext;

let result = '';
let deresult = '';


document.getElementById("GOen").addEventListener("click", encode);
document.getElementById("GOde").addEventListener("click", encode);


function encode() {
  key = document.getElementById('key').value;
  entext = document.getElementById('entext').value;
  let list_text = Array.from(entext);

  for (var i=0;i<list_text.length;i++) {
    result += (entext.codePointAt(i))*key+','
  }
  
  document.getElementById("value").value = result;
  result = ' '
  entext = ' '
  key = ' '
  form.reset();
}


function decode() {
  key = document.getElementById('key').value;
  detext = document.getElementById('detext').value;

  for (var i=0;i<detext.length;i++) {
    deresult += (String.fromCodePoint(detext[i]/key))
  }

  document.getElementById("value").value = deresult;
  deresult = ' '
  entext = ' '
  key = ' '
  form.reset();
}