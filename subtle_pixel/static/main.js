/*if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
            img.src = img.dataset.src;
        });
    } else {
         const script = document.createElement('script');
         script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.1.2/lazysizes.min.js';
        document.body.appendChild(script);
 }
*/

var firebaseConfig = {
        apiKey: "AIzaSyD0QgDykDAjMHgRX8CICzoeGb-3X6xbYIw",
        authDomain: "subtle-pixel.firebaseapp.com",
        databaseURL: "https://subtle-pixel.firebaseio.com",
        projectId: "subtle-pixel",
        storageBucket: "subtle-pixel.appspot.com",
        messagingSenderId: "185634870572",
        appId: "1:185634870572:web:bf1ed197e37dab616d0889"
      };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();
var info = database.ref().child("Customer_sign_in");

function add(name, email, pswd){
    var details = {
        Name : name,
        Email:email,
        Password:pswd,
    };
    email = email.replace(".", "");
    info.child(email).set(details);
};

function verify(email, pswd) {
    email = email.replace("@", "").replace(".","");
    info.on("value", gotData); 
    function gotData(data){
        data = data.val();
        console.log("data");
        console.log(data);
        let keys = Object.keys(data);
        console.log(keys.length);
        var present = keys.includes(email);
        if (present == true) {
            for (var i = 0; i < keys.length; i++) {
                    if (keys[i] == email) {
                        console.log(data[email]);
                        if (data[email].Password == pswd){
                        //alert("All correct");
                        var user = data[email].Name;
                        window.location.replace("http://localhost:5000/dashboard/"+user);
                        }
                    }
                }
            }
            else{
                alert("Stay Calm And Enter The Correct password");
                document.getElementById("email") = "";
                document.getElementById("pswd") = "";

            }
    }
};


var image; //create global var image

function upload(){
      var imgcanvas1 = document.getElementById("can1");
      var fileinput = document.getElementById("finput");
      var filename = fileinput.value;
      image = new SimpleImage(fileinput); //make this variable Gloabl. SimpleImage library is from dukelearntoprogram.com
      image.drawTo(imgcanvas1); //included in SimpleImage Library
}





/*

var textWrapper = document.querySelector('#vanta .ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
anime.timeline({loop: true})
  .add({
          targets: '#vanta .ml12 .letter',
          translateX: [40,0],
          translateZ: 0,
          opacity: [0,1],
      easing: "easeOutExpo",
          duration: 1200,
          delay: (el, i) => 500 + 30 * i
        }).add({
                targets: '#vanta .ml12 .letter',
                translateX: [0,-30],
        opacity: [1,0],
                easing: "easeInExpo",
                duration: 1100,
                delay: (el, i) => 100 + 30 * i
        });
*/
