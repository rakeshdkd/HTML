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
subheading.innerHTML = 'JAvascript is beauty.';
parent.appendChild(heading);
parent.appendChild(subheading);


// heading.addEventListener('fullscreenchange')
var div = document.querySelector('.form-control');
var btn = document.querySelector('#btn');
btn.style.borderRadius = "4px"

btn.style.backgroundColor = "green"
btn.style.color = "white"

var Name = document.querySelector('#name')
var email = document.querySelector('#email');

btn.addEventListener('click', (Event) => {
    // console.log(Name.value);
    // console.log(email.value);
    var li = document.createElement('li');
    li.className = "Newitem";
    li.style.marginTop = "20px"
    li.innerHTML = Name.value + " " + email.value;
    div.insertAdjacentElement('beforeend', li);
    var del = document.createElement('button');
    del.className = "delet-button";
    del.style.marginLeft = "5px"
    del.style.borderRadius = "4px"
    del.style.backgroundColor = "red"
    del.innerHTML = "Delet"
    li.insertAdjacentElement('beforeend', del)

    var delet = document.querySelector('.delet-button');

    localStorage.setItem('Name', Name.value)
    localStorage.setItem('Email', email.value);

    delet.addEventListener('click', (Event) => {
        li.remove();
        del.remove();

        localStorage.removeItem('Name')
        localStorage.removeItem('Email');
    });
});








