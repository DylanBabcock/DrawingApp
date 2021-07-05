window.addEventListener("load", () => {//load when ready
  const canvas = document.querySelector("#canvas");//retreaves canvas element

  const ctx = canvas.getContext("2d");

  //Resizing
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;


    let painting = false;


    //functions
    function startPosition(e){//When you click
      painting = true;
      draw(e);
    }
    function finishedPosition(){//release mouse click
      painting = false;
      ctx.beginPath();// reset line path
    }
    function draw(e){
      if(!painting) return;
      ctx.lineWidth = 10;
      ctx.lineCap = "round";

      ctx.lineTo(e.clientX, e.clientY);
      ctx.stroke();
      ctx.beginPath();// reset line path
      ctx.moveTo(e.clientX, e.clientY);



    }
    //EventListeners
    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', finishedPosition);
    canvas.addEventListener('mousemove', draw);






    // ctx.strokeStyle = "red";
    // ctx.lineWidth = 5;
    //
    // //ctx.fillRect(50,50, 200, 200)
    // ctx.strokeRect(50,50, 200, 200);
    // ctx.strokeRect(100,50, 100, 200);



});
