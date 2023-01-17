let all=document.getElementById('all');
let videos=document.getElementById('videos');
let audios=document.getElementById('audio');
let text=document.getElementById('text');
all.addEventListener('click',()=>{
    if(all.checked==false)document.getElementsByClassName('results').item(0).style.display='none';
    else document.getElementsByClassName('results').item(0).style.display='flex';
})
videos.addEventListener('click',()=>{
        for(let video of document.getElementsByClassName('results__result')){
            console.log(video.getElementsByClassName('format')[0].innerText);
            if(video.getElementsByClassName('format')[0].innerText=='Video'){
                if(videos.checked==true){video.style.display='flex'}
                else{video.style.display='none'}
            }
        }
})
audios.addEventListener('click',()=>{
    for(let audio of document.getElementsByClassName('results__result')){
        console.log(audio.getElementsByClassName('format')[0].innerText);
        if(audio.getElementsByClassName('format')[0].innerText=='Audio'){
            if(audios.checked==true){audio.style.display='flex'}
            else{audio.style.display='none'}
        }
    }
})