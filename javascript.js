function tracker() {
  var a=parseInt(getElementById('a').value);
  var b=parseInt(getElementById('b').value);
  var c=parseInt(getElementById('c').value);
  var return=document.getElementById('return');


  if(A + B > C && A + C > B && B + C > A){
    if (A == B && B == C){
      return.innerHTML='Equilateral Triangle';
    }
    else if(A == B || B == C || A == C){
      return.innerHTML='Isosceles Triangle';
    }
    else(){
      return.innerHTML="Scalene Triangle"
    }
  }
}
