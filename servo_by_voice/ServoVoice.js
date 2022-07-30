let talk=""; // the talking tha will be written
let a=true; // an indicator for the button to now when start or stop
let serial;



if ("serial" in navigator) {
//to check if the browser support the web serial API  

if ("webkitSpeechRecognition" in window) { 
  /* to check if the 
browser support the speech recognition*/

   let speech  = new webkitSpeechRecognition();
   
   
   // creat an object from the speech recognition class

   speech.continuous= false;

   // this makes the speech recognition listening for a phrase & stop

   


    speech.lang ="en";
    // set the language to be english

   
   
   speech.interimResults=true;

   // this will write while you talking


   speech.onstart=function() {

    document.getElementById("start").value="stop";

    // when starting ,change the button name into stop 

    document.getElementById("lable").style.display="block";

    /* showing the label when starting 
    as indicator for the user to speak*/

    a=false; 
    // so if you press the button again the recognition will stop

    console.log("start"); 


   }


   speech.onend=function(){

    

    document.getElementById("start").value="start";

    // when finishing ,change the button name into start

    document.getElementById("lable").style.display="none";

    // hiding the label

    a=true;

    

    // so if you press the button again the recognition will start

    console.log("end");
    
    
     

   }

   speech.onError=function(){

    console.log("error");

    window.alert("there is an error happen , please refresh the page");

    // if error occur ,so asking the user to refresh the page

   }

   speech.onresult=function(event){

    


    talk = event.results[0][0].transcript;

    // taking the speech & converting it to text


    document.getElementById("txtarea").value=talk;

    // write the speech into the textarea


    talk=talk.trim();
    // elminate the spacesin the beginning

    talk=talk+"%"; /* an indicator for the arduino 
    in case there another symbols that sent with the message*/

    
    

    
    

   };
   

   async function send2arduino(command){

    serial = await navigator.serial.requestPort();

    // make the user choose the device he want to communicate with

   
    await serial.open({ baudRate: 9600 });

    // Waiting the serial port to open.

    console.log("open");


    const encoder = new TextEncoder();
    const ArduinoSender = serial.writable.getWriter();
   

    

    // create a writer that translate the text to ASCII code 

    // check wether to move left or right 

       await ArduinoSender.write(encoder.encode(command));

        // send the direction to the arduino
        console.log(command) 


     


     await ArduinoSender.close();

     

     await serial.close();

     console.log("closed")

     //closing the port

    

   }

   

    document.getElementById("start").onclick= function(){

      // when clicking the button based in the indicator a 
      // the program decide to stsrt or stop the speech recognition

      if (a==true)
      { 
        speech.start();
      } else
      {
        speech.stop();
      }



      document.getElementById("send").onclick= function(){



        
        

        send2arduino(talk);
        //send the direction to the arduino
        
        
        




        console.log("talk= "+talk);



      }




      
  }

  } else {
    // if the browser dosen't support speech Recognition
    // a masseage will show up to notify him
    window.alert("Your browser doesn't support Speech Recognition ")
  } 

  
} else{
  // if the browser dosen't support the web serial API
    // a masseage will show up to notify him
  window.alert("Your browser doesn't support the web serial API ") }