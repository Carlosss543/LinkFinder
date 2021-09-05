function filter(){
    var value = document.getElementById("finder").value.toUpperCase();
    var container = document.getElementById("searchContainer");
    var div = container.getElementsByTagName("div");

    for (var i = 0 ; i < div.length ; i++){
        var h6 = div[i].getElementsByTagName("h6")[0];
        if(h6.innerHTML.toUpperCase().indexOf(value) > -1){
            div[i].style.display = "";
        }else{
            div[i].style.display = "none";
        }
    }
}



function unfold(){
    var elements = document.getElementsByClassName("unfold");
    for(let i = 0; i < elements.length; i++){
        elements[i].addEventListener("click", function(){
            this.classList.toggle("active");
        })
    }
}