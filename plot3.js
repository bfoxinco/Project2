d3.json("datesfinal.json").then((incomingData) => {
    //console.log(incomingData)
    
    let places = incomingData.map(x => x["Places"]);
    let crime_rate = incomingData.map(y => y["crime_rate_for_county_violent"]);
    let prop_crime = incomingData.map(z => z["Crime_rate_for_county_property"])  
    console.log(crime_rate)
    console.log(places)
    console.log(prop_crime)

    var trace_1 = {
      x: places,
      y: crime_rate,
      text: places,
      name: "Violent",
      marker: {color: 'rgb(255, 0, 0)'},
      type: "bar"
    }
  
    var trace_2 = {
      x: places,
      y: prop_crime,
      text: places,
      name: "Property",
      marker: {color: 'rgb(0, 255, 0)'},
      type: "bar"
    }
  

    var Data = [trace_1, trace_2]

    
    
    // Define the plot layout
    var layout = {
      title: "Violent Crime vs Property Crime Rate",
      xaxis: {tickfont: {
        size: 10,
        color: 'rgb(107, 107, 107)'}},
      yaxis: {
      titlefont: {
        size: 16,
        color: 'rgb(107, 107, 107)'
      },
      tickfont: {
        size: 14,
        color: 'rgb(107, 107, 107)'
      }
    },
    legend: {
      x: 0,
      y: 1.0,
      bgcolor: 'D0D0CA',
      bordercolor: 'FFFF00'
    },
    barmode: 'group',
    bargap: 0.5,
    bargroupgap: 0.01
    }
        
    
  
    Plotly.newPlot("crime_bar_plot", Data, layout)  
  
  
  
  
  });