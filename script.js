let enter_btn = document.getElementById("enter-btn");


enter_btn.addEventListener("click", function () {
    getInput();
});

document.getElementById('graph').addEventListener('change', toggle);


// input 234, 1321,5345,3424,34324 
// 234, 1321,5345,3424,34324 ; 234, 1321,5345,3424,34324 
// or 123 231 424 234

function getInput(){ 
  let data = document.getElementById("data").value;
  let type = document.getElementById("graph").value;
  let data1 = document.getElementById("data1").value;

  dataArr = get_array(data);

  if(data.length > 0  || data1.length > 0 ){

    if(type == "pie"){
      graphPie(dataArr);
      
    }else{
      find_max(dataArr,"max");
      find_min(dataArr,"min");
      find_average(dataArr,"avg");
      get_total(dataArr,"total");
  
      graph(dataArr,type);
      if(data1.length > 0 ){
       
        let datab = get_array(data1);

        graphPie(data1);
        find_max(datab, "max1");
        find_min(datab, "min1");
        find_average(datab,"avg1");
        get_total(datab,"total1");
        
        graphSets(dataArr, datab, type);
      }
    }
    
  }else alert("Please insert data. ")

  //SWTICH CASE for type of graph
  
}

function toggle(ev) {
  // get the input elements, and convert the results into an array
  //var inputs = Array.prototype.slice.call(document.querySelectorAll('input'));
  
  // clear values from all inputs
  // (that way the user doesn't accidentally enter a value, switch options, and upload unwanted data)
  //inputs.forEach(input => input.value = '');

  // hide/display fields depending on which option is selected
  // #name is always displayed
  switch (ev.target.value) {
    case 'pie':
      //let elemn = document.getElementById("data1");
      //console.log( elemn.style);
     
      document.getElementById('data1').style.display = 'none';
   
      break;
   /*  case 'Instructor':
      document.querySelector('#rank').style.display = 'block';
      document.querySelector('#dept').style.display = 'block';
      document.querySelector('#gpa').style.display = 'none';
      break; */
  }
}





function get_total(array,element){
  total = array.reduce((a, b) => a + b, 0)
  document.getElementById(element).innerHTML = `Total is `+ total;
}

function get_array(array){
  new_array = array.split(",").map(Number);
  return new_array;
}

function find_max(dataArr, element){
  let higest = Math.max(...dataArr); 
  console.log(element, higest);
  document.getElementById(element).innerHTML = `Higest amount is `+ higest;
}

function find_min(dataArr, element){
  lowest = Math.min(...dataArr); 
  document.getElementById(element).innerHTML = `Lowest amount is `+ lowest;
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
    //series: dataA,
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
    //colors: ['#246dec'],
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

function graphPie(dataA) {
  var options = {
    series: dataA,
    chart: {
    width: 380,
    type: 'pie',
  },


  };
  document.querySelector('.bar-chart').innerHTML = ``;
  var chart = new ApexCharts(document.querySelector(".bar-chart"), options);
  chart.render(); 

}
