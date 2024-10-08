let enter_btn = document.getElementById("enter-btn");


enter_btn.addEventListener("click", function () {
    getInput();
});


// input 234, 1321,5345,3424,34324 
234, 1321,5345,3424,34324 ; 234, 1321,5345,3424,34324 
// or 123 231 424 234


function getInput( ){ 
  let data = document.getElementById("data").value;
  let type = document.getElementById("graph").value;
  dataArr = data.split(",").map(Number);
  find_max(dataArr);
  find_min(dataArr);
  find_average(dataArr);
  graph(dataArr,type);

}

function find_max(dataArr){
  higest = Math.max(...dataArr); 
  document.getElementById("max").innerHTML = `Max is `+ higest;
}

function find_min(dataArr){
  lowest = Math.min(...dataArr); 
  document.getElementById("min").innerHTML = `Min is `+ lowest;
}

function find_average(dataArr) {
  var total = 0;
  for(var i = 0; i < dataArr.length; i++) {
      total += dataArr[i];
  }
  var avg = total / dataArr.length;
  document.getElementById("avg").innerHTML = `Avg is `+ avg;
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


