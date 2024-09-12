const myForm = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const dobInput = document.getElementById('dob');
const msg = document.querySelector('.msg');
const userlist = document.getElementById('users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e)  {
    e.preventDefault();


if (nameInput.value === '' || emailInput.value === '' || dobInput.value === '') 
    { 
        msg.classList.add('error');
        msg.innerHTML= "Please enter all fields";
        

        setTimeout(()=> msg.remove(), 3000);
    }
        else {
            const li = document.createElement('li');
            li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value} : ${dobInput.value}`));

        userlist.appendChild(li)


    nameInput.value=""
    emailInput.value=""
    dobInput.value=""
    userlistInput.value=""


    console.log('success')
    }
}