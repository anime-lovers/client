var body = document.body; // seleksi <body>
var mainDiv = document.createElement('div'); //buat element HTML <div> dengan createElement
mainDiv.setAttribute('id', 'main');
body.appendChild(mainDiv);// menambahkan <div id="main"> ke dalam <body> dengan appendChild

// MENAMBAH DIV DI DALAM MAIN DIV//
var insideMainDiv = document.createElement('div');
//shorthand menambah attribute dengan setAttribute(attributeName,attributeValue)
insideMainDiv.setAttribute('id', 'inside-main');
mainDiv.appendChild(insideMainDiv);

//MENAMBAH TAH H1 DI DALAM insideMainDiv//
var h1 = document.createElement('h1');
var h1Text = document.createTextNode('Heading Contoh 1');
h1.appendChild(h1Text);
insideMainDiv.appendChild(h1);

//MEMBUAT BUTTON <button>//
var button = document.createElement('button');
var buttonText = document.createTextNode('Click Me!');
button.appendChild(buttonText);
// Lalu, kita akan mencoba membuat button tersebut saat di klik meng-alert sebuah pesan
button.addEventListener('click',function(){
  alert('Hello!');
});
insideMainDiv.appendChild(button);

//insideMainDiv.removeChild(h1); menghapus element
