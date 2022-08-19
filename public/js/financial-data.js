const startDate ="2022-01-01";
const endDate =  "2022-07-01";
let dates 
let prices
const apiURL = `http://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}`;




axios
  .get(apiURL)
  .then(responseFromAPI => {
    dates = Object.keys(responseFromAPI.data.bpi);
    prices = Object.values(responseFromAPI.data.bpi);
    console.log('API data', responseFromAPI.data.bpi) 
    console.log(`${dates} ${prices}`)
  
  printTheChart()
  //clears the old chart to draw a new one
  let chartStatus = Chart.getChart("my-chart");
  if (chartStatus != undefined) {
    chartStatus.destroy();
  }
})
  .catch(err => console.log('Error while getting the data: ', err));


  function printTheChart() {
    const ctx = document.getElementById('my-chart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: dates,
          datasets: [
            {
              label: "Bitcoin Price History",
              data: prices,
              backgroundColor: ["rgba(75, 192, 192, .5)"],
              borderColor: ["rgb(75, 192, 192)"],
              borderWidth: 3,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });

    };
 


// let dateFromElement = document.getElementById("datefrom")

// dateFromElement.addEventListener("change", ()=>{
//     fromDate = dateFromElement
// getData();
// })












//Event listeners
// startInput.addEventListener('change', () => {
//     startDate = startInput.value; 
//     update();
// });

// endInput.addEventListener('change', () => {
//     endDate = endInput.value;
//     update();
// })

// function update(){
//     axios
//     .get(`${apiURL}?start=${startDate}&end=${endDate}`)
//     .then((response) => {

//         //Getting dates & values
//         let dates = Object.keys(responseFromAPI.data.bpi);
//         let prices = Object.values(responseFromAPI.data.bpi);

//         //Printing the chart 
//         printChart(dates, prices);
//     })
//     .catch(err => console.log(err));
// }

