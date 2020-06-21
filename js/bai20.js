var str = 'computer = " ngan 98 " AND class = " REACTJS2002 "'; 
 var res = str.match(/(\"\s.*?\s\")/g);
 document.getElementById("demo").innerHTML = res;
 
 for(var i=0;i<res.length;i++){
   var res1 = res[i].replace('" ','"')
     res1 = res1.replace(' "','"')
     str = str.replace(res[i],res1)
 }