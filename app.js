function showFirstOption() {
    document.querySelector(".dropdown-content-first").classList.toggle("dropdown-content-show");
}

function showSecondOption() {
    document.querySelector(".dropdown-content-second").classList.toggle("dropdown-content-show");
}

function showVersus() {
    document.querySelector(".versus").innerHTML = '<img src="images/versus.png">'
}

var buttonOne = document.querySelector(".dropBtn.First").addEventListener("click",showFirstOption);
var buttonTwo = document.querySelector(".dropBtn.Second").addEventListener("click",showSecondOption);

var options = document.querySelectorAll(".option");
var count = options.length;

for(var i = 0; i < count; i++){
    options[i].addEventListener("click",showVersus);
}


//Choosing

document.querySelector(".option.RW").addEventListener("click",function(){
    clearData();
    clearDataCake()

    document.querySelector(".firstChoice").innerHTML = document.querySelector(".option.RW").value;
    document.querySelector(".imageDivOne").innerHTML = '<img src="images/westbrook.png">' 
    document.querySelector(".dropdown-content-first").classList.toggle("dropdown-content-show");
    d3.json("json/rw.json", function(data) {
        console.log(data)
        renderFirstStats(data);
    })
    d3.json("json/pieChart/rwPie.json",function(data) {
        showFirstDataFirstCake(data)
    })
    d3.json("json/pieChart/rw3PPie.json",function(data) {
        showFirstDataSecondCake(data)
    })
    d3.json("json/pieChart/rwFTPie.json",function(data) {
        showFirstDataThirdCake(data)
        console.log(data)

    })
    document.querySelector(".statsOne").classList.add("statsOne-show");
    document.querySelector(".pieOne").classList.add("statsOne-show");
    document.querySelector(".pieTwo").classList.add("statsOne-show");
    document.querySelector(".pieThree").classList.add("statsOne-show");



});

document.querySelector(".option.GA").addEventListener("click",function(){
    clearData();
    clearDataCake()
    document.querySelector(".firstChoice").innerHTML=document.querySelector(".option.GA").value;  
    document.querySelector(".imageDivOne").innerHTML = '<img src="images/giannis.png">'    
    document.querySelector(".dropdown-content-first").classList.toggle("dropdown-content-show");
    d3.json("json/ga20.json", function(data) {
        console.log(data)
        renderFirstStats(data);
    })
    d3.json("json/pieChart/ga20FG.json",function(data) {
        showFirstDataFirstCake(data)
    })
    d3.json("json/pieChart/ga203P.json",function(data) {
        showFirstDataSecondCake(data)
    })
    d3.json("json/pieChart/ga20FT.json",function(data) {
        showFirstDataThirdCake(data)
        console.log(data)

    })
    document.querySelector(".statsOne").classList.add("statsOne-show");
    document.querySelector(".pieOne").classList.add("statsOne-show");
    document.querySelector(".pieTwo").classList.add("statsOne-show");
    document.querySelector(".pieThree").classList.add("statsOne-show");


});

document.querySelector(".option.GA19").addEventListener("click",function(){
    clearData();
    clearDataCake()
    document.querySelector(".firstChoice").innerHTML=document.querySelector(".option.GA19").value;  
    document.querySelector(".imageDivOne").innerHTML = '<img src="images/giannis.png">'    
    document.querySelector(".dropdown-content-first").classList.toggle("dropdown-content-show");
    d3.json("json/ga19.json", function(data) {
        console.log(data)
        renderFirstStats(data);
    })
    d3.json("json/pieChart/ga19FG.json",function(data) {
        showFirstDataFirstCake(data)
    })
    d3.json("json/pieChart/ga193P.json",function(data) {
        showFirstDataSecondCake(data)
    })
    d3.json("json/pieChart/ga19FT.json",function(data) {
        showFirstDataThirdCake(data)
        console.log(data)

    })
    document.querySelector(".statsOne").classList.add("statsOne-show");
    document.querySelector(".pieOne").classList.add("statsOne-show");
    document.querySelector(".pieTwo").classList.add("statsOne-show");
    document.querySelector(".pieThree").classList.add("statsOne-show");

});

document.querySelector(".option.JH").addEventListener("click",function(){
    clearData();
    clearDataCake()
    document.querySelector(".firstChoice").innerHTML=document.querySelector(".option.JH").value;  
    document.querySelector(".imageDivOne").innerHTML = '<img src="images/harden.png">'    
    document.querySelector(".dropdown-content-first").classList.toggle("dropdown-content-show");
    d3.json("json/jh.json", function(data) {
        console.log(data)
        renderFirstStats(data);
    })
    d3.json("json/pieChart/jhFG.json",function(data) {
        showFirstDataFirstCake(data)
    })
    d3.json("json/pieChart/jh3P.json",function(data) {
        showFirstDataSecondCake(data)
    })
    d3.json("json/pieChart/jhFT.json",function(data) {
        showFirstDataThirdCake(data)
        console.log(data)

    })
    document.querySelector(".statsOne").classList.add("statsOne-show");
    document.querySelector(".pieOne").classList.add("statsOne-show");
    document.querySelector(".pieTwo").classList.add("statsOne-show");
    document.querySelector(".pieThree").classList.add("statsOne-show");
});

document.querySelector(".option.KD").addEventListener("click",function(){
    clearData();
    clearDataCake()
    document.querySelector(".firstChoice").innerHTML=document.querySelector(".option.KD").value;  
    document.querySelector(".imageDivOne").innerHTML = '<img src="images/durant.png">'    
    document.querySelector(".dropdown-content-first").classList.toggle("dropdown-content-show");
    d3.json("json/kd.json", function(data) {
        console.log(data)
        renderFirstStats(data);
    })
    d3.json("json/pieChart/kdFG.json",function(data) {
        showFirstDataFirstCake(data)
    })
    d3.json("json/pieChart/kd3P.json",function(data) {
        showFirstDataSecondCake(data)
    })
    d3.json("json/pieChart/kdFT.json",function(data) {
        showFirstDataThirdCake(data)
        console.log(data)

    })
    document.querySelector(".statsOne").classList.add("statsOne-show");
    document.querySelector(".pieOne").classList.add("statsOne-show");
    document.querySelector(".pieTwo").classList.add("statsOne-show");
    document.querySelector(".pieThree").classList.add("statsOne-show");

});

document.querySelector(".option.SC16").addEventListener("click",function(){
    clearData();
    clearDataCake()
    document.querySelector(".firstChoice").innerHTML=document.querySelector(".option.SC16").value;  
    document.querySelector(".imageDivOne").innerHTML = '<img src="images/curry.png">'    
    document.querySelector(".dropdown-content-first").classList.toggle("dropdown-content-show");
    d3.json("json/sc16.json", function(data) {
        console.log(data)
        renderFirstStats(data);
    })
    d3.json("json/pieChart/sc16FG.json",function(data) {
        showFirstDataFirstCake(data)
    })
    d3.json("json/pieChart/sc163P.json",function(data) {
        showFirstDataSecondCake(data)
    })
    d3.json("json/pieChart/sc16FT.json",function(data) {
        showFirstDataThirdCake(data)
        console.log(data)

    })
    document.querySelector(".statsOne").classList.add("statsOne-show");
    document.querySelector(".pieOne").classList.add("statsOne-show");
    document.querySelector(".pieTwo").classList.add("statsOne-show");
    document.querySelector(".pieThree").classList.add("statsOne-show");
});

document.querySelector(".option.SC15").addEventListener("click",function(){
    clearData();
    clearDataCake()
    document.querySelector(".firstChoice").innerHTML=document.querySelector(".option.SC15").value;  
    document.querySelector(".imageDivOne").innerHTML = '<img src="images/curry.png">'    
    document.querySelector(".dropdown-content-first").classList.toggle("dropdown-content-show");
    d3.json("json/sc15.json", function(data) {
        console.log(data)
        renderFirstStats(data);
    })
    d3.json("json/pieChart/sc15FG.json",function(data) {
        showFirstDataFirstCake(data)
    })
    d3.json("json/pieChart/sc153P.json",function(data) {
        showFirstDataSecondCake(data)
    })
    d3.json("json/pieChart/sc15FT.json",function(data) {
        showFirstDataThirdCake(data)
        console.log(data)

    })
    document.querySelector(".statsOne").classList.add("statsOne-show");
    document.querySelector(".pieOne").classList.add("statsOne-show");
    document.querySelector(".pieTwo").classList.add("statsOne-show");
    document.querySelector(".pieThree").classList.add("statsOne-show");
});

document.querySelector(".option.LJ13").addEventListener("click",function(){
    clearData();
    clearDataCake()
    document.querySelector(".firstChoice").innerHTML=document.querySelector(".option.LJ13").value;  
    document.querySelector(".imageDivOne").innerHTML = '<img src="images/lebron.png">'    
    document.querySelector(".dropdown-content-first").classList.toggle("dropdown-content-show");
    d3.json("json/lebron13.json", function(data) {
        console.log(data)
        renderFirstStats(data);
    })
    d3.json("json/pieChart/lebron13FG.json",function(data) {
        showFirstDataFirstCake(data)
    })
    d3.json("json/pieChart/lebron133P.json",function(data) {
        showFirstDataSecondCake(data)
    })
    d3.json("json/pieChart/lebron13FT.json",function(data) {
        showFirstDataThirdCake(data)
        console.log(data)

    })
    document.querySelector(".statsOne").classList.add("statsOne-show");
    document.querySelector(".pieOne").classList.add("statsOne-show");
    document.querySelector(".pieTwo").classList.add("statsOne-show");
    document.querySelector(".pieThree").classList.add("statsOne-show");
});

document.querySelector(".option.LJ12").addEventListener("click",function(){
    clearData();
    clearDataCake()
    document.querySelector(".firstChoice").innerHTML=document.querySelector(".option.LJ12").value;  
    document.querySelector(".imageDivOne").innerHTML = '<img src="images/lebron.png">'    
    document.querySelector(".dropdown-content-first").classList.toggle("dropdown-content-show");
    d3.json("json/lebron12.json", function(data) {
        console.log(data)
        renderFirstStats(data);
    })
    d3.json("json/pieChart/lebron12FG.json",function(data) {
        showFirstDataFirstCake(data)
    })
    d3.json("json/pieChart/lebron123P.json",function(data) {
        showFirstDataSecondCake(data)
    })
    d3.json("json/pieChart/lebron12FT.json",function(data) {
        showFirstDataThirdCake(data)
        console.log(data)

    })
    document.querySelector(".statsOne").classList.add("statsOne-show");
    document.querySelector(".pieOne").classList.add("statsOne-show");
    document.querySelector(".pieTwo").classList.add("statsOne-show");
    document.querySelector(".pieThree").classList.add("statsOne-show");
});

document.querySelector(".option.DR").addEventListener("click",function(){
    clearData();
    clearDataCake()
    document.querySelector(".firstChoice").innerHTML=document.querySelector(".option.DR").value;  
    document.querySelector(".imageDivOne").innerHTML = '<img src="images/rose.png">'    
    document.querySelector(".dropdown-content-first").classList.toggle("dropdown-content-show");
    d3.json("json/dr.json", function(data) {
        console.log(data)
        renderFirstStats(data);
    })
    d3.json("json/pieChart/drFG.json",function(data) {
        showFirstDataFirstCake(data)
    })
    d3.json("json/pieChart/dr3P.json",function(data) {
        showFirstDataSecondCake(data)
    })
    d3.json("json/pieChart/drFT.json",function(data) {
        showFirstDataThirdCake(data)
        console.log(data)

    })
    document.querySelector(".statsOne").classList.add("statsOne-show");
    document.querySelector(".pieOne").classList.add("statsOne-show");
    document.querySelector(".pieTwo").classList.add("statsOne-show");
    document.querySelector(".pieThree").classList.add("statsOne-show");

});

document.querySelector(".option.LJ09").addEventListener("click",function(){
    clearData();
    clearDataCake()
    document.querySelector(".firstChoice").innerHTML=document.querySelector(".option.LJ09").value;  
    document.querySelector(".imageDivOne").innerHTML = '<img src="images/lebron.png">'    
    document.querySelector(".dropdown-content-first").classList.toggle("dropdown-content-show");
    d3.json("json/lebron09.json", function(data) {
        console.log(data)
        renderFirstStats(data);
    })
    d3.json("json/pieChart/lebron09FG.json",function(data) {
        showFirstDataFirstCake(data)
    })
    d3.json("json/pieChart/lebron093P.json",function(data) {
        showFirstDataSecondCake(data)
    })
    d3.json("json/pieChart/lebron09FT.json",function(data) {
        showFirstDataThirdCake(data)
        console.log(data)

    })
    document.querySelector(".statsOne").classList.add("statsOne-show");
    document.querySelector(".pieOne").classList.add("statsOne-show");
    document.querySelector(".pieTwo").classList.add("statsOne-show");
    document.querySelector(".pieThree").classList.add("statsOne-show");

});

document.querySelector(".option.KB").addEventListener("click",function(){
    clearData();
    clearDataCake()
    document.querySelector(".firstChoice").innerHTML=document.querySelector(".option.KB").value;  
    document.querySelector(".imageDivOne").innerHTML = '<img src="images/kobe.png">'    
    document.querySelector(".dropdown-content-first").classList.toggle("dropdown-content-show");
    d3.json("json/kb.json", function(data) {
        console.log(data)
        renderFirstStats(data);
    })
    d3.json("json/pieChart/kbFG.json",function(data) {
        showFirstDataFirstCake(data)
    })
    d3.json("json/pieChart/kb3P.json",function(data) {
        showFirstDataSecondCake(data)
    })
    d3.json("json/pieChart/kbFT.json",function(data) {
        showFirstDataThirdCake(data)
        console.log(data)

    })
    document.querySelector(".statsOne").classList.add("statsOne-show");
    document.querySelector(".pieOne").classList.add("statsOne-show");
    document.querySelector(".pieTwo").classList.add("statsOne-show");
    document.querySelector(".pieThree").classList.add("statsOne-show");

});

document.querySelector(".option.DK09").addEventListener("click",function(){
    clearData();
    clearDataCake()
    document.querySelector(".firstChoice").innerHTML=document.querySelector(".option.DK09").value;  
    document.querySelector(".imageDivOne").innerHTML = '<img src="images/dirk.png">'    
    document.querySelector(".dropdown-content-first").classList.toggle("dropdown-content-show");
    d3.json("json/dn.json", function(data) {
        console.log(data)
        renderFirstStats(data);
    })
    d3.json("json/pieChart/dnFG.json",function(data) {
        showFirstDataFirstCake(data)
    })
    d3.json("json/pieChart/dn3P.json",function(data) {
        showFirstDataSecondCake(data)
    })
    d3.json("json/pieChart/dnFT.json",function(data) {
        showFirstDataThirdCake(data)
        console.log(data)

    })
    document.querySelector(".statsOne").classList.add("statsOne-show");
    document.querySelector(".pieOne").classList.add("statsOne-show");
    document.querySelector(".pieTwo").classList.add("statsOne-show");
    document.querySelector(".pieThree").classList.add("statsOne-show");

});

document.querySelector(".option.LJ10").addEventListener("click",function(){
    clearData();
    clearDataCake()
    document.querySelector(".firstChoice").innerHTML=document.querySelector(".option.LJ10").value;  
    document.querySelector(".imageDivOne").innerHTML = '<img src="images/lebron.png">'    
    document.querySelector(".dropdown-content-first").classList.toggle("dropdown-content-show");
    d3.json("json/lebron10.json", function(data) {
        console.log(data)
        renderFirstStats(data);
    })
    d3.json("json/pieChart/lebron10FG.json",function(data) {
        showFirstDataFirstCake(data)
    })
    d3.json("json/pieChart/lebron103P.json",function(data) {
        showFirstDataSecondCake(data)
    })
    d3.json("json/pieChart/lebron10FT.json",function(data) {
        showFirstDataThirdCake(data)
        console.log(data)

    })
    document.querySelector(".statsOne").classList.add("statsOne-show");
    document.querySelector(".pieOne").classList.add("statsOne-show");
    document.querySelector(".pieTwo").classList.add("statsOne-show");
    document.querySelector(".pieThree").classList.add("statsOne-show");

});

document.querySelector(".option.KG").addEventListener("click",function(){
    clearData();
    clearDataCake()
    document.querySelector(".firstChoice").innerHTML=document.querySelector(".option.KG").value;  
    document.querySelector(".imageDivOne").innerHTML = '<img src="images/garnett.png">'    
    document.querySelector(".dropdown-content-first").classList.toggle("dropdown-content-show");
    d3.json("json/kg.json", function(data) {
        console.log(data)
        renderFirstStats(data);
    })
    d3.json("json/pieChart/kgFG.json",function(data) {
        showFirstDataFirstCake(data)
    })
    d3.json("json/pieChart/kg3P.json",function(data) {
        showFirstDataSecondCake(data)
    })
    d3.json("json/pieChart/kgFT.json",function(data) {
        showFirstDataThirdCake(data)
        console.log(data)

    })
    document.querySelector(".statsOne").classList.add("statsOne-show");
    document.querySelector(".pieOne").classList.add("statsOne-show");
    document.querySelector(".pieTwo").classList.add("statsOne-show");
    document.querySelector(".pieThree").classList.add("statsOne-show");

});

document.querySelector(".option.SN06").addEventListener("click",function(){
    clearData();
    clearDataCake()
    document.querySelector(".firstChoice").innerHTML=document.querySelector(".option.SN06").value;  
    document.querySelector(".imageDivOne").innerHTML = '<img src="images/nash.png">'    
    document.querySelector(".dropdown-content-first").classList.toggle("dropdown-content-show");
    d3.json("json/sn06.json", function(data) {
        console.log(data)
        renderFirstStats(data);
    })
    d3.json("json/pieChart/sn06FG.json",function(data) {
        showFirstDataFirstCake(data)
    })
    d3.json("json/pieChart/sn063P.json",function(data) {
        showFirstDataSecondCake(data)
    })
    d3.json("json/pieChart/sn06FT.json",function(data) {
        showFirstDataThirdCake(data)
        console.log(data)

    })
    document.querySelector(".statsOne").classList.add("statsOne-show");
    document.querySelector(".pieOne").classList.add("statsOne-show");
    document.querySelector(".pieTwo").classList.add("statsOne-show");
    document.querySelector(".pieThree").classList.add("statsOne-show");

});

document.querySelector(".option.SN05").addEventListener("click",function(){
    clearData();
    clearDataCake()
    document.querySelector(".firstChoice").innerHTML=document.querySelector(".option.SN05").value;  
    document.querySelector(".imageDivOne").innerHTML = '<img src="images/nash.png">'    
    document.querySelector(".dropdown-content-first").classList.toggle("dropdown-content-show");
    d3.json("json/sn05.json", function(data) {
        console.log(data)
        renderFirstStats(data);
    })
    d3.json("json/pieChart/sn05FG.json",function(data) {
        showFirstDataFirstCake(data)
    })
    d3.json("json/pieChart/sn053P.json",function(data) {
        showFirstDataSecondCake(data)
    })
    d3.json("json/pieChart/sn05FT.json",function(data) {
        showFirstDataThirdCake(data)
        console.log(data)

    })
    document.querySelector(".statsOne").classList.add("statsOne-show");
    document.querySelector(".pieOne").classList.add("statsOne-show");
    document.querySelector(".pieTwo").classList.add("statsOne-show");
    document.querySelector(".pieThree").classList.add("statsOne-show");
});

document.querySelector(".option.TD02").addEventListener("click",function(){
    clearData();
    clearDataCake()
    document.querySelector(".firstChoice").innerHTML=document.querySelector(".option.TD02").value;  
    document.querySelector(".imageDivOne").innerHTML = '<img src="images/duncan.png">'    
    document.querySelector(".dropdown-content-first").classList.toggle("dropdown-content-show");
    d3.json("json/td02.json", function(data) {
        console.log(data)
        renderFirstStats(data);
    })
    d3.json("json/pieChart/td02FG.json",function(data) {
        showFirstDataFirstCake(data)
    })
    d3.json("json/pieChart/td023P.json",function(data) {
        showFirstDataSecondCake(data)
    })
    d3.json("json/pieChart/td02FT.json",function(data) {
        showFirstDataThirdCake(data)
        console.log(data)

    })
    document.querySelector(".statsOne").classList.add("statsOne-show");
    document.querySelector(".pieOne").classList.add("statsOne-show");
    document.querySelector(".pieTwo").classList.add("statsOne-show");
    document.querySelector(".pieThree").classList.add("statsOne-show");

});

document.querySelector(".option.TD03").addEventListener("click",function(){
    clearData();
    clearDataCake()
    document.querySelector(".firstChoice").innerHTML=document.querySelector(".option.TD03").value;  
    document.querySelector(".imageDivOne").innerHTML = '<img src="images/duncan.png">'    
    document.querySelector(".dropdown-content-first").classList.toggle("dropdown-content-show");
    d3.json("json/td03.json", function(data) {
        console.log(data)
        renderFirstStats(data);
    })
    d3.json("json/pieChart/td03FG.json",function(data) {
        showFirstDataFirstCake(data)
    })
    d3.json("json/pieChart/td033P.json",function(data) {
        showFirstDataSecondCake(data)
    })
    d3.json("json/pieChart/td03FT.json",function(data) {
        showFirstDataThirdCake(data)
        console.log(data)

    })
    document.querySelector(".statsOne").classList.add("statsOne-show");
    document.querySelector(".pieOne").classList.add("statsOne-show");
    document.querySelector(".pieTwo").classList.add("statsOne-show");
    document.querySelector(".pieThree").classList.add("statsOne-show");

});

document.querySelector(".option.AI").addEventListener("click",function(){
    clearData();
    clearDataCake()
    document.querySelector(".firstChoice").innerHTML=document.querySelector(".option.AI").value;  
    document.querySelector(".imageDivOne").innerHTML = '<img src="images/iverson.png">'    
    document.querySelector(".dropdown-content-first").classList.toggle("dropdown-content-show");
    d3.json("json/ai.json", function(data) {
        console.log(data)
        renderFirstStats(data);
    })
    d3.json("json/pieChart/aiFGP.json",function(data) {
        showFirstDataFirstCake(data)
    })
    d3.json("json/pieChart/ai3P.json",function(data) {
        showFirstDataSecondCake(data)
    })
    d3.json("json/pieChart/aiFT.json",function(data) {
        showFirstDataThirdCake(data)
        console.log(data)

    })
    document.querySelector(".statsOne").classList.add("statsOne-show");
    document.querySelector(".pieOne").classList.add("statsOne-show");
    document.querySelector(".pieTwo").classList.add("statsOne-show");
    document.querySelector(".pieThree").classList.add("statsOne-show");

});

document.querySelector(".option.SN").addEventListener("click",function(){
    clearData();
    clearDataCake()
    document.querySelector(".firstChoice").innerHTML=document.querySelector(".option.SN").value;  
    document.querySelector(".imageDivOne").innerHTML = '<img src="images/shaq.png">'    
    document.querySelector(".dropdown-content-first").classList.toggle("dropdown-content-show");
    d3.json("json/shaq.json", function(data) {
        console.log(data)
        renderFirstStats(data);
    })
    d3.json("json/pieChart/shaqFG.json",function(data) {
        showFirstDataFirstCake(data)
    })
    d3.json("json/pieChart/shaq3P.json",function(data) {
        showFirstDataSecondCake(data)
    })
    d3.json("json/pieChart/shaqFT.json",function(data) {
        showFirstDataThirdCake(data)
        console.log(data)

    })
    document.querySelector(".statsOne").classList.add("statsOne-show");
    document.querySelector(".pieOne").classList.add("statsOne-show");
    document.querySelector(".pieTwo").classList.add("statsOne-show");
    document.querySelector(".pieThree").classList.add("statsOne-show");

});

document.querySelector(".option.MJ98").addEventListener("click",function(){
    clearData();
    clearDataCake()
    document.querySelector(".firstChoice").innerHTML=document.querySelector(".option.MJ98").value;  
    document.querySelector(".imageDivOne").innerHTML = '<img src="images/jordan.png">'    
    document.querySelector(".dropdown-content-first").classList.toggle("dropdown-content-show");
    d3.json("json/mj98.json", function(data) {
        console.log(data)
        renderFirstStats(data);
    })
    d3.json("json/pieChart/mj98FG.json",function(data) {
        showFirstDataFirstCake(data)
    })
    d3.json("json/pieChart/mj983P.json",function(data) {
        showFirstDataSecondCake(data)
    })
    d3.json("json/pieChart/mj98FT.json",function(data) {
        showFirstDataThirdCake(data)
        console.log(data)

    })
    document.querySelector(".statsOne").classList.add("statsOne-show");
    document.querySelector(".pieOne").classList.add("statsOne-show");
    document.querySelector(".pieTwo").classList.add("statsOne-show");
    document.querySelector(".pieThree").classList.add("statsOne-show");

});

document.querySelector(".option.MJ96").addEventListener("click",function(){
    clearData();
    clearDataCake()
    document.querySelector(".firstChoice").innerHTML=document.querySelector(".option.MJ96").value;  
    document.querySelector(".imageDivOne").innerHTML = '<img src="images/jordan.png">'    
    document.querySelector(".dropdown-content-first").classList.toggle("dropdown-content-show");
    d3.json("json/mj96.json", function(data) {
        console.log(data)
        renderFirstStats(data);
    })
    d3.json("json/pieChart/mj96FG.json",function(data) {
        showFirstDataFirstCake(data)
    })
    d3.json("json/pieChart/mj963P.json",function(data) {
        showFirstDataSecondCake(data)
    })
    d3.json("json/pieChart/mj96FT.json",function(data) {
        showFirstDataThirdCake(data)
        console.log(data)

    })
    document.querySelector(".statsOne").classList.add("statsOne-show");
    document.querySelector(".pieOne").classList.add("statsOne-show");
    document.querySelector(".pieTwo").classList.add("statsOne-show");
    document.querySelector(".pieThree").classList.add("statsOne-show");
});

document.querySelector(".option.MJ91").addEventListener("click",function(){
    clearData();
    clearDataCake()
    document.querySelector(".firstChoice").innerHTML=document.querySelector(".option.MJ91").value;  
    document.querySelector(".imageDivOne").innerHTML = '<img src="images/jordan.png">'    
    document.querySelector(".dropdown-content-first").classList.toggle("dropdown-content-show");
    d3.json("json/mj91.json", function(data) {
        console.log(data)
        renderFirstStats(data);
    })
    d3.json("json/pieChart/mj91FG.json",function(data) {
        showFirstDataFirstCake(data)
    })
    d3.json("json/pieChart/mj913P.json",function(data) {
        showFirstDataSecondCake(data)
    })
    d3.json("json/pieChart/mj91FT.json",function(data) {
        showFirstDataThirdCake(data)
        console.log(data)

    })
    document.querySelector(".statsOne").classList.add("statsOne-show");
    document.querySelector(".pieOne").classList.add("statsOne-show");
    document.querySelector(".pieTwo").classList.add("statsOne-show");
    document.querySelector(".pieThree").classList.add("statsOne-show");

});

document.querySelector(".option.MJ92").addEventListener("click",function(){
    clearData();
    clearDataCake()
    document.querySelector(".firstChoice").innerHTML=document.querySelector(".option.MJ92").value;  
    document.querySelector(".imageDivOne").innerHTML = '<img src="images/jordan.png">'    
    document.querySelector(".dropdown-content-first").classList.toggle("dropdown-content-show");
    d3.json("json/mj92.json", function(data) {
        console.log(data)
        renderFirstStats(data);
    })
    d3.json("json/pieChart/mj92FG.json",function(data) {
        showFirstDataFirstCake(data)
    })
    d3.json("json/pieChart/mj923P.json",function(data) {
        showFirstDataSecondCake(data)
    })
    d3.json("json/pieChart/mjFT.json",function(data) {
        showFirstDataThirdCake(data)
        console.log(data)

    })
    document.querySelector(".statsOne").classList.add("statsOne-show");
    document.querySelector(".pieOne").classList.add("statsOne-show");
    document.querySelector(".pieTwo").classList.add("statsOne-show");
    document.querySelector(".pieThree").classList.add("statsOne-show");

});

document.querySelector(".option.MJ88").addEventListener("click",function(){
    clearData();
    clearDataCake()
    document.querySelector(".firstChoice").innerHTML=document.querySelector(".option.MJ88").value;  
    document.querySelector(".imageDivOne").innerHTML = '<img src="images/jordan.png">'    
    document.querySelector(".dropdown-content-first").classList.toggle("dropdown-content-show");
    d3.json("json/mj88.json", function(data) {
        console.log(data)
        renderFirstStats(data);
    })
    d3.json("json/pieChart/mj88FG.json",function(data) {
        showFirstDataFirstCake(data)
    })
    d3.json("json/pieChart/mj883P.json",function(data) {
        showFirstDataSecondCake(data)
    })
    d3.json("json/pieChart/mj88FT.json",function(data) {
        showFirstDataThirdCake(data)
        console.log(data)

    })
    document.querySelector(".statsOne").classList.add("statsOne-show");
    document.querySelector(".pieOne").classList.add("statsOne-show");
    document.querySelector(".pieTwo").classList.add("statsOne-show");
    document.querySelector(".pieThree").classList.add("statsOne-show");

});

document.querySelector(".option.DR95").addEventListener("click",function(){
    clearData();
    clearDataCake()
    document.querySelector(".firstChoice").innerHTML=document.querySelector(".option.DR95").value;  
    document.querySelector(".imageDivOne").innerHTML = '<img src="images/robinson.png">'    
    document.querySelector(".dropdown-content-first").classList.toggle("dropdown-content-show");
    d3.json("json/robinson.json", function(data) {
        console.log(data)
        renderFirstStats(data);
    })
    d3.json("json/pieChart/robinsonFG.json",function(data) {
        showFirstDataFirstCake(data)
    })
    d3.json("json/pieChart/robinson3P.json",function(data) {
        showFirstDataSecondCake(data)
    })
    d3.json("json/pieChart/robinsonFT.json",function(data) {
        showFirstDataThirdCake(data)
        console.log(data)

    })
    document.querySelector(".statsOne").classList.add("statsOne-show");
    document.querySelector(".pieOne").classList.add("statsOne-show");
    document.querySelector(".pieTwo").classList.add("statsOne-show");
    document.querySelector(".pieThree").classList.add("statsOne-show");

});

document.querySelector(".option.CH").addEventListener("click",function(){
    clearData();
    clearDataCake()
    document.querySelector(".firstChoice").innerHTML=document.querySelector(".option.CH").value;  
    document.querySelector(".imageDivOne").innerHTML = '<img src="images/chuck.png">'    
    document.querySelector(".dropdown-content-first").classList.toggle("dropdown-content-show");
    d3.json("json/chuck.json", function(data) {
        console.log(data)
        renderFirstStats(data);
    })
    d3.json("json/pieChart/chuckFG.json",function(data) {
        showFirstDataFirstCake(data)
    })
    d3.json("json/pieChart/chuck3P.json",function(data) {
        showFirstDataSecondCake(data)
    })
    d3.json("json/pieChart/chuckFT.json",function(data) {
        showFirstDataThirdCake(data)
        console.log(data)

    })
    document.querySelector(".statsOne").classList.add("statsOne-show");
    document.querySelector(".pieOne").classList.add("statsOne-show");
    document.querySelector(".pieTwo").classList.add("statsOne-show");
    document.querySelector(".pieThree").classList.add("statsOne-show");

});

document.querySelector(".option.KM").addEventListener("click",function(){
    clearData();
    clearDataCake()
    document.querySelector(".firstChoice").innerHTML=document.querySelector(".option.KM").value;  
    document.querySelector(".imageDivOne").innerHTML = '<img src="images/malone.png">'    
    document.querySelector(".dropdown-content-first").classList.toggle("dropdown-content-show");
    d3.json("json/km.json", function(data) {
        console.log(data)
        renderFirstStats(data);
    })
    d3.json("json/pieChart/kmFG.json",function(data) {
        showFirstDataFirstCake(data)
    })
    d3.json("json/pieChart/km3P.json",function(data) {
        showFirstDataSecondCake(data)
    })
    d3.json("json/pieChart/kmFT.json",function(data) {
        showFirstDataThirdCake(data)
        console.log(data)

    })
    document.querySelector(".statsOne").classList.add("statsOne-show");
    document.querySelector(".pieOne").classList.add("statsOne-show");
    document.querySelector(".pieTwo").classList.add("statsOne-show");
    document.querySelector(".pieThree").classList.add("statsOne-show");

});

document.querySelector(".option.HO").addEventListener("click",function(){
    clearData();
    clearDataCake()
    document.querySelector(".firstChoice").innerHTML=document.querySelector(".option.HO").value;  
    document.querySelector(".imageDivOne").innerHTML = '<img src="images/hakeem.png">'    
    document.querySelector(".dropdown-content-first").classList.toggle("dropdown-content-show");
    d3.json("json/hakeem.json", function(data) {
        console.log(data)
        renderFirstStats(data);
    })
    d3.json("json/pieChart/hakeemFG.json",function(data) {
        showFirstDataFirstCake(data)
    })
    d3.json("json/pieChart/hakeem3P.json",function(data) {
        showFirstDataSecondCake(data)
    })
    d3.json("json/pieChart/hakeemFT.json",function(data) {
        showFirstDataThirdCake(data)
        console.log(data)

    })
    document.querySelector(".statsOne").classList.add("statsOne-show");
    document.querySelector(".pieOne").classList.add("statsOne-show");
    document.querySelector(".pieTwo").classList.add("statsOne-show");
    document.querySelector(".pieThree").classList.add("statsOne-show");

});

document.querySelector(".option.MJ").addEventListener("click",function(){
    clearData();
    clearDataCake()
    document.querySelector(".firstChoice").innerHTML=document.querySelector(".option.MJ").value;  
    document.querySelector(".imageDivOne").innerHTML = '<img src="images/magic.png">'    
    document.querySelector(".dropdown-content-first").classList.toggle("dropdown-content-show");
    d3.json("json/magic.json", function(data) {
        console.log(data)
        renderFirstStats(data);
    })
    d3.json("json/pieChart/magicFG.json",function(data) {
        showFirstDataFirstCake(data)
    })
    d3.json("json/pieChart/magic3P.json",function(data) {
        showFirstDataSecondCake(data)
    })
    d3.json("json/pieChart/magicFT.json",function(data) {
        showFirstDataThirdCake(data)
        console.log(data)

    })
    document.querySelector(".statsOne").classList.add("statsOne-show");
    document.querySelector(".pieOne").classList.add("statsOne-show");
    document.querySelector(".pieTwo").classList.add("statsOne-show");
    document.querySelector(".pieThree").classList.add("statsOne-show");

});



//Chosing#2

document.querySelector(".option.RW2").addEventListener("click",function(){
    clearSecondData();
    clearSecondDataCake();
    document.querySelector(".secondChoice").innerHTML = document.querySelector(".option.RW").value;
    document.querySelector(".imageDivTwo").innerHTML = '<img src="images/westbrook.png">' 
    document.querySelector(".dropdown-content-second").classList.toggle("dropdown-content-show");
    d3.json("json/rw.json", function(data) {
        console.log(data)
        renderSecondStats(data);
    
    })
    d3.json("json/pieChart/rwPie.json",function(data) {
        showSecondDataFirstCake(data)
    })
    d3.json("json/pieChart/rw3PPie.json",function(data) {
        showSecondDataSecondCake(data)
    })
    d3.json("json/pieChart/rwFTPie.json",function(data) {
        showSecondDataThirdCake(data)
        console.log(data)

    })
    document.querySelector(".statsTwo").classList.add("statsTwo-show");
    document.querySelector(".pieFour").classList.add("statsTwo-show");
    document.querySelector(".pieFive").classList.add("statsTwo-show");
    document.querySelector(".pieSix").classList.add("statsTwo-show");

});

document.querySelector(".option.GA2").addEventListener("click",function(){
    clearSecondData();
    clearSecondDataCake();
    document.querySelector(".secondChoice").innerHTML=document.querySelector(".option.GA").value;   
    document.querySelector(".imageDivTwo").innerHTML = '<img src="images/giannis.png">' 
    document.querySelector(".dropdown-content-second").classList.toggle("dropdown-content-show"); 
    d3.json("json/ga20.json", function(data) {
        console.log(data)
        renderSecondStats(data);
    
    })

    d3.json("json/pieChart/ga20FG.json",function(data) {
        showSecondDataFirstCake(data)
    })
    d3.json("json/pieChart/ga203P.json",function(data) {
        showSecondDataSecondCake(data)
    })
    d3.json("json/pieChart/ga20FT.json",function(data) {
        showSecondDataThirdCake(data)
        console.log(data)

    })
    document.querySelector(".statsTwo").classList.add("statsTwo-show");
    document.querySelector(".pieFour").classList.add("statsTwo-show");
    document.querySelector(".pieFive").classList.add("statsTwo-show");
    document.querySelector(".pieSix").classList.add("statsTwo-show");

});

document.querySelector(".option.GA192").addEventListener("click",function(){
    clearSecondDataCake()
    clearSecondData();
    document.querySelector(".secondChoice").innerHTML=document.querySelector(".option.GA19").value;  
    document.querySelector(".imageDivTwo").innerHTML = '<img src="images/giannis.png">' 
    document.querySelector(".dropdown-content-second").classList.toggle("dropdown-content-show");  
    d3.json("json/ga19.json", function(data) {
        console.log(data)
        renderSecondStats(data);
    
    })
    d3.json("json/pieChart/ga19FG.json",function(data) {
        showSecondDataFirstCake(data)
    })
    d3.json("json/pieChart/ga193P.json",function(data) {
        showSecondDataSecondCake(data)
    })
    d3.json("json/pieChart/ga19FT.json",function(data) {
        showSecondDataThirdCake(data)
        console.log(data)

    })
    document.querySelector(".statsTwo").classList.add("statsTwo-show");
    document.querySelector(".pieFour").classList.add("statsTwo-show");
    document.querySelector(".pieFive").classList.add("statsTwo-show");
    document.querySelector(".pieSix").classList.add("statsTwo-show");

});

document.querySelector(".option.JH2").addEventListener("click",function(){
    clearSecondDataCake()
    clearSecondData();
    document.querySelector(".secondChoice").innerHTML=document.querySelector(".option.JH").value;    
    document.querySelector(".imageDivTwo").innerHTML = '<img src="images/harden.png">' 
    document.querySelector(".dropdown-content-second").classList.toggle("dropdown-content-show");
    d3.json("json/jh.json", function(data) {
        console.log(data)
        renderSecondStats(data);
    
    })
    d3.json("json/pieChart/jhFG.json",function(data) {
        showSecondDataFirstCake(data)
    })
    d3.json("json/pieChart/jh3P.json",function(data) {
        showSecondDataSecondCake(data)
    })
    d3.json("json/pieChart/jhFT.json",function(data) {
        showSecondDataThirdCake(data)
        console.log(data)

    })
    document.querySelector(".statsTwo").classList.add("statsTwo-show");
    document.querySelector(".pieFour").classList.add("statsTwo-show");
    document.querySelector(".pieFive").classList.add("statsTwo-show");
    document.querySelector(".pieSix").classList.add("statsTwo-show");

});

document.querySelector(".option.KD2").addEventListener("click",function(){
    clearSecondDataCake()

    clearSecondData();
    document.querySelector(".secondChoice").innerHTML=document.querySelector(".option.KD").value;    
    document.querySelector(".imageDivTwo").innerHTML = '<img src="images/durant.png">' 
    document.querySelector(".dropdown-content-second").classList.toggle("dropdown-content-show");
    d3.json("json/kd.json", function(data) {
        console.log(data)
        renderSecondStats(data);
    
    })
    d3.json("json/pieChart/kdFG.json",function(data) {
        showSecondDataFirstCake(data)
    })
    d3.json("json/pieChart/kd3P.json",function(data) {
        showSecondDataSecondCake(data)
    })
    d3.json("json/pieChart/kdFT.json",function(data) {
        showSecondDataThirdCake(data)
        console.log(data)

    })
    document.querySelector(".statsTwo").classList.add("statsTwo-show");
    document.querySelector(".pieFour").classList.add("statsTwo-show");
    document.querySelector(".pieFive").classList.add("statsTwo-show");
    document.querySelector(".pieSix").classList.add("statsTwo-show");

});

document.querySelector(".option.SC162").addEventListener("click",function(){
    clearSecondDataCake()

    clearSecondData();
    document.querySelector(".secondChoice").innerHTML=document.querySelector(".option.SC16").value;  
    document.querySelector(".imageDivTwo").innerHTML = '<img src="images/curry.png">' 
    document.querySelector(".dropdown-content-second").classList.toggle("dropdown-content-show");  
    d3.json("json/sc16.json", function(data) {
        console.log(data)
        renderSecondStats(data);
    
    })
    d3.json("json/pieChart/sc16FG.json",function(data) {
        showSecondDataFirstCake(data)
    })
    d3.json("json/pieChart/sc163P.json",function(data) {
        showSecondDataSecondCake(data)
    })
    d3.json("json/pieChart/sc16FT.json",function(data) {
        showSecondDataThirdCake(data)
        console.log(data)

    })
    document.querySelector(".statsTwo").classList.add("statsTwo-show");
    document.querySelector(".pieFour").classList.add("statsTwo-show");
    document.querySelector(".pieFive").classList.add("statsTwo-show");
    document.querySelector(".pieSix").classList.add("statsTwo-show");

});

document.querySelector(".option.SC152").addEventListener("click",function(){
    clearSecondDataCake()

    clearSecondData();
    document.querySelector(".secondChoice").innerHTML=document.querySelector(".option.SC15").value;   
    document.querySelector(".imageDivTwo").innerHTML = '<img src="images/curry.png">' 
    document.querySelector(".dropdown-content-second").classList.toggle("dropdown-content-show"); 
    d3.json("json/sc15.json", function(data) {
        console.log(data)
        renderSecondStats(data);
    
    })
    d3.json("json/pieChart/sc15FG.json",function(data) {
        showSecondDataFirstCake(data)
    })
    d3.json("json/pieChart/sc153P.json",function(data) {
        showSecondDataSecondCake(data)
    })
    d3.json("json/pieChart/sc15FT.json",function(data) {
        showSecondDataThirdCake(data)
        console.log(data)

    })
    document.querySelector(".statsTwo").classList.add("statsTwo-show");
    document.querySelector(".pieFour").classList.add("statsTwo-show");
    document.querySelector(".pieFive").classList.add("statsTwo-show");
    document.querySelector(".pieSix").classList.add("statsTwo-show");

});

document.querySelector(".option.LJ132").addEventListener("click",function(){
    clearSecondDataCake()

    clearSecondData();
    document.querySelector(".secondChoice").innerHTML=document.querySelector(".option.LJ13").value;    
    document.querySelector(".imageDivTwo").innerHTML = '<img src="images/lebron.png">' 
    document.querySelector(".dropdown-content-second").classList.toggle("dropdown-content-show");
    d3.json("json/lebron13.json", function(data) {
        console.log(data)
        renderSecondStats(data);
    
    })
    d3.json("json/pieChart/lebron13FG.json",function(data) {
        showSecondDataFirstCake(data)
    })
    d3.json("json/pieChart/lebron133P.json",function(data) {
        showSecondDataSecondCake(data)
    })
    d3.json("json/pieChart/lebron13FT.json",function(data) {
        showSecondDataThirdCake(data)
        console.log(data)

    })
    document.querySelector(".statsTwo").classList.add("statsTwo-show");
    document.querySelector(".pieFour").classList.add("statsTwo-show");
    document.querySelector(".pieFive").classList.add("statsTwo-show");
    document.querySelector(".pieSix").classList.add("statsTwo-show");

});

document.querySelector(".option.LJ122").addEventListener("click",function(){
    clearSecondDataCake()

    clearSecondData();
    document.querySelector(".secondChoice").innerHTML=document.querySelector(".option.LJ12").value;    
    document.querySelector(".imageDivTwo").innerHTML = '<img src="images/lebron.png">' 
    document.querySelector(".dropdown-content-second").classList.toggle("dropdown-content-show");
    d3.json("json/lebron12.json", function(data) {
        console.log(data)
        renderSecondStats(data);
    
    })
    d3.json("json/pieChart/lebron12FG.json",function(data) {
        showSecondDataFirstCake(data)
    })
    d3.json("json/pieChart/lebron123P.json",function(data) {
        showSecondDataSecondCake(data)
    })
    d3.json("json/pieChart/lebron12FT.json",function(data) {
        showSecondDataThirdCake(data)
        console.log(data)

    })
    document.querySelector(".statsTwo").classList.add("statsTwo-show");
    document.querySelector(".pieFour").classList.add("statsTwo-show");
    document.querySelector(".pieFive").classList.add("statsTwo-show");
    document.querySelector(".pieSix").classList.add("statsTwo-show");

});

document.querySelector(".option.DR2").addEventListener("click",function(){
    clearSecondDataCake()

    clearSecondData();
    document.querySelector(".secondChoice").innerHTML=document.querySelector(".option.DR").value;    
    document.querySelector(".imageDivTwo").innerHTML = '<img src="images/rose.png">' 
    document.querySelector(".dropdown-content-second").classList.toggle("dropdown-content-show");
    d3.json("json/dr.json", function(data) {
        console.log(data)
        renderSecondStats(data);
    
    })
    d3.json("json/pieChart/drFG.json",function(data) {
        showSecondDataFirstCake(data)
    })
    d3.json("json/pieChart/dr3P.json",function(data) {
        showSecondDataSecondCake(data)
    })
    d3.json("json/pieChart/drFT.json",function(data) {
        showSecondDataThirdCake(data)
        console.log(data)

    })
    document.querySelector(".statsTwo").classList.add("statsTwo-show");
    document.querySelector(".pieFour").classList.add("statsTwo-show");
    document.querySelector(".pieFive").classList.add("statsTwo-show");
    document.querySelector(".pieSix").classList.add("statsTwo-show");

});

document.querySelector(".option.KB082").addEventListener("click",function(){
    clearSecondDataCake()

    clearSecondData();
    document.querySelector(".secondChoice").innerHTML=document.querySelector(".option.KB082").value;    
    document.querySelector(".imageDivTwo").innerHTML = '<img src="images/kobe.png">'    
    document.querySelector(".dropdown-content-second").classList.toggle("dropdown-content-show"); 
    d3.json("json/kb.json", function(data) {
        console.log(data)
        renderSecondStats(data);
    
    })
    d3.json("json/pieChart/kbFG.json",function(data) {
        showSecondDataFirstCake(data)
    })
    d3.json("json/pieChart/kb3P.json",function(data) {
        showSecondDataSecondCake(data)
    })
    d3.json("json/pieChart/kbFT.json",function(data) {
        showSecondDataThirdCake(data)
        console.log(data)

    })
    document.querySelector(".statsTwo").classList.add("statsTwo-show");
    document.querySelector(".pieFour").classList.add("statsTwo-show");
    document.querySelector(".pieFive").classList.add("statsTwo-show");
    document.querySelector(".pieSix").classList.add("statsTwo-show");

});

document.querySelector(".option.DK2").addEventListener("click",function(){
    clearSecondDataCake()

    clearSecondData();
    document.querySelector(".secondChoice").innerHTML=document.querySelector(".option.DK2").value;  
    document.querySelector(".imageDivTwo").innerHTML = '<img src="images/dirk.png">'    
    document.querySelector(".dropdown-content-second").classList.toggle("dropdown-content-show"); 
    d3.json("json/dn.json", function(data) {
        console.log(data)
        renderSecondStats(data);
    
    })
    d3.json("json/pieChart/dkFG.json",function(data) {
        showSecondDataFirstCake(data)
    })
    d3.json("json/pieChart/dk3P.json",function(data) {
        showSecondDataSecondCake(data)
    })
    d3.json("json/pieChart/dkFT.json",function(data) {
        showSecondDataThirdCake(data)
        console.log(data)

    })
    document.querySelector(".statsTwo").classList.add("statsTwo-show");
    document.querySelector(".pieFour").classList.add("statsTwo-show");
    document.querySelector(".pieFive").classList.add("statsTwo-show");
    document.querySelector(".pieSix").classList.add("statsTwo-show");


});
document.querySelector(".option.LJ092").addEventListener("click",function(){
    clearSecondDataCake()

    clearSecondData();
    document.querySelector(".secondChoice").innerHTML=document.querySelector(".option.LJ092").value;    
    document.querySelector(".imageDivTwo").innerHTML = '<img src="images/lebron.png">' 
    document.querySelector(".dropdown-content-second").classList.toggle("dropdown-content-show");
    d3.json("json/lebron09.json", function(data) {
        console.log(data)
        renderSecondStats(data);
    
    })
    d3.json("json/pieChart/lebron09FG.json",function(data) {
        showSecondDataFirstCake(data)
    })
    d3.json("json/pieChart/lebron093P.json",function(data) {
        showSecondDataSecondCake(data)
    })
    d3.json("json/pieChart/lebron09FT.json",function(data) {
        showSecondDataThirdCake(data)
        console.log(data)

    })
    document.querySelector(".statsTwo").classList.add("statsTwo-show");
    document.querySelector(".pieFour").classList.add("statsTwo-show");
    document.querySelector(".pieFive").classList.add("statsTwo-show");
    document.querySelector(".pieSix").classList.add("statsTwo-show");
});

document.querySelector(".option.LJ102").addEventListener("click",function(){
    clearSecondDataCake()

    clearSecondData();
    document.querySelector(".secondChoice").innerHTML=document.querySelector(".option.LJ102").value;    
    document.querySelector(".imageDivTwo").innerHTML = '<img src="images/lebron.png">' 
    document.querySelector(".dropdown-content-second").classList.toggle("dropdown-content-show");
    d3.json("json/lebron10.json", function(data) {
        console.log(data)
        renderSecondStats(data);
    
    })
    d3.json("json/pieChart/lebron10FG.json",function(data) {
        showSecondDataFirstCake(data)
    })
    d3.json("json/pieChart/lebron103P.json",function(data) {
        showSecondDataSecondCake(data)
    })
    d3.json("json/pieChart/lebron10FT.json",function(data) {
        showSecondDataThirdCake(data)
        console.log(data)

    })
    document.querySelector(".statsTwo").classList.add("statsTwo-show");
    document.querySelector(".pieFour").classList.add("statsTwo-show");
    document.querySelector(".pieFive").classList.add("statsTwo-show");
    document.querySelector(".pieSix").classList.add("statsTwo-show");

});

document.querySelector(".option.KG2").addEventListener("click",function(){
    clearSecondDataCake()

    clearSecondData();
    document.querySelector(".secondChoice").innerHTML=document.querySelector(".option.KG2").value;   
    document.querySelector(".imageDivTwo").innerHTML = '<img src="images/garnett.png">' 
    document.querySelector(".dropdown-content-second").classList.toggle("dropdown-content-show"); 
    d3.json("json/kg.json", function(data) {
        console.log(data)
        renderSecondStats(data);
    
    })
    d3.json("json/pieChart/kgFG.json",function(data) {
        showSecondDataFirstCake(data)
    })
    d3.json("json/pieChart/kg3P.json",function(data) {
        showSecondDataSecondCake(data)
    })
    d3.json("json/pieChart/kgFT.json",function(data) {
        showSecondDataThirdCake(data)
        console.log(data)

    })
    
    document.querySelector(".statsTwo").classList.add("statsTwo-show");
    document.querySelector(".pieFour").classList.add("statsTwo-show");
    document.querySelector(".pieFive").classList.add("statsTwo-show");
    document.querySelector(".pieSix").classList.add("statsTwo-show");

});

document.querySelector(".option.SN062").addEventListener("click",function(){
    clearSecondDataCake()

    clearSecondData();
    document.querySelector(".secondChoice").innerHTML=document.querySelector(".option.SN062").value;    
    document.querySelector(".imageDivTwo").innerHTML = '<img src="images/nash.png">' 
    document.querySelector(".dropdown-content-second").classList.toggle("dropdown-content-show");
    d3.json("json/sn06.json", function(data) {
        console.log(data)
        renderSecondStats(data);
    
    })
    d3.json("json/pieChart/sn06FG.json",function(data) {
        showSecondDataFirstCake(data)
    })
    d3.json("json/pieChart/sn063P.json",function(data) {
        showSecondDataSecondCake(data)
    })
    d3.json("json/pieChart/sn06FT.json",function(data) {
        showSecondDataThirdCake(data)
        console.log(data)

    })
    document.querySelector(".statsTwo").classList.add("statsTwo-show");
    document.querySelector(".pieFour").classList.add("statsTwo-show");
    document.querySelector(".pieFive").classList.add("statsTwo-show");
    document.querySelector(".pieSix").classList.add("statsTwo-show");

});

document.querySelector(".option.SN052").addEventListener("click",function(){
    clearSecondDataCake()

    clearSecondData();
    document.querySelector(".secondChoice").innerHTML=document.querySelector(".option.SN052").value;
    document.querySelector(".imageDivTwo").innerHTML = '<img src="images/nash.png">' 
    document.querySelector(".dropdown-content-second").classList.toggle("dropdown-content-show");    
    d3.json("json/sn05.json", function(data) {
        console.log(data)
        renderSecondStats(data);
    
    })
    d3.json("json/pieChart/sn05FG.json",function(data) {
        showSecondDataFirstCake(data)
    })
    d3.json("json/pieChart/sn053P.json",function(data) {
        showSecondDataSecondCake(data)
    })
    d3.json("json/pieChart/sn05FT.json",function(data) {
        showSecondDataThirdCake(data)
        console.log(data)

    })
    document.querySelector(".statsTwo").classList.add("statsTwo-show");
    document.querySelector(".pieFour").classList.add("statsTwo-show");
    document.querySelector(".pieFive").classList.add("statsTwo-show");
    document.querySelector(".pieSix").classList.add("statsTwo-show");

});

document.querySelector(".option.TD022").addEventListener("click",function(){
    clearSecondDataCake()

    clearSecondData();
    document.querySelector(".secondChoice").innerHTML=document.querySelector(".option.TD02").value;    
    document.querySelector(".imageDivTwo").innerHTML = '<img src="images/duncan.png">' 
    document.querySelector(".dropdown-content-second").classList.toggle("dropdown-content-show");
    d3.json("json/td02.json", function(data) {
        console.log(data)
        renderSecondStats(data);
    
    })
    d3.json("json/pieChart/td02FG.json",function(data) {
        showSecondDataFirstCake(data)
    })
    d3.json("json/pieChart/td023P.json",function(data) {
        showSecondDataSecondCake(data)
    })
    d3.json("json/pieChart/td02FT.json",function(data) {
        showSecondDataThirdCake(data)
        console.log(data)

    })
    document.querySelector(".statsTwo").classList.add("statsTwo-show");
    document.querySelector(".pieFour").classList.add("statsTwo-show");
    document.querySelector(".pieFive").classList.add("statsTwo-show");
    document.querySelector(".pieSix").classList.add("statsTwo-show");

});

document.querySelector(".option.TD032").addEventListener("click",function(){
    clearSecondDataCake()

    clearSecondData();
    document.querySelector(".secondChoice").innerHTML=document.querySelector(".option.TD032").value;    
    document.querySelector(".imageDivTwo").innerHTML = '<img src="images/duncan.png">' 
    document.querySelector(".dropdown-content-second").classList.toggle("dropdown-content-show");
    d3.json("json/td03.json", function(data) {
        console.log(data)
        renderSecondStats(data);
    
    })
    d3.json("json/pieChart/td03FG.json",function(data) {
        showSecondDataFirstCake(data)
    })
    d3.json("json/pieChart/td033P.json",function(data) {
        showSecondDataSecondCake(data)
    })
    d3.json("json/pieChart/td03FT.json",function(data) {
        showSecondDataThirdCake(data)
        console.log(data)

    })
    document.querySelector(".statsTwo").classList.add("statsTwo-show");
    document.querySelector(".pieFour").classList.add("statsTwo-show");
    document.querySelector(".pieFive").classList.add("statsTwo-show");
    document.querySelector(".pieSix").classList.add("statsTwo-show");

});

document.querySelector(".option.AI2").addEventListener("click",function(){
    clearSecondData();
    clearSecondDataCake()

    document.querySelector(".secondChoice").innerHTML=document.querySelector(".option.AI2").value;   
    document.querySelector(".imageDivTwo").innerHTML = '<img src="images/iverson.png">' 
    document.querySelector(".dropdown-content-second").classList.toggle("dropdown-content-show"); 
    d3.json("json/ai.json", function(data) {
        console.log(data)
        renderSecondStats(data);
    
    })
    d3.json("json/pieChart/aiFG.json",function(data) {
        showSecondDataFirstCake(data)
    })
    d3.json("json/pieChart/ai3P.json",function(data) {
        showSecondDataSecondCake(data)
    })
    d3.json("json/pieChart/aiFT.json",function(data) {
        showSecondDataThirdCake(data)
        console.log(data)

    })
    document.querySelector(".statsTwo").classList.add("statsTwo-show");
    document.querySelector(".pieFour").classList.add("statsTwo-show");
    document.querySelector(".pieFive").classList.add("statsTwo-show");
    document.querySelector(".pieSix").classList.add("statsTwo-show");

});

document.querySelector(".option.SN2").addEventListener("click",function(){
    clearSecondDataCake()

    clearSecondData();
    document.querySelector(".secondChoice").innerHTML=document.querySelector(".option.SN2").value;    
    document.querySelector(".imageDivTwo").innerHTML = '<img src="images/shaq.png">' 
    document.querySelector(".dropdown-content-second").classList.toggle("dropdown-content-show");
    d3.json("json/shaq.json", function(data) {
        console.log(data)
        renderSecondStats(data);
    
    })
    d3.json("json/pieChart/shaqFG.json",function(data) {
        showSecondDataFirstCake(data)
    })
    d3.json("json/pieChart/shaq3P.json",function(data) {
        showSecondDataSecondCake(data)
    })
    d3.json("json/pieChart/shaqFT.json",function(data) {
        showSecondDataThirdCake(data)
        console.log(data)

    })
    document.querySelector(".statsTwo").classList.add("statsTwo-show");
    document.querySelector(".pieFour").classList.add("statsTwo-show");
    document.querySelector(".pieFive").classList.add("statsTwo-show");
    document.querySelector(".pieSix").classList.add("statsTwo-show");

});

document.querySelector(".option.MJ982").addEventListener("click",function(){
    clearSecondDataCake()

    clearSecondData();
    document.querySelector(".secondChoice").innerHTML=document.querySelector(".option.MJ982").value;   
    document.querySelector(".imageDivTwo").innerHTML = '<img src="images/jordan.png">' 
    document.querySelector(".dropdown-content-second").classList.toggle("dropdown-content-show"); 
    d3.json("json/mj98.json", function(data) {
        console.log(data)
        renderSecondStats(data);
    
    })
    d3.json("json/pieChart/mj98FG.json",function(data) {
        showSecondDataFirstCake(data)
    })
    d3.json("json/pieChart/mj983P.json",function(data) {
        showSecondDataSecondCake(data)
    })
    d3.json("json/pieChart/mj98FT.json",function(data) {
        showSecondDataThirdCake(data)
        console.log(data)

    })
    document.querySelector(".statsTwo").classList.add("statsTwo-show");
    document.querySelector(".pieFour").classList.add("statsTwo-show");
    document.querySelector(".pieFive").classList.add("statsTwo-show");
    document.querySelector(".pieSix").classList.add("statsTwo-show");

});

document.querySelector(".option.MJ962").addEventListener("click",function(){
    clearSecondDataCake()

    clearSecondData();
    document.querySelector(".secondChoice").innerHTML=document.querySelector(".option.MJ962").value;   
    document.querySelector(".imageDivTwo").innerHTML = '<img src="images/jordan.png">' 
    document.querySelector(".dropdown-content-second").classList.toggle("dropdown-content-show"); 
    d3.json("json/mj96.json", function(data) {
        console.log(data)
        renderSecondStats(data);
    
    })
    d3.json("json/pieChart/mj96FG.json",function(data) {
        showSecondDataFirstCake(data)
    })
    d3.json("json/pieChart/mj963P.json",function(data) {
        showSecondDataSecondCake(data)
    })
    d3.json("json/pieChart/mj96FT.json",function(data) {
        showSecondDataThirdCake(data)
        console.log(data)

    })
    document.querySelector(".statsTwo").classList.add("statsTwo-show");
    document.querySelector(".pieFour").classList.add("statsTwo-show");
    document.querySelector(".pieFive").classList.add("statsTwo-show");
    document.querySelector(".pieSix").classList.add("statsTwo-show");
});

document.querySelector(".option.MJ912").addEventListener("click",function(){
    clearSecondData();
    clearSecondDataCake()

    document.querySelector(".secondChoice").innerHTML=document.querySelector(".option.MJ912").value;    
    document.querySelector(".imageDivTwo").innerHTML = '<img src="images/jordan.png">' 
    document.querySelector(".dropdown-content-second").classList.toggle("dropdown-content-show");
    d3.json("json/mj91.json", function(data) {
        console.log(data)
        renderSecondStats(data);
    
    })
    d3.json("json/pieChart/mj91FG.json",function(data) {
        showSecondDataFirstCake(data)
    })
    d3.json("json/pieChart/mj913P.json",function(data) {
        showSecondDataSecondCake(data)
    })
    d3.json("json/pieChart/mj91FT.json",function(data) {
        showSecondDataThirdCake(data)
        console.log(data)

    })
    
    document.querySelector(".statsTwo").classList.add("statsTwo-show");
    document.querySelector(".pieFour").classList.add("statsTwo-show");
    document.querySelector(".pieFive").classList.add("statsTwo-show");
    document.querySelector(".pieSix").classList.add("statsTwo-show");


});

document.querySelector(".option.MJ922").addEventListener("click",function(){
    clearSecondDataCake()

    clearSecondData();
    document.querySelector(".secondChoice").innerHTML=document.querySelector(".option.MJ922").value;   
    document.querySelector(".imageDivTwo").innerHTML = '<img src="images/jordan.png">' 
    document.querySelector(".dropdown-content-second").classList.toggle("dropdown-content-show"); 
    d3.json("json/mj92.json", function(data) {
        console.log(data)
        renderSecondStats(data);
    
    })
    d3.json("json/pieChart/mj92FG.json",function(data) {
        showSecondDataFirstCake(data)
    })
    d3.json("json/pieChart/mj923P.json",function(data) {
        showSecondDataSecondCake(data)
    })
    d3.json("json/pieChart/mj92FT.json",function(data) {
        showSecondDataThirdCake(data)
        console.log(data)

    })
    document.querySelector(".statsTwo").classList.add("statsTwo-show");
    document.querySelector(".pieFour").classList.add("statsTwo-show");
    document.querySelector(".pieFive").classList.add("statsTwo-show");
    document.querySelector(".pieSix").classList.add("statsTwo-show");

});

document.querySelector(".option.MJ882").addEventListener("click",function(){
    clearSecondData();
    clearSecondDataCake()

    document.querySelector(".secondChoice").innerHTML=document.querySelector(".option.MJ882").value;
    document.querySelector(".imageDivTwo").innerHTML = '<img src="images/jordan.png">' 
    document.querySelector(".dropdown-content-second").classList.toggle("dropdown-content-show");   
    d3.json("json/mj88.json", function(data) {
        console.log(data)
        renderSecondStats(data);
    
    })
    d3.json("json/pieChart/mj88FG.json",function(data) {
        showSecondDataFirstCake(data)
    })
    d3.json("json/pieChart/mj883P.json",function(data) {
        showSecondDataSecondCake(data)
    })
    d3.json("json/pieChart/mj88FT.json",function(data) {
        showSecondDataThirdCake(data)
        console.log(data)

    })
    document.querySelector(".statsTwo").classList.add("statsTwo-show");
    document.querySelector(".pieFour").classList.add("statsTwo-show");
    document.querySelector(".pieFive").classList.add("statsTwo-show");
    document.querySelector(".pieSix").classList.add("statsTwo-show");
 
});

document.querySelector(".option.DR952").addEventListener("click",function(){
    clearSecondData();
    clearSecondDataCake()

    document.querySelector(".secondChoice").innerHTML=document.querySelector(".option.DR952").value;  
    document.querySelector(".imageDivTwo").innerHTML = '<img src="images/robinson.png">' 
    document.querySelector(".dropdown-content-second").classList.toggle("dropdown-content-show"); 
    d3.json("json/robinson.json", function(data) {
        console.log(data)
        renderSecondStats(data);
    
    })
    d3.json("json/pieChart/robinsonFG.json",function(data) {
        showSecondDataFirstCake(data)
    })
    d3.json("json/pieChart/robinson3P.json",function(data) {
        showSecondDataSecondCake(data)
    })
    d3.json("json/pieChart/robinsonFT.json",function(data) {
        showSecondDataThirdCake(data)
        console.log(data)

    })
    document.querySelector(".statsTwo").classList.add("statsTwo-show");
    document.querySelector(".pieFour").classList.add("statsTwo-show");
    document.querySelector(".pieFive").classList.add("statsTwo-show");
    document.querySelector(".pieSix").classList.add("statsTwo-show");

});

document.querySelector(".option.CH2").addEventListener("click",function(){
    clearSecondData();
    clearSecondDataCake()

    document.querySelector(".secondChoice").innerHTML=document.querySelector(".option.CH2").value;  
    document.querySelector(".imageDivTwo").innerHTML = '<img src="images/chuck.png">' 
    document.querySelector(".dropdown-content-second").classList.toggle("dropdown-content-show"); 
    d3.json("json/chuck.json", function(data) {
        console.log(data)
        renderSecondStats(data);
    
    })
    d3.json("json/pieChart/chuckFG.json",function(data) {
        showSecondDataFirstCake(data)
    })
    d3.json("json/pieChart/chuck3P.json",function(data) {
        showSecondDataSecondCake(data)
    })
    d3.json("json/pieChart/chuckFT.json",function(data) {
        showSecondDataThirdCake(data)
        console.log(data)

    })
    document.querySelector(".statsTwo").classList.add("statsTwo-show");
    document.querySelector(".pieFour").classList.add("statsTwo-show");
    document.querySelector(".pieFive").classList.add("statsTwo-show");
    document.querySelector(".pieSix").classList.add("statsTwo-show");
 
});

document.querySelector(".option.KM2").addEventListener("click",function(){
    clearSecondData();
    clearSecondDataCake()

    document.querySelector(".secondChoice").innerHTML=document.querySelector(".option.KM2").value;   
    document.querySelector(".imageDivTwo").innerHTML = '<img src="images/malone.png">' 
    document.querySelector(".dropdown-content-second").classList.toggle("dropdown-content-show"); 
    d3.json("json/km.json", function(data) {
        console.log(data)
        renderSecondStats(data);
    
    })
    d3.json("json/pieChart/kmFG.json",function(data) {
        showSecondDataFirstCake(data)
    })
    d3.json("json/pieChart/km3P.json",function(data) {
        showSecondDataSecondCake(data)
    })
    d3.json("json/pieChart/kmFT.json",function(data) {
        showSecondDataThirdCake(data)
        console.log(data)

    })
    document.querySelector(".statsTwo").classList.add("statsTwo-show");
    document.querySelector(".pieFour").classList.add("statsTwo-show");
    document.querySelector(".pieFive").classList.add("statsTwo-show");
    document.querySelector(".pieSix").classList.add("statsTwo-show");

});

document.querySelector(".option.HO2").addEventListener("click",function(){
    clearSecondData();
    clearSecondDataCake()

    document.querySelector(".secondChoice").innerHTML=document.querySelector(".option.HO2").value;    
    document.querySelector(".imageDivTwo").innerHTML = '<img src="images/hakeem.png">' 
    document.querySelector(".dropdown-content-second").classList.toggle("dropdown-content-show");
    d3.json("json/hakeem.json", function(data) {
        console.log(data)
        renderSecondStats(data);
    
    })
    d3.json("json/pieChart/hakeemFG.json",function(data) {
        showSecondDataFirstCake(data)
    })
    d3.json("json/pieChart/hakeem3P.json",function(data) {
        showSecondDataSecondCake(data)
    })
    d3.json("json/pieChart/hakeemFT.json",function(data) {
        showSecondDataThirdCake(data)
        console.log(data)

    })
    document.querySelector(".statsTwo").classList.add("statsTwo-show");
    document.querySelector(".pieFour").classList.add("statsTwo-show");
    document.querySelector(".pieFive").classList.add("statsTwo-show");
    document.querySelector(".pieSix").classList.add("statsTwo-show");

});

document.querySelector(".option.MJ2").addEventListener("click",function(){
    clearSecondData();
    clearSecondDataCake()

    document.querySelector(".secondChoice").innerHTML=document.querySelector(".option.MJ2").value;    
    document.querySelector(".imageDivTwo").innerHTML = '<img src="images/magic.png">' 
    document.querySelector(".dropdown-content-second").classList.toggle("dropdown-content-show");
    d3.json("json/magic.json", function(data) {
        console.log(data)
        renderSecondStats(data);
    
    })
    d3.json("json/pieChart/magicFG.json",function(data) {
        showSecondDataFirstCake(data)
    })
    d3.json("json/pieChart/magic3P.json",function(data) {
        showSecondDataSecondCake(data)
    })
    d3.json("json/pieChart/magicFT.json",function(data) {
        showSecondDataThirdCake(data)
        console.log(data)

    })
    document.querySelector(".statsTwo").classList.add("statsTwo-show");
    document.querySelector(".pieFour").classList.add("statsTwo-show");
    document.querySelector(".pieFive").classList.add("statsTwo-show");
    document.querySelector(".pieSix").classList.add("statsTwo-show");
    

});