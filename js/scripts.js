//https://docs.google.com/spreadsheets/d/197eMUvGBcyx78Duj0NMHoui0O2zHF-4mBNRz0nL6tSc/edit?usp=sharing

const data = []
document.addEventListener('DOMContentLoaded', init)
 


function init() {
    fetch("https://docs.google.com/spreadsheets/d/197eMUvGBcyx78Duj0NMHoui0O2zHF-4mBNRz0nL6tSc/edit?usp=sharing")
    .then(response => response.json())
    .then(response => showData(response))
    //.catch(error => console.error("Error: "+error));
}

function showData() {

}
 
// function init() {
//     fetch(url)
//         .then(res => res.text())
//         .then(rep => {
//             //Remove additional text and extract only JSON:
//             const jsonData = JSON.parse(rep.substring(47).slice(0, -2));
//             console.log(rep)
 
//             const colz = [];
//             const tr = document.createElement('tr');
//             //Extract column labels
//             jsonData.table.cols.forEach((heading) => {
//                 if (heading.label) {
//                     let column = heading.label;
//                     colz.push(column);
//                     const th = document.createElement('th');
//                     th.innerText = column;
//                     tr.appendChild(th);
//                 }
//             })
//             output.appendChild(tr);
 
//             //extract row data:
//             jsonData.table.rows.forEach((rowData) => {
//                 const row = {};
//                 colz.forEach((ele, ind) => {
//                     row[ele] = (rowData.c[ind] != null) ? rowData.c[ind].v : '';
//                 })
//                 data.push(row);
//             })
//             processRows(data);
//         })
// }
  
// function processRows(json) {
//     json.forEach((row) => {
 
//         const tr = document.createElement('tr');
//         const keys = Object.keys(row);
     
//         keys.forEach((key) => {
//             const td = document.createElement('td');
//             td.textContent = row[key];
//             tr.appendChild(td);
//         })
//         output.appendChild(tr);
//     })
// }



