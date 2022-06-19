//https://docs.google.com/spreadsheets/d/197eMUvGBcyx78Duj0NMHoui0O2zHF-4mBNRz0nL6tSc/edit?usp=sharing

const sheetId = '197eMUvGBcyx78Duj0NMHoui0O2zHF-4mBNRz0nL6tSc';
const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
const sheetName = 'user-data';
const query = encodeURIComponent('Select *')
const url = `${base}&sheet=${sheetName}&tq=${query}`


const data = []
document.addEventListener('DOMContentLoaded', init)
 
const output = document.querySelector('.output')

// function init() {
//     fetch("https://docs.google.com/spreadsheets/d/197eMUvGBcyx78Duj0NMHoui0O2zHF-4mBNRz0nL6tSc/edit?usp=sharing")
//     .then(response => response.text())
//     .then(response => showData(response))
//     //.catch(error => console.error("Error: "+error));
// }

 
function init() {
    fetch(url)
        .then(res => res.text())
        .then(rep => {
            //Remove additional text and extract only JSON:
            const jsonData = JSON.parse(rep.substring(47).slice(0, -2));
            console.log(rep)
 
            const colz = [];
            const tr = document.createElement('p');
            //Extract column labels
            jsonData.table.cols.forEach((heading) => {
                if (heading.label) {
                    let column = heading.label;
                    colz.push(column);
                    const th = document.createElement('p');
                    th.innerText = column;
                    tr.appendChild(th);
                }
            })
            output.appendChild(tr);
 
            //extract row data:
            jsonData.table.rows.forEach((rowData) => {
                const row = {};
                colz.forEach((ele, ind) => {
                    row[ele] = (rowData.c[ind] != null) ? rowData.c[ind].v : '';
                })
                data.push(row);
            })
            processRows(data);
        })
}
  
function processRows(json) {
    json.forEach((row) => {
 
        const tr = document.createElement('p');
        const keys = Object.keys(row);
     
        keys.forEach((key) => {
            const td = document.createElement('img');
            td.textContent = row[key];
            tr.appendChild(td);
         
            
        })
        output.appendChild(tr);
    })
}



