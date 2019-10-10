module.exports=function multiply(first, second) {
  let result=new String('');
  for (let i=second.length-1;i>-1;i--) {
    for(let j=first.length-1;j>-1;j--) {
      let res=(first[j]*second[i]);
      if (res>0) {    
        result=new String (updateStringNew(result, new String(res), (second.length-i+first.length-j-1)));    
      } 
    }
    
  }
  return result.substring(0,result.length);
}

 function updateStringNew(oldRes, addition, startDigit){
  if (oldRes.length==0) return new String(addition*(10**(startDigit-1)));
  let i=oldRes.length-startDigit;
  if (i<0) return Number(addition)+oldRes;
  let sum=0;
  while(addition.length>0){
    sum=Number(oldRes[i])+Number(addition[addition.length-1]);
    addition=new String(addition.substring(0,addition.length-1));
    if(sum>9){
      sum=sum%10;
      addition=new String(Number(addition)+1);
    }
    
    oldRes=new String(oldRes.substring(0,i)+sum+oldRes.substring(i+1,oldRes.length));
    i--;
    if (i<0) return addition+oldRes;
 }
 return oldRes;
}