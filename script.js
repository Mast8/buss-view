let enter_btn = document.getElementById("enter-btn");


enter_btn.addEventListener("click", function () {
    getInput();
});

document.getElementById('graph').addEventListener('change', toggle);

// input 234, 1321,5345,3424,34324 
// 20, 10,300,40,50

function getInput(){ 
  let data = document.getElementById("data").value;
  let type = document.getElementById("graph").value;
  let data1 = document.getElementById("data1").value;

  dataArr = get_array(data);

  if(data.length > 0  || data1.length > 0 ){

      find_max(dataArr,"max");
      find_min(dataArr,"min");
      find_average(dataArr,"avg");
      show_total(dataArr,"total");

    if(type == "pie"){
      graphPie(dataArr);
      
    }else{
  
      graph(dataArr,type);
      if(data1.length > 0 ){
        
        let datab = get_array(data1);
        
        find_max(datab, "max1");
        find_min(datab, "min1");
        find_average(datab,"avg1");
        show_total(datab,"total1");

        get_dif(dataArr, datab);
        graphSets(dataArr, datab, type);
      }
    }
    
  }else alert("Please insert data. ")

  //SWTICH CASE for type of graph
  
}

function toggle(ev) {
 
  switch (ev.target.value) {
    case 'pie':

      document.getElementById('data1').style.display = 'none';
      document.getElementById('stats1').style.display = 'none';
      break;

    default : 
      document.getElementById('data1').style.display = 'block';
      document.getElementById('stats1').style.display = 'block';
   /*  case 'Instructor':
      document.querySelector('#rank').style.display = 'block';
      document.querySelector('#dept').style.display = 'block';
      document.querySelector('#gpa').style.display = 'none';
      break; */
  }
}

function get_total(array){
  return total = array.reduce((a, b) => a + b, 0);
}

function show_total(array,element){
  total = get_total(array);
  document.getElementById(element).innerHTML = `Total is `+ total;
}

//function get_total(array,element){

function get_array(array){
  //replace blank space
  const arrayN = array.split(' ').join('');
  new_array = arrayN.split(",").map(Number) ;

  return new_array;
}

function find_max(dataArr, element){
  let higest = Math.max(...dataArr); 
  document.getElementById(element).innerHTML = `Higest amount is `+ higest;
}

function find_min(dataArr, element){
  lowest = Math.min(...dataArr); 
  document.getElementById(element).innerHTML = `Lowest amount is `+ lowest;
}

function get_dif(array1 , array2){
  let total = get_total(array1);
  let total1 = get_total(array2);
  //add absolute value
  const dif = Math.abs((total - total1)) ; 
  if(total > total1){
    document.getElementById("dif").innerHTML = `Difference is `+ dif;
    document.querySelector('.dif1').innerHTML = ``;
  }
  else {
    document.getElementById("dif1").innerHTML = `Difference is `+ dif;
    document.querySelector('.dif').innerHTML = ``;
  }
}

function find_average(dataArr,element) {
  var total = 0;
  for(var i = 0; i < dataArr.length; i++) {
      total += dataArr[i];
  }
  var avg = total / dataArr.length;
  document.getElementById(element).innerHTML = `Average is `+ avg;
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
  colors = ['#246dec', '#941010'];
 
  const barChartOptions = {
    
    series: [
      {
        data: dataA,
        name: "First",
      },
      {
        data: dataB,
        name: "Second",
      }

    ],
    chart: {
      type: graph,
      height: 350,
      toolbar: {
        show: false,
      },
    },
    colors: colors,
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

function graphPie(dataA) {

  const options = {
    series: dataA,
    chart: {
      width: 380,
      type: 'pie',
    },

  };
  document.querySelector('.bar-chart').innerHTML = ``;
  const chart = new ApexCharts(document.querySelector(".bar-chart"), options);
  chart.render(); 

}
