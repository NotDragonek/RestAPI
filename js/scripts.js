'use strict'

const btn = document.querySelector("button")

const getData = () => {

    fetch('https://api.nbp.pl/api/exchangerates/tables/A/?format=json')
    .then(response => response.json())
    .then(result => {
        console.log(result);

        result[0].rates.forEach((elem, i) => {
            const tr = document.createElement('tr')
            tr.innerHTML = 
            `
            <td>${++i}</td>
            <td>${elem.currency}</td>
            <td>${elem.mid}</td>
            
            `

            document.querySelector('table tbody').appendChild(tr);

        })

    });

}

btn.addEventListener('click', getData)