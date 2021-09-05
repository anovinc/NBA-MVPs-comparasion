
const width = 500;
const height = 450;
const margin = {top: 15, bottom: 15, left: 10, right: 10};
//funckije za postavaljnje SVG elemenata u div, preuzeto sa službenog priručnika za laboratorijske vježbe
let prikazPrvi = d3.select(".statsOne").append("svg")
                           .attr("width",width)
                           .attr("height",height-margin.top-margin.bottom)
                           .attr("viewBox",[0,0,width,height])


let prikazDrugi = d3.select(".statsTwo").append("svg")
                            .attr("width",width)
                            .attr("height",height-margin.top-margin.bottom)
                            .attr("viewBox",[0,0,width,height])

//funckije za stvaranje grafa , preuzeto sa službenog priručnika za laboratorijske vježbe te https://blog.risingstack.com/d3-js-tutorial-bar-charts-with-javascript/ , http://daydreamingnumbers.com/learn-d3/bar-charts-in-d3/
//https://bl.ocks.org/hrecht/f84012ee860cb4da66331f18d588eee3
//https://bl.ocks.org/caravinden/eb0e5a2b38c8815919290fa838c6b63b
//https://www.youtube.com/watch?v=BDpBAFvdjYo&t=658s&ab_channel=KrisFoster
//https://www.youtube.com/watch?v=NlBt-7PuaLk&ab_channel=CurranKelleher
//https://www.youtube.com/watch?v=C4t6qfHZ6Tw&t=633s&ab_channel=freeCodeCamp.org
function renderFirstStats(data) {
    
    const xScale = d3.scaleLinear()
                    .domain([0,40])
                    .range([width-80, 0]);
    const yScale = d3.scaleBand()
    .range([0, height])
    .padding(0.4)
    .domain(data.map(function (d) {
        return d.Name;
    }));
    
    const g = prikazPrvi.append("g")
    g.append("g").call(d3.axisRight(yScale))
        .attr("transform","translate(430,0)")
        .attr("class","axis")

    g.selectAll("rect").data(data)
        .enter().append("rect")
        .transition()
        .duration(700)
        .attr("fill","royalblue")
        .attr("x",function(d) {return xScale(d.value)}) //https://www.youtube.com/watch?v=NlBt-7PuaLk&ab_channel=CurranKelleher
            .attr("y",function(d){
                return yScale(d.Name);
            })
            .attr("width",function(d) {
                return xScale(0)-xScale(d.value);
            })
            .attr("height", yScale.bandwidth())

    g.selectAll("rect")
    .on('mouseover', function (d, i) {
        d3.select(this).transition() ///https://www.d3-graph-gallery.com/graph/barplot_animation_start.html
        .duration('50')
        .attr('opacity', '.75')
            console.log(i)
			console.log(d)
    })
             
            .on('mouseout', function (d, i) {
                d3.select(this).transition()
                     .duration('50')
                     .attr('opacity', '1')
                    })

            var texts = prikazPrvi.selectAll(".myTexts")
            .data(data)
            .enter()
            .append("text")
            .attr("x", function(d){ return xScale(d.value)-60})
            .attr("y", function(d) {return yScale(d.Name)+30})
            .text(function(d) {return d.value})
            .attr("class","value_text");
            
}

function renderSecondStats(data) {
    const xScale = d3.scaleLinear()
                    .domain([0,35])
                    .range([0, width-80]);


    const yScale = d3.scaleBand()
    .range([0, height])
    .padding(0.4)
    .domain(data.map(function (d) {
        return d.Name;
    }));

    const g = prikazDrugi.append("g")
    g.append("g").call(d3.axisLeft(yScale))//https://www.youtube.com/watch?v=NlBt-7PuaLk&ab_channel=CurranKelleher
    .attr("transform","translate(30,0)")
        .attr("class","axis")


    g.selectAll("rect").data(data)
        .enter().append("rect")
        .transition()
        .duration(700)///https://www.d3-graph-gallery.com/graph/barplot_animation_start.html
        .attr("fill","#EBA11B")
            .attr("x",40)
            .attr("y",function(d){
                return yScale(d.Name);
            })
            .attr("width",function(d) {
                return xScale(d.value);
            })
            .attr("height", yScale.bandwidth())
      g.selectAll("rect")
           .on('mouseover', function (d, i) {
                d3.select(this).transition()
                .duration('50')
                .attr('opacity', '.75')
                    console.log(i)
                    console.log(d)
                  
            })
                     
                    .on('mouseout', function (d, i) {
                        d3.select(this).transition()
                             .duration('50')
                             .attr('opacity', '1')
                            })        
             
    
    var texts = prikazDrugi.selectAll(".myTexts")
                    .data(data)
                    .enter()
                    .append("text");

texts.attr("x", function(d){ return xScale(d.value)+50})
    .attr("y",function(d){return yScale(d.Name)+30})  
    .text(function(d) {return d.value})
    .attr("class","value_text")
            
};
//funkcije za brisanje podataka iz grafa prije postavaljanja novih 
function clearData() {
    prikazPrvi.selectAll("g").remove();
    prikazPrvi.selectAll("text").remove();
}
function clearSecondData() {
    prikazDrugi.selectAll("g").remove();
    prikazDrugi.selectAll("text").remove();

}



