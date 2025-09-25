import {saveSSMA} from './firebase.js'

window.addEventListener('DOMContentLoaded', () => {
    console.log('funciona');
})

const ssmaForm = document.getElementById('SSMA-form')

ssmaForm.addEventListener('submit', (e) => {
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
        const name = ssmaForm['name']
        const phone = ssmaForm['phone']
        const email = ssmaForm['email']
        const school = ssmaForm['school']
        const experience = ssmaForm['experience']
        const location = ssmaForm['location']
        const able = ssmaForm['able']
    
        saveSSMA(name.value, phone.value, email.value, school.value, experience.value, location.value, able.value)
    
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