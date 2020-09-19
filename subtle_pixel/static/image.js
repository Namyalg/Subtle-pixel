var image; //create global var image

function upload(){
      var imgcanvas1 = document.getElementById("can1");
      var fileinput = document.getElementById("finput");
      var filename = fileinput.value;
      image = new SimpleImage(fileinput); //make this variable Gloabl. SimpleImage library is from dukelearntoprogram.com
      image.drawTo(imgcanvas1); //included in SimpleImage Library
}

