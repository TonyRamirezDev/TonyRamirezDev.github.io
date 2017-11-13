var home = document.getElementById("squareHome");
var projects = document.getElementById("squareProjects");
var resume = document.getElementById("squareResume");
var contact = document.getElementById("squareContact");
var active;


home.addEventListener("click", function(){
    document.getElementById("Home").style.display = "block";  
    document.getElementById("Projects").style.display = "none";
    document.getElementById("Resume").style.display = "none";  
    document.getElementById("Contact").style.display = "none";
    
    var homeContent = document.getElementById("Home");
    homeContent.classList.toggle("home-Active");

    if (active != home){ 
   home.classList.toggle("squareHome-active");
   }
   if (active == projects){
    projects.classList.toggle("squareProjects-active");
    }
    else if (active == resume){
        resume.classList.toggle("squareResume-active");
    }
    else if (active == contact){
        contact.classList.toggle("squareContact-active");
    }
    else if (active == home ){
        //do nothing
    }
   active = home;
});

projects.addEventListener("click", function(){
    document.getElementById("Home").style.display = "none";  
    document.getElementById("Projects").style.display = "block";
    document.getElementById("Resume").style.display = "none";  
    document.getElementById("Contact").style.display = "none";
    
    if (active != projects){ 
    projects.classList.toggle("squareProjects-active");
    }
    if (active == home){
     home.classList.toggle("squareHome-active");
     }
     else if (active == resume){
         resume.classList.toggle("squareResume-active");
     }
     else if (active == contact){
         contact.classList.toggle("squareContact-active");
     }
     else if (active == projects){
         //do nothing
     }
    active = projects;
 });

 contact.addEventListener("click", function(){
    document.getElementById("Home").style.display = "none";  
    document.getElementById("Projects").style.display = "none";
    document.getElementById("Resume").style.display = "none";  
    document.getElementById("Contact").style.display = "block";
    
    if (active != contact){ 
        contact.classList.toggle("squareContact-active");
    }
    if (active == home){
     home.classList.toggle("squareHome-active");
     }
     else if (active == resume){
         resume.classList.toggle("squareResume-active");
     }
     else if (active == projects){
         projects.classList.toggle("squareProjects-active");
     }
     else if (active == contact){
         //do nothing
     }
    active = contact;
 });

resume.addEventListener("click", function(){
    document.getElementById("Home").style.display = "none";  
    document.getElementById("Projects").style.display = "none";
    document.getElementById("Resume").style.display = "block";  
    document.getElementById("Contact").style.display = "none";
    
    if (active != resume){ 
        resume.classList.toggle("squareResume-active");
    }
    if (active == home){
     home.classList.toggle("squareHome-active");
     }
     else if (active == contact){
        contact.classList.toggle("squareContact-active");
     }
     else if (active == projects){
         projects.classList.toggle("squareProjects-active");
     }
     else if (active == resume){
         //do nothing
     }
    active = resume;
 });