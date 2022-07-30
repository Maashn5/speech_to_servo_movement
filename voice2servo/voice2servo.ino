#include <Servo.h>

Servo servo1;

String thetaString;

float theta;

void setup() {
  servo1.attach(5);
  Serial.begin(9600);

// set the servo to their initial position  
servo1.write(0);

}

void loop() {

  
while (Serial.available()==0) {} // waiting to receive the angle   
thetaString= Serial.readStringUntil('%');// raed the angle as string
thetaString.trim();
if(thetaString=="right"){
  servo1.write(180);
  }else if (thetaString=="left")
  {servo1.write(0);}




}
