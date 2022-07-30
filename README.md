# speech_to_servo_movement
To convert the speech to servo movement using the SERIAL WEB API  
<br/> we need first to convert the voice to speech & this we have done in the first task using the voice recogonition web api
<br/> Then transfer to the arrduino via the serial port
<br/> The arduino will turn the servo in the desired angle
<br/> Here is the arduino circuit 
<br/> ![alt text](https://github.com/Maashn5/speech_to_servo_movement/blob/main/circuit%20of%20servo%20motors.png)
<br/> The HTML code
<br/> ``` html
<!DOCTYPE html>
<html lang="en">
<head>

<title> Convert Speech to Servo Movment </title>
</head>

<body>

    <h1 Align="center"> convert speech to text & servo movment </h1>
    <form>
        
       
        <center><input type="button" id="start" Value="start"/></center>
        <br/>
        <br/>
        <center><input type="button" id="send" Value="send"/></center>
        <br/>
        <br/>
        <label style="display:none; color:red ;"; id="lable";  >speak now</label>
        <br/>
        <textarea cols="130" rows="15"; id="txtarea"; style="text-align:left" > 
         
        </textarea>
    </form>
    <script src="ServoVoice.js"> </script>
</body>

</html>

```
