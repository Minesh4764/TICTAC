$(document).ready(function()
{
  
	var turn ="X"
    var Xresult=[];
    var Oresult=[];
	$("#Message").text("Changed Message");
        SetMessage(turn + "will start the game first");

	function SetMessage(msg) {
   
         $("#Message").text(msg);

	}

	function FinalResult(sum) {

         tableArray = [7, 56, 448, 73, 146, 292, 273, 84];

        for (var i = 0; i < tableArray.length; i += 1) {
            if ((tableArray[i] & sum) === tableArray[i]) {
                return true;
            }
        }
        return false;
    }

function checkResult() {

	var whowon=false;
    if (turn=="X") {
	    var sum = Xresult.reduce(function(a, b) { return a + b; }, 0);
         if (Xresult.length > 2) {
   	        whowon =FinalResult(sum);
          }
      }
    else{
  
       var sum = Oresult.reduce(function(a, b) { return a + b; }, 0);
         if (Oresult.length > 2) {
           whowon = FinalResult(sum);
          //var won = FinalResult(sum);
        }
      }
     

   if (whowon) {
         SetMessage(turn  + " already won.  Game Over");
         $("#Message").css("background-color","red").css("width","550px").css("border-radius","10px");
         setTimeout(function() {
          $(".Tab").hide();},3000) ;
          return true;

       }
     return false;
  //alert("CheckResutl" + sum);

}

   $("td").click(function(event){

	    var TargetTD1 = $(this).attr("id");
        var ColumnNumber = TargetTD1.slice(2);
    //alert(ColumnNumber)
        var Targetval = $("#"+TargetTD1).html();
 
   if (Targetval !="") {
         SetMessage("This Column is already Filled");
         return;
    }
	if (turn==="X") {

          Xresult.push(parseInt(ColumnNumber)) ;
          var result=    checkResult();
          console.log(Xresult);
          $("#"+TargetTD1).html(turn);
        if(!result) {  	
           $("#Message").text("Now its O turn");
         }
         turn = "O";
	} 
	else {
     
          Oresult.push(parseInt(ColumnNumber)) ;
           var result  =  checkResult();
           $("#"+TargetTD1).html(turn);
            if(!result) {  	
            $("#Message").text("Now its X turn");
        }
         turn="X"

	}


//alert(event.target.id);

});










});