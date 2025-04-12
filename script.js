// Add JavaScript code for your web site here and call it from index.html.
function toggleTip(){
    const tip = document.getElementById("tips");
    console.log("hi");
    if(tip.style.display === "none"){
        tip.style.display = "block";
    }
    else{
        tip.style.display = "none";
    }
}


function toggle(){
    console.log("a");
    const a = document.getElementById('afterwards');
    const b = document.getElementById('info')
    const c = document.getElementById("c");
    const d = document.getElementById("d");

    if(c.checked || d.checked){
    b.style.display = "none";
    a.style.display = "block";
    }
}
