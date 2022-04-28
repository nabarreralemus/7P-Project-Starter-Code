$("button").click(function(){
   let variable1 = $(".a").val(); 
    let variable2=$(".b").val();
    let variable3=$(".c").val();
    
    let variable4=variable1 * 52 * 28;
    
    $(".fortune-display").append(
       variable3+"you will eat"+variable2+" pupusas"+variable4+ " times.");
    
    
    
    
     console.log(variable1,variable2,variable3);
});