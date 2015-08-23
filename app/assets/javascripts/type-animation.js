$(document).ready(function(){

  $("#type-animation").typed({
    strings: ["impress", "wow", "sell", "excite"],
    typeSpeed: 30,
    backSpeed: 30,
    backDelay: 1000,
    loop: true,
  });

  // var words = ["impress", "sell", "excite", "wow", "last"];
  // var index = 0;
  // var word = words[index];
  // var progress = 0;
  //
  // // var changeWord = function(){
  // //   if (index < words.length){
  // //     index += 1;
  // //   } else {
  // //     index = 0;
  // //   };
  // //   word = words[index];
  // //   console.log("now the word is" + word);
  // // };
  //
  // var showWord = function(){
  //   word = words[index].slice(0, progress);
  //   $('#type-animation').html(word);
  //   typing = true;
  //   progress+= 1;
  //   console.log(word);
  //   if (progress === words[index].length + 1){
  //     clearInterval(handleShow);
  //   }
  // };
  //
  // var handleShow = setInterval(showWord, 200);
  //
  // // var deleteWord = function(){
  // //   word = words[index].slice(0, progress);
  // //   $('#type-animation').html(word);
  // //   typing = true;
  // //   progress-= 1;
  // //   console.log(word);
  // //   if (progress === 0){
  // //     clearInterval(handleShow);
  // //   }
  // // };
  // //
  // // var handleDelete = setInterval(deleteWord, 200);
  //
  // if (progress < words[index].length + 1){
  //   handleShow;
  // };


});
