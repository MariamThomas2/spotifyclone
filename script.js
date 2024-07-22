function playAll(songNumber){
    var audioElement=document.getElementById("song");
    var playBtn=document.getElementById("play-pause");
    var songFileName="music/"+songNumber+".mp3";
    var currentrow=document.getElementById("song"+songNumber);

    if(audioElement.getAttribute("src")==songFileName && !audioElement.paused){
        audioElement.pause();
        playBtn.innerHTML='<img src="images/play-button.svg">';//to change the play and pause bttn according to playing.
        currentrow.classList.remove("highlight");
    }
    else{
        audioElement.setAttribute("src",songFileName);
        audioElement.play();
        playBtn.innerHTML='<img src="images/pause-button.svg">';
        currentrow.classList.add("highlight");
    }
}

function playaudio(){
    var audioElement=document.getElementById("song");
    var playBtn=document.getElementById("play-pause");
    if(audio.paused){
       audio.play();
       playBtn.innerHTML='<img src="images/pause-button.svg">';
}
else{
    audio.pause();
    playBtn.innerHTML='<img src="images/play-button.svg">'
}
}    

