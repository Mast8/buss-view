let enter_btn = document.getElementById("enter-btn");


enter_btn.addEventListener("click", function () {
    getInput();
});


// input 234, 1321,5345,3424,34324 
// or 123 231 424 234


function getInput( ){ 
  let data = document.getElementById("data").value;
  let type = document.getElementById("graph").value;
  dataArr = data.split(",");
  console.log(dataArr);
  findmax(dataArr)
  graph(dataArr,type);

}

function findmax(dataArr){
  //let max = document.getElementById("max");
  higest = Math.max(...dataArr);
  document.getElementById("max").innerHTML = `max is `+ higest;
}

//charts
function graph(dataA,graph){
  
  const barChartOptions = {
    
    series: [
      {
        data: dataA,
      },
    ],
    chart: {
      type: graph,
      height: 350,
      toolbar: {
        show: false,
      },
    },
    colors: ['#246dec'],
    plotOptions: {
      bar: {
        distributed: true,
        borderRadius: 4,
        horizontal: false,
        columnWidth: '40%',
      },
    },
    dataLabels: {
      enabled: true,
    },
    legend: {
      show: true,
    },
    xaxis: {
      //categories: [flip[0], flip[1]],
    },
    yaxis: {
      
    },
  };
  document.querySelector('.bar-chart').innerHTML = ``;
  const barChart = new ApexCharts(
    document.querySelector('.bar-chart'),
    barChartOptions
  );

  barChart.render();
}


