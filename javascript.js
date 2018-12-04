function tracker() {
  var A=parseInt(document.getElementById('a').value);
  var B=parseInt(document.getElementById('b').value);
  var C=parseInt(document.getElementById('c').value);
  var view=document.getElementById('return');


  if(A + B > C && A + C > B && B + C > A){
    if (A == B && B == C){
      view.innerHTML='Equilateral Triangle';
    }
    else if(A == B || B == C || A == C){
      view.innerHTML='Isosceles Triangle';
    }
    else{
      view.innerHTML="Scalene Triangle"
    }
  }
  else if(isNaN(A) || isNaN(B) || isNaN(C)){
    view.innerHTML='not a number';
  }
  else {
    view.innerHTML='not a triangle';
  }
}
