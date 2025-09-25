import {saveRRHH} from './firebase.js'

window.addEventListener('DOMContentLoaded', () => {
    console.log('funciona');
})

const RRHHForm = document.getElementById('RRHH-form')

RRHHForm.addEventListener('submit', (e) => {
    e.preventDefault()

    if(document.getElementById('name').value == "" || document.getElementById('phone').value == "" || document.getElementById('email').value == "" || document.getElementById('school').value == "" || document.getElementById('experience').value == "" || document.getElementById('location').value == ""){
        
        alert('Faltan datos!')

        if(document.getElementById('name').value == ""){
            document.getElementById("name").style.backgroundColor = 'lightsalmon';
        }
        if(document.getElementById('phone').value == ""){
            document.getElementById("phone").style.backgroundColor = "lightsalmon";
        }
        if(document.getElementById('email').value == ""){
            document.getElementById("email").style.backgroundColor = "lightsalmon";
        }
        if(document.getElementById('school').value == ""){
            document.getElementById("school").style.backgroundColor = "lightsalmon";
        }
        if(document.getElementById('experience').value == ""){
            document.getElementById("experience").style.backgroundColor = "lightsalmon";
        }
        if(document.getElementById('location').value == ""){
            document.getElementById("location").style.backgroundColor = "lightsalmon";
        }
    }
    else{
        const name = RRHHForm['name']
        const phone = RRHHForm['phone']
        const email = RRHHForm['email']
        const school = RRHHForm['school']
        const experience = RRHHForm['experience']
        const location = RRHHForm['location']
        const able = RRHHForm['able']

        saveRRHH(name.value, phone.value, email.value, school.value, experience.value, location.value, able.value)

        document.getElementById('name').value = "";
        document.getElementById('phone').value = "";
        document.getElementById('email').value = "";
        document.getElementById('school').value = "";
        document.getElementById('experience').value = "";
        document.getElementById('location').value = "";
        alert('Sus datos han sido enviados exitosamente!')
        document.getElementById("name").style.backgroundColor = 'rgba(57, 57, 57, 0.07)';
        document.getElementById("phone").style.backgroundColor = 'rgba(57, 57, 57, 0.07)';
        document.getElementById("email").style.backgroundColor = 'rgba(57, 57, 57, 0.07)';
        document.getElementById("school").style.backgroundColor = 'rgba(57, 57, 57, 0.07)';
        document.getElementById("experience").style.backgroundColor = 'rgba(57, 57, 57, 0.07)';
        document.getElementById("location").style.backgroundColor = 'rgba(57, 57, 57, 0.07)';
    }
})