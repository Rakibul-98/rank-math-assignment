const handleToggle = (type) =>{
    if(type === "banner"){
        const expandDiv = document.getElementById("expand-sec");
        if (expandDiv.style.display==="none") {
            expandDiv.style.display="block";
            document.getElementById("down").style.display="none";
            document.getElementById("up").style.display="block";
        }
        else{
            expandDiv.style.display="none";
            document.getElementById("down").style.display="block";
            document.getElementById("up").style.display="none";
        }
    }
    else if(type === "menu"){
        const expandDiv = document.getElementById("menu-div");
        const mainDiv = document.getElementById("main-content-div");
        if (expandDiv.style.display==="none") {
            expandDiv.style.display="block";
            expandDiv.style.zIndex=1;
            mainDiv.style.opacity=0.3;
            document.getElementById("dot").style.display="none";
            document.getElementById("cross").style.display="block";
        }
        else{
            expandDiv.style.display="none";
            mainDiv.style.opacity=1;
            document.getElementById("dot").style.display="block";
            document.getElementById("cross").style.display="none";
        }
    }
    
}
export default handleToggle;