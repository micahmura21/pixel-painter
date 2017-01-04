function getBackgroundColor(idName){
  var element=document.getElementById(idName); 
  console.log (element)
  var style=window.getComputedStyle(element,null).getPropertyValue("background-color");
  console.log (style)
  console.log 
}

 function changeColorOnClick(idName){
 	var originalElementColor=document.getElementById("selectedColorName").style.backgroundColor;
	document.getElementById(idName).style.backgroundColor = originalElementColor

 	
 }
