let enter_btn = document.getElementById("enter-btn");


enter_btn.addEventListener("click", function () {
    getInput();
});


// input 234, 1321,5345,3424,34324 
// 234, 1321,5345,3424,34324 ; 234, 1321,5345,3424,34324 
// or 123 231 424 234

function getInput(){ 
  let data = document.getElementById("data").value;
  let type = document.getElementById("graph").value;
  let data1 = document.getElementById("data1").value;

  dataArr = get_array(data);
  //dataArr = data.split(",").map(Number);

  find_max(dataArr,"max");
  find_min(dataArr);
  find_average(dataArr);
  get_total(dataArr);

  graph(dataArr,type);
  if(data1.length>= 1 ){
    let datab = get_array(data1);
    find_max(datab, "max1");
    //get_total(data1)
    
    
    graphSets(dataArr, datab, type);
  }

}



function get_total(array){
  total = array.reduce((a, b) => a + b, 0)
  document.getElementById("total").innerHTML = `Total is `+ total;
}

function get_array(array){
  new_array = array.split(",").map(Number);
  return new_array;
}

function find_max(dataArr, element){
  let higest = Math.max(...dataArr); 
  console.log(element, higest);
  document.getElementById(element).innerHTML = `Max is `+ higest;
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
      }
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

function graphSets(dataA,dataB ,graph){
  
  const barChartOptions = {
    
    series: [
      {
        data: dataA,
        name: "First"
      },
      {
        data: dataB,
         name: "Second"
      }

    ],
    chart: {
      type: graph,
      height: 350,
      toolbar: {
        show: false,
      },
    },
    colors: ['#246dec', '#941010'],
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
