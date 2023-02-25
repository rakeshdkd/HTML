// const li = document.getElementsByClassName('items');
// const hi = document.getElementsByTagName('li');
// const bb = document.querySelector('#items')
// const b = document.querySelectorAll('.items')
// console.log(hi);
// console.log(li);
// console.log(bb)
// // console.log(b)
// const heading=document.querySelector('.heading');
// console.log( heading.parentNode)


// const parent = document.querySelector('.parent');
// console.log(parent.childNodes)

// const nxtsib = document.querySelector('.items');
// console.log(nxtsib.nextElementSibling)

// const presib = document.querySelector('.item');
// console.log(presib.previousElementSibling);


const heading = document.querySelector('.heading');
heading.innerHTML = "Web development is awesome."
heading.style.color = "red";
heading.style.fontSize = '20px';
heading.classList.add('title')
heading.classList.remove('heading');

const parent = document.querySelector('.parent');
const subheading = document.createElement('h4');
subheading.innerHTML='JAvascript is beauty.';
parent.appendChild(heading);
parent.appendChild(subheading);


heading.addEventListener('fullscreenchange')














