


const galleryitems = [
    {
        src:"images/1.jpg",
        caption:"This picture was downloaded from google to win 100 cedis feel free to comment",

        comments:[
            {
                user:"blackmann",
                comment:"This pic so dope boy"
            }
            ,{
                user:"Whyte",
                comment:"NIce"
            }
        ]
       
    },
    {
        src:"images/2.jpg",
        caption:"The picture was download from whyte studios",

        comments:[
            {
                user:"Kojo",
                comment:"Cool pic"
            }
        ]
    },
    {
        src:"images/3.jpg",
        caption:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",

        comments:[
              
        ]
    },
    {
        src:"images/4.jpg",
        caption:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ",

        comments:[
            {
                user:"Kofi",
                comment:"What camera do u use ?"
            }
        ]
    },
    {
        src:"images/5.jpg",
        caption:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        comments:[]

        
        
    },
    {
        src:"images/6.jpg",
        caption:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat sapien ipsum, quis malesuada augue pellentesque rutrum.",

        comments:[
            {
                user:"Samuel",
                comment:"Tswww"
            }
        ]
    },
    {
        src:"images/7.jpg",
        caption:"TIn sagittis aliquet mauris a pulvinar. Donec placerat volutpat mi, eu efficitur urna tempor non. ",

        comments:[
            {
                user:"NoobSLayer452",
                comment:"Bot pic"
            }
        ]
    },

];

var index = 0;
var comindex= 0;
var comsize;
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const gallview = document.getElementById('gallery');
const cap = document.getElementById('caption');
var uname = document.getElementById('username').value;
var  comfield = document.getElementById('comfield').value;
const combutton = document.getElementById('combutton');
comsection = document.getElementById('com');
 

function refresh(){
    comsection.innerHTML = "";
    document.getElementById('username').value =""
    document.getElementById('comfield').value =""

}

function fullscrn(){
    gallview.requestFullscreen().catch((e) =>{

    });
}




    function printcomment(){
     comsize = galleryitems[index].comments.length;
     var i;
     comnum = galleryitems[index].comments.length;
    
     if(comnum=0){

     }
     else{
        
        for(i=0;i<comsize;i++){
            
            var comappend = "<br><div class='row' id='comsection'><div class='col-'><img src="+galleryitems[index].src+" ></div><div class='col'><strong>"+galleryitems[index].comments[i].user+"</strong><div class='comtext'>"+galleryitems[index].comments[i].comment+"</div></div></div>";
            $('#com').append(comappend);
     
                  
          }

     }
      
    }

    
    

function onClicknext(){
    refresh();
    document.getElementById('com').innerHTML ="";
    document.getElementById('val').innerText = ""
    var size = galleryitems.length -1;
    if(index==size){
        index = 0;
        
        gallview.src = galleryitems[index].src;
        cap.innerText = galleryitems[index].caption;
        
        printcomment();
    }
    else{
        index = index +1;
        gallview.src = galleryitems[index].src;
        cap.innerText = galleryitems[index].caption;
        
        printcomment();

    }
   
    

};

function onClickprev(){
    refresh();
    document.getElementById('com').innerHTML ="";
    document.getElementById('val').innerText = ""
    var size = galleryitems.length -1;
    if(index==0){
        index = size;
        gallview.src = galleryitems[index].src;
        cap.innerText = galleryitems[index].caption;
        printcomment();

    }
    else{
        index = index -1;
    gallview.src = galleryitems[index].src;
    cap.innerText = galleryitems[index].caption;
    printcomment();

    }
    
    
};



function oncomment(){
 if(document.getElementById('username').value.length<1){
    document.getElementById('val').innerHTML = "Please enter a username"
 }
  else if(document.getElementById('comfield').value.length<1){
      document.getElementById('val').innerText = "Please enter a valid comment"
  }

  else {

      document.getElementById('val').innerText = ""
      user = document.getElementById('username').value; 
      comment = document.getElementById('comfield').value; 

      var addcomment = {
          "user":user,
          "comment":comment
      };

      galleryitems[index].comments.push(addcomment);
      refresh();
      printcomment();
     


     

      
  }

}





prev.onclick = onClickprev
next.onclick = onClicknext;
combutton.onclick = oncomment;

gallview.ondblclick = fullscrn;


printcomment();
