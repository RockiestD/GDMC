function abreMenu(){
    var m = document.getElementById("menu");
    var n = document.getElementById("menu1");
    
    if(m.style.display=="none"){
        m.style.display="flex";
        m.style.position="absolute";
        m.style.left="175px";
        m.style.top="130px";
        m.style.zIndex="2";
    } else {
        m.style.display="none";
    }
    
    if(n.style.display=="none"){
        n.style.display="flex";
        n.style.alignItems="center";
        n.style.position="absolute";
        n.style.left="175px";
        n.style.top="160px";
        n.style.zIndex="2";
    } else {
        n.style.display="none";
    }
}