function openModal() {
  document.getElementById("large").style.visibility = "visible";
  document.getElementById("table").style.opacity = "0.2";
  document.getElementById("largeP").src = "photos/"+ index +".jpg";

}

function closeModal() {
  document.getElementById("large").style.visibility = "hidden";
  document.getElementById("table").style.opacity = "1";
}

var index = 1;


function currentSlide(n) {
  index = n;
}

function left() {
  if(index == 1){
    document.getElementById("largeP").src = "photos/1.jpg";
  }
  else{
    if(index > 1){
      index--;
    document.getElementById("largeP").src = "photos/"+ index +".jpg";
  } else{
    document.getElementById("largeP").src = "photos/1.jpg";
  }
  }
}

function right() {
  if(index == 12){
    document.getElementById("largeP").src = "photos/12.jpg";
  }
  else{
    if(index < 13){
    index++;
      document.getElementById("largeP").src = "photos/"+ index +".jpg";
    } else{
      document.getElementById("largeP").src = "photos/12.jpg";
    }
  }
}