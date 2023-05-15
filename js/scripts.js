'use strict'

const btn = document.querySelector("button");

const baseUrl = 'https://api.nbp.pl/api/exchangerates/tables/'
const getCurrency = async (table) => {
                    
                    try {
                    const response = await fetch(`${baseUrl}${table}`);
                    const data = await response.json();
                    return data;
                    } catch(err) {
                        console.log(`to jest błąd: ${err}`)
                    }
                    
                    
                    }

getCurrency('a').then((data) => {
    console.log(data);
    // const currencies = data[0]
    //destrukturyzacja 
    const [currencies] = data

    const {rates} = currencies

    rates.forEach((elem , i) => {
        
        const tr = document.createElement('tr')
            tr.innerHTML = 
            `
            <td>${++i}</td>
            <td>${elem.currency}</td>
            <td>${elem.mid}</td>
            
            `

            document.querySelector('table tbody').appendChild(tr);

    });
});

// const getData = () => {

//     fetch(baseUrl)
//     .then(response => response.json())
//     .then(result => {
//         console.log(result);

//         result[0].rates.forEach((elem, i) => {
//             const tr = document.createElement('tr')
//             tr.innerHTML = 
//             `
//             <td>${++i}</td>
//             <td>${elem.currency}</td>
//             <td>${elem.mid}</td>
            
//             `

//             document.querySelector('table tbody').appendChild(tr);

//         })

//     });

// }

// btn.addEventListener('click', getData)