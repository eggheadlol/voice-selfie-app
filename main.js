var speechrec= window.webkitSpeechRecognition;
var rec=new speechrec();

function start(){

    document.getElementById("textbox").innerHTML="";
    rec.start();
}
rec.onresult=function run(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    if (content=="take my selfie"){

        speak();
    }
}

function speak(){

    var synth=window.speechSynthesis;
    speak_data="taking your selfie in 5 seconds";
    var utter=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter);
    Webcam.attach(camera);
    setTimeout(function(){

        take_snapshot();
        save();
    },5000)
    
}
Webcam.set({

 width:350,height:250,image_format:"png",png_quality:90
});                                                                                                                                                                                                                                                                                                                                                                                                
camera= document.getElementById("camera")

function take_snapshot(){
Webcam.snap(function(data_uri){

    document.getElementById("result").innerHTML="<img id='selfie_image' src='"+data_uri+"'>"
});

}

function save(){

    link=document.getElementById("link")
    image=document.getElementById("selfie_image").src
    link.href=image;
    link.click()
}