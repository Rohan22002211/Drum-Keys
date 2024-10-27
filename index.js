// for( var i = 0 ; i < 7 ; i++ )
// {
//     document.getElementsByClassName("drum")[i].addEventListener("click",function(){
//         if( "W" == this.innerHTML)
//         {
//             var audio = new Audio("sounds/crash.mp3");
//             audio.play();
//         }
//         if( "A" == this.innerHTML)
//         {
//             var audio = new Audio("sounds/kick-bass.mp3");
//             audio.play();
//         }
//         if( "S" == this.innerHTML)
//         {
//             var audio = new Audio("sounds/snare.mp3");
//             audio.play();
//         }
//         if( "D" == this.innerHTML)
//         {
//             var audio = new Audio("sounds/tom-1.mp3");
//             audio.play();
//         }
//         if( "J" == this.innerHTML)
//         {
//             var audio = new Audio("sounds/tom-2.mp3");
//             audio.play();
//         }
//         if( "K" == this.innerHTML)
//         {
//             var audio = new Audio("sounds/tom-3.mp3");
//             audio.play();
//         }
//         if( "L" == this.innerHTML)
//         {
//             var audio = new Audio("sounds/tom-4.mp3");
//             audio.play();
//         }
//     });
// }

// // this.addEventListener("keypress",function(event){
//             //     if(event.key === "W")
//             //     {
//             //         // event.preventDefault();
//             //         var audio = new Audio("sounds/crash.mp3");
//             //         audio.play();
//             //     }
//             // })

// // Add event listener on keypress
// // document.addEventListener('keypress', (event) => {
// //     var name = event.key;
// //     var code = event.code;
// //     // Alert the key name and key code on keydown
// //     alert(`Key pressed ${name} \r\n Key code value: ${code}`);
// //   }, false);

// document.addEventListener("keypress",(event)=>{
//     var name = event.key;
//     var code = event.code;
//     if(code == "KeyW")
//     { var audio = new Audio("sounds/crash.mp3"); 
//       audio.play();
//     }

//     if( "a" == name)
//     {
//         var audio = new Audio("sounds/kick-bass.mp3");
//         audio.play();
//     }
//     if( "KeyS" == code)
//     {
//         var audio = new Audio("sounds/snare.mp3");
//         audio.play();
//     }
//     if( "KeyD" == code)
//     {
//         var audio = new Audio("sounds/tom-1.mp3");
//         audio.play();
//     }
//     if( "j" == name)
//     {
//         var audio = new Audio("sounds/tom-2.mp3");
//         audio.play();
//     }
//     if( "k" == name)
//     {
//         var audio = new Audio("sounds/tom-3.mp3");
//         audio.play();
//     }
//     if( "l" == name)
//     {
//         var audio = new Audio("sounds/tom-4.mp3");
//         audio.play();
//     }
// })

// detecting click on button
for(var i =0 ; i<7 ; i++){
    document.getElementsByClassName("drum")[i].addEventListener('click',function(){
        var soundname = this.innerHTML;
        makesound(soundname);
    })
}

// detecting keyboard button
document.addEventListener('keypress',(event)=>{
    var keyname = event.key;
    var keycode = event.code;
    makesound(keyname);
    makesound(keycode);
});

// Function for making sound
function makesound(sound){
    switch(sound){
        case('W'|| 'w'):
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
        break;
        case("A"||'KeyA'):
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
        break;
        case('S'|| 'KeyS'):
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
        break;
        case('D'|| 'KeyD'):
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
        break;
        case('J'|| 'KeyJ'):
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
        break;
        case('K'|| 'KeyK'):
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
        break;
        case('L'|| 'KeyL'):
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
        break;
    }

}