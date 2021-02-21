submit1.onclick = function(){
    var a = 500;
    
    if(document.getElementById('education').value == document.getElementById('edu1').value )
        a=a*1.5;        
    else if(document.getElementById('education').value == document.getElementById('edu2').value)
         a=a*1.2;
     else if(document.getElementById('education').value == document.getElementById('edu3').value) 
        a=a*1.05;
        else if(document.getElementById('education').value == document.getElementById('edu4').value)
        a=a*0.9;
        
    if(document.getElementById('networth').value == document.getElementById('networth1').value) 
    a=a*2;
    else if (document.getElementById('networth').value == document.getElementById('networth2').value)
    a=a*1.5;
    else if (document.getElementById('networth').value == document.getElementById('networth3').value)
    a=a*1.2;

    
    if ( $('#skill1').is(':checked') ) a+=100;
    if ( $('#skill2').is(':checked') ) a+=200;
    if ( $('#skill3').is(':checked') ) a+=150;
    if ( $('#skill4').is(':checked') ) a+=100;

    if ( $('#radio-1').is(':checked') ) a*=2;
    if ( $('#radio-2').is(':checked') ) a*=1.2;
    if ( $('#radio-3').is(':checked') ) a*=0.9;

    if ( $('#reputation1').is(':checked') ) a*=0.85;
    if ( $('#reputation2').is(':checked') ) a*=0.9;
    if ( $('#reputation3').is(':checked') ) a-=200;

   
   document.getElementById('res').innerHTML="Results: = " + a;
 


}