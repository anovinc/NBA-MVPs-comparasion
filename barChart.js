const widthTwo = 400;
const heightTwo = 350;
const marginTwo = {top: 15, bottom: 15, left: 10, right: 10};
var outerRadius = 120;
var innerRadius = 0;


//iduće funkcije služe za stvaranje SVG-a unutar div elementa te su one preuzete s priručnika za laboratorijske vježbe iz kolegija Vizualizacija podataka

let cakeOne = d3.select(".pieOne").append("svg")
                           .attr("width",widthTwo)
                           .attr("height",heightTwo-marginTwo.top-marginTwo.bottom)
                           .attr("viewBox",[0,0,widthTwo,heightTwo])


let cakeTwo = d3.select(".pieTwo").append("svg")
                            .attr("width",widthTwo)
                            .attr("height",heightTwo-marginTwo.top-marginTwo.bottom)
                            .attr("viewBox",[0,0,widthTwo,heightTwo])

let cakeThree = d3.select(".pieThree").append("svg")
                            .attr("width",widthTwo)
                            .attr("height",heightTwo-marginTwo.top-marginTwo.bottom)
                            .attr("viewBox",[0,0,widthTwo,heightTwo])

let cakeFour = d3.select(".pieFour").append("svg")
                            .attr("width",widthTwo)
                            .attr("height",heightTwo-marginTwo.top-marginTwo.bottom)
                            .attr("viewBox",[0,0,widthTwo,heightTwo])
 
 
 let cakeFive = d3.select(".pieFive").append("svg")
                             .attr("width",widthTwo)
                             .attr("height",heightTwo-marginTwo.top-marginTwo.bottom)
                             .attr("viewBox",[0,0,widthTwo,heightTwo])
 
 let cakeSix = d3.select(".pieSix").append("svg")
                             .attr("width",widthTwo)
                             .attr("height",heightTwo-marginTwo.top-marginTwo.bottom)
                             .attr("viewBox",[0,0,widthTwo,heightTwo])  

//idućih šest funkcija služe za stvaranje pie chartova te su preuzete i korištene u službenom priručniku za laboratorijske vježbe iz kolegija Vizualizacija podataka
function showFirstDataFirstCake(data) {
  
    var color = d3.scaleOrdinal(["ROYALBLUE","#E1E2E5"])
                     
                        
    var arc = d3.arc()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius);

  
    var pie = d3.pie()
      .value(function(d) { return d.value; });
    var pieArcs = cakeOne.selectAll("g.pie")
      .data(pie(data))
      .enter()
      .append("g")
      .attr("class", "pie")
      .attr("transform", "translate(" + (width / 2) + ", " + (height / 2) +")");
    pieArcs.append("path")
      .attr("fill", function(d, i) {return color(i)})
      .attr("d", arc);
      pieArcs.append("text")
      .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; }) .attr("text-anchor", "middle")
      .text(function(d) { return d.value+"%"; })
      .attr("class","pieChartTxt")
      //funckija koja se poziva prelaskom miša preko grafa, preuzeto s :https://www.tutorialsteacher.com/d3js/animated-bar-chart-d3 i https://perials.github.io/responsive-bar-chart-with-d3/
  pieArcs.on("mouseover", function(d,i){
      d3.select(this)
      pieArcs.selectAll("text").remove()
      pieArcs.append("text")
      .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; }) .attr("text-anchor", "middle")
      .text(function(d,i) { return d.data.Name; })
      .attr("font-size","10px")
      .attr("class","mouseout-txt")


    })
    pieArcs.on("mouseout",function(d) {
      d3.select(this).transition()
      .duration(200)
      pieArcs.selectAll("text")
      .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; }) .attr("text-anchor", "middle")
      .text(function(d,i) { return +d.value+"%"; })
      .attr("class","pieChartTxt");
      
   
    })
}

function showFirstDataSecondCake(data) {
  var color = d3.scaleOrdinal(["ROYALBLUE","#E1E2E5"])
                                           
  var arc = d3.arc()
  .innerRadius(innerRadius)
  .outerRadius(outerRadius);

  

    var pie = d3.pie()
      .value(function(d) { return d.value; });
    var pieArcs = cakeTwo.selectAll("g.pie")
      .data(pie(data))
      .enter()
      .append("g")
      .attr("class", "pie")
      .attr("transform", "translate(" + (width / 2) + ", " + (height / 2) +")");
    pieArcs.append("path")
      .attr("fill", function(d, i) {return color(i)})
      .attr("d", arc);
      pieArcs.append("text")
      .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; }) .attr("text-anchor", "middle")
      .text(function(d) { return d.value+"%"; })
      .attr("class","pieChartTxt")
            //funckija koja se poziva prelaskom miša preko grafa, preuzeto s :https://www.tutorialsteacher.com/d3js/animated-bar-chart-d3 i https://perials.github.io/responsive-bar-chart-with-d3/

  pieArcs.on("mouseover", function(d,i){
      d3.select(this)
      pieArcs.selectAll("text").remove()
      pieArcs.append("text")
      .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; }) .attr("text-anchor", "middle")
      .text(function(d,i) { return d.data.Name; })
      .attr("font-size","11px")
      .attr("class","mouseout-txt")

    })
    pieArcs.on("mouseout",function(d) {
      d3.select(this).transition()
      .duration(200)
      pieArcs.selectAll("text")
      .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; }) .attr("text-anchor", "middle")
      .text(function(d,i) { return +d.value+"%"; })
      .attr("class","pieChartTxt")
      .attr("font-size","24px")

      
   
    })

}


function showFirstDataThirdCake(data) {
    var color = d3.scaleOrdinal(["ROYALBLUE","#E1E2E5"])
                     
                        
    var arc = d3.arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius);

  

    var pie = d3.pie()
      .value(function(d) { return d.value; });
    var pieArcs = cakeThree.selectAll("g.pie") 
      .data(pie(data))
      .enter()
      .append("g")
      .attr("class", "pie")
      .attr("transform", "translate(" + (width / 2) + ", " + (height / 2) +")");
    pieArcs.append("path")
      .attr("fill", function(d, i) {return color(i)})
      .attr("d", arc);
      pieArcs.append("text")
      .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; }) .attr("text-anchor", "middle")
      .text(function(d) { return d.value+"%"; })
      .attr("class","pieChartTxt")
            //funckija koja se poziva prelaskom miša preko grafa, preuzeto s :https://www.tutorialsteacher.com/d3js/animated-bar-chart-d3 i https://perials.github.io/responsive-bar-chart-with-d3/

  pieArcs.on("mouseover", function(d,i){
      d3.select(this)
      pieArcs.selectAll("text").remove()
      pieArcs.append("text")
      .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; }) .attr("text-anchor", "middle")
      .text(function(d,i) { return d.data.Name; })
      .attr("font-size","11px")
      .attr("class","mouseout-txt");


    })
    pieArcs.on("mouseout",function(d) {
      d3.select(this).transition()
      .duration(200)
      pieArcs.selectAll("text")
      .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; }) .attr("text-anchor", "middle")
      .text(function(d,i) { return +d.value+"%"; })
      .attr("class","pieChartTxt")
      .attr("font-size","24px")

      
   
    })

}

function showSecondDataFirstCake(data) {
  
    var color = d3.scaleOrdinal(["#EBA11B","#E1E2E5"])
                     
                        
    var arc = d3.arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius);

  

    var pie = d3.pie()
      .value(function(d) { return d.value; });
    var pieArcs = cakeFour.selectAll("g.pie")
      .data(pie(data))
      .enter()
      .append("g")
      .attr("class", "pie")
      .attr("transform", "translate(" + (width / 2) + ", " + (height / 2) +")");
    pieArcs.append("path")
      .attr("fill", function(d, i) {return color(i)})
      .attr("d", arc);
      pieArcs.append("text")
      .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; }) .attr("text-anchor", "middle")
      .text(function(d) { return d.value+"%"; })
      .attr("class","pieChartTxt")
      //funckija koja se poziva prelaskom miša preko grafa, preuzeto s :https://www.tutorialsteacher.com/d3js/animated-bar-chart-d3 i https://perials.github.io/responsive-bar-chart-with-d3/
  pieArcs.on("mouseover", function(d,i){
      d3.select(this)
      pieArcs.selectAll("text").remove()
      pieArcs.append("text")
      .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; }) .attr("text-anchor", "middle")
      .text(function(d,i) { return d.data.Name; })
      .attr("font-size","11px")
      .attr("class","mouseout-txt")


    })
    pieArcs.on("mouseout",function(d) {
      d3.select(this).transition()
      .duration(200)
      pieArcs.selectAll("text")
      .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; }) .attr("text-anchor", "middle")
      .text(function(d,i) { return +d.value+"%"; })
      .attr("class","pieChartTxt")
      .attr("font-size","24px")

      
   
    })
  


}

function showSecondDataSecondCake(data) {
  var color = d3.scaleOrdinal(["#EBA11B","#E1E2E5"])
                     
                        
  var arc = d3.arc()
  .innerRadius(innerRadius)
  .outerRadius(outerRadius);

  

  var pie = d3.pie()
    .value(function(d) { return d.value; });
  var pieArcs = cakeFive.selectAll("g.pie")
    .data(pie(data))
    .enter()
    .append("g")
    .attr("class", "pie")
    .attr("transform", "translate(" + (width / 2) + ", " + (height / 2) +")");
  pieArcs.append("path")
    .attr("fill", function(d, i) {return color(i)})
    .attr("d", arc);
    pieArcs.append("text")
    .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; }) .attr("text-anchor", "middle")
    .text(function(d) { return d.value+"%"; })
    .attr("class","pieChartTxt")
    //funckija koja se poziva prelaskom miša preko grafa, preuzeto s :https://www.tutorialsteacher.com/d3js/animated-bar-chart-d3 i https://perials.github.io/responsive-bar-chart-with-d3/
pieArcs.on("mouseover", function(d,i){
    d3.select(this)
    pieArcs.selectAll("text").remove()
    pieArcs.append("text")
    .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; }) .attr("text-anchor", "middle")
    .text(function(d,i) { return d.data.Name; })
    .attr("font-size","11px")
    .attr("class","mouseout-txt")


  })
  pieArcs.on("mouseout",function(d) {
    d3.select(this).transition()
    .duration(200)
    pieArcs.selectAll("text")
    .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; }) .attr("text-anchor", "middle")
    .text(function(d,i) { return +d.value+"%"; })
    .attr("font-size","24px")
    .attr("class","pieChartTxt");


    
 
  })


}


function showSecondDataThirdCake(data) {
  var color = d3.scaleOrdinal(["#EBA11B","#E1E2E5"]);                     
  const tooldiv = d3.select('#chartArea')
						  .append('div')
						  .style('visibility','hidden')
						  .style('position','absolute')
						  .style('background-color','red')

  var arc = d3.arc()
  .innerRadius(innerRadius)
  .outerRadius(outerRadius);

  

    var pie = d3.pie()
      .value(function(d) { return d.value; });
    var pieArcs = cakeSix.selectAll("g.pie")
      .data(pie(data))
      .enter()
      .append("g")
      .attr("class", "pie")
      .attr("transform", "translate(" + (width / 2) + ", " + (height / 2) +")");
    pieArcs.append("path")
      .attr("fill", function(d, i) {return color(i)})
      .attr("d", arc)
    pieArcs.append("text")
        .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; }) .attr("text-anchor", "middle")
        .text(function(d) { return d.value+"%"; })
        .attr("class","pieChartTxt")
        //funckija koja se poziva prelaskom miša preko grafa, preuzeto s :https://www.tutorialsteacher.com/d3js/animated-bar-chart-d3 i https://perials.github.io/responsive-bar-chart-with-d3/
    pieArcs.on("mouseover", function(d,i){
        d3.select(this)
        pieArcs.selectAll("text").remove()
        pieArcs.append("text")
        .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; }) .attr("text-anchor", "middle")
        .text(function(d,i) { return d.data.Name; })
        .attr("font-size","11px")
        .attr("class","mouseout-txt")

      })
      pieArcs.on("mouseout",function(d) {
        d3.select(this).transition()
        .duration(200)
        pieArcs.selectAll("text")
        .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")"; }) .attr("text-anchor", "middle")
        .text(function(d,i) { return +d.value+"%"; })
        .attr("font-size","24px")
        .attr("class","pieChartTxt")
     
      })
    
  
   
 
}

//funkcije za brisanje podataka prije postavljanja novih podataka na grafove 
function clearDataCake() {
  cakeOne.selectAll("g.pie").remove();
  cakeTwo.selectAll("g.pie").remove();
  cakeThree.selectAll("g.pie").remove()
}
function clearSecondDataCake() {
  cakeFour.selectAll("g.pie").remove();
  cakeFive.selectAll("g.pie").remove();
  cakeSix.selectAll("g.pie").remove()

}