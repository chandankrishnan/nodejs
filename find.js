exports.ff=function(a){
  if(a==1 ||a==0)
  {
    return 1;
  }else {
    return a*exports.ff(a-1);
  }
}
