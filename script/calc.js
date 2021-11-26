let key='';
let detext='';
let entext='';
let result = '';
let deresult='';
let unic = '';
let list_text ='';

document.setPointerCapture("GOen").addEventListener("click", encode());
document.setPointerCapture("GOde").addEventListener("click", decode());


function encode() {
  key = document.getElementById('key').value;
  entext = document.getElementById('entext').value;
  entext = entext.replace(/\s+/g, "");
  key = key.replace(/\s+/g, "");
  
  list_text = Array.from(entext);
  for (var i=0;i<list_text.length;i++) {
    unic = (entext.codePointAt(i))+parseInt(key, 10);
    result+=String.fromCodePoint(unic);
  }
  
  document.getElementById("value").value = result;
  navigator.clipboard.writeText(result);
  list_text = ''
  result = ' '
  entext = ' '
  key = ' '
}

try {
  RangeError();
} catch (error) {
  alert('パスワードが大きすぎます。もうちょっと小さく。');
}



function decode() {
  key = document.getElementById('key').value;
  detext = document.getElementById('detext').value;
  detext = detext.replace(/\s+/g, "");
  key = key.replace(/\s+/g, "");

  list_text = Array.from(detext);
  for (var i=0;i<list_text.length;i++) {
    unic = (detext.codePointAt(i))-parseInt(key, 10);
    deresult+=String.fromCodePoint(unic);
  }

  document.getElementById("value").value = deresult;
  list_text = ''
  deresult = ' '
  detext = ' '
  key = ' '
}