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


// const heading = document.querySelector('.heading');
// heading.innerHTML = "Web development is awesome."
// heading.style.color = "red";
// heading.style.fontSize = '20px';
// heading.classList.add('title')
// heading.classList.remove('heading');

// const parent = document.querySelector('.parent');
// const subheading = document.createElement('h4');
// subheading.innerHTML = 'JAvascript is beauty.';
// parent.appendChild(heading);
// parent.appendChild(subheading);


// // heading.addEventListener('fullscreenchange')
// var div = document.querySelector('.form-control');
// var btn = document.querySelector('#btn');
// btn.style.borderRadius = "4px"

// btn.style.backgroundColor = "green"
// btn.style.color = "white"


/*
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
*/

function saveToLocalStorage(event) {
    event.preventDefault();
    const Name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const contactNo = document.querySelector('#cn').value;
    // console.log(Name, email);
    const obj = {
        Name,
        email,
        contactNo
    };

    axios.post('https://crudcrud.com/api/7750d651c6fc4c54a87c9e4249d032ad/appointmentData', obj)
        .then((response) => {
            showUserOnScreen(response.data)
        }).catch(err => {
            document.body.innerHTML = document.body.innerHTML + "<h4>Something went wrong</h4>"
            console.log(err)
        })

    // axios.get('https://crudcrud.com/api/e9ce1194f6474e33b931f16bfa7763dd/appointmentData')
    // .then(response => {
    //     showUserOnScreen(response.data)
    // })
    // .catch(err => {
    //     console.log(err)
    // })



    // localStorage.setItem(obj.email, JSON.stringify(obj));
    // showUserOnScreen(obj)

}

window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/7750d651c6fc4c54a87c9e4249d032ad/appointmentData")

        .then(response => {
            for (let i = 0; i < response.data.length; i++) {
                showUserOnScreen(response.data[i])
                // console.log(response.data[i]._id)

            }
            // console.log(response.data[2])

        })
        .catch(err => {
            console.log(err)
        })
})
function showUserOnScreen(obj) {
    const parentElem = document.querySelector('.form-control');
    const childElem = document.createElement('li');
    childElem.style.marginBlock = "10px"
    childElem.innerHTML = obj.Name + " - " + obj.email + " - " + obj.contactNo;
    parentElem.appendChild(childElem);
    // console.log(childElem);

    // Adding delet button.
    const del = document.createElement('input');
    del.value = "Delet";
    del.type = "button";
    del.style.background = "red"
    del.style.marginLeft = "8px"
    del.style.borderRadius = "5px"

    // Adiing edit button.
    const edit = document.createElement('input');
    edit.type = 'button';
    edit.value = 'Edit';
    edit.style.marginLeft = '5px';
    edit.style.borderRadius = '4px';
    edit.style.backgroundColor = 'rgba(210,124,153,0.5)'

    del.onclick = () => {
        // localStorage.removeItem(obj.email);
        parentElem.removeChild(childElem);

        axios.get('')

    }
    edit.onclick = () => {
        // localStorage.removeItem(obj.email);
        parentElem.removeChild(childElem);


        document.getElementById('name').value = obj.Name;
        document.getElementById('email').value = obj.email;


    }

    childElem.appendChild(del);
    childElem.appendChild(edit);
    parentElem.appendChild(childElem);



}





