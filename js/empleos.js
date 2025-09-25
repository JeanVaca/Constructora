import {getJobs} from './firebase.js'

const jobsContainer = document.getElementById('jobs-container');

window.addEventListener('DOMContentLoaded', async () => {
    const querySnapshot =  await getJobs()

    let html = '';

    querySnapshot.forEach(doc => {
        const job = doc.data()
        html += `
            <div style="margin: 2rem; 
            padding-bottom: 1rem;
            border-bottom: 1px solid;
            border-color: #f1582e;">
                <h4 style="font-weight: bolder;">${job.Nombre}</h4>
                <p>${job.Categoria}</p>
                <p><button class="btninfo" onclick="window.location.href='${job.infohtml}'">Informacion</button><button class="btnvacante" onclick="window.location.href='${job.formhtml}'">Postularme</button></p>
            </div>
        `
    })

    jobsContainer.innerHTML = html;
})
