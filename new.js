
const conatngo = document.querySelector('#conatiner');

const content = document.createElement('div');

content.classList.add('content');
content.textContent = 'This is the glorrrius text-content!';

conatngo.appendChild(content);



const ptag = document.createElement('p');
ptag.style.color = 'red';
ptag.textContent = "Hey I'm red!"
conatngo.append(ptag);


const hthree = document.createElement('h3');
hthree.style.color = 'blue';
hthree.textContent = "I'm a blue h3!";
conatngo.append(hthree);







const newDiv = document.createElement('div');
newDiv.style.border = '2px solid black';
newDiv.style.backgroundColor = 'pink';

const anotherH1 = document.createElement('h1');
anotherH1.textContent = "I'm in a div";
newDiv.append(anotherH1);

const anotherp = document.createElement('p');
anotherp.textContent = "ME TOO!";
newDiv.append(anotherp);


conatngo.append(newDiv);





const btn = document.querySelector('#btn');

btn.onclick = () => alert("Bonjour, sil vous plait");


const vutton = document.querySelector('#vutton');
vutton.addEventListener('click',() => 
{alert("HOLA TU PARLE ESPANGNOL?")});



function alertFunction(){
    alert("ALERT ALERT ALERT");
}

ok.addEventListener('click',alertFunction);


btn.addEventListener('click', function (e) {
    console.log(e);
  });


vutton.addEventListener('click', function (e) {
    console.log(e.target);
    });

    ok.addEventListener('click', function (e)  {
        e.target.style.backgroundColor = 'blue';
    });