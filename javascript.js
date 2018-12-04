function tracker() {
  var a=parseInt(getElementById('a').value);
  var b=parseInt(getElementById('b').value);
  var c=parseInt(getElementById('c').value);
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
  else if
}
