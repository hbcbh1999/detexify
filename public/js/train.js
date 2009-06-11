// requires canvassify, mathtran

$(function(){
    
  function train(tex, canvas) {
    $.post("/train", { "tex": tex, "url": canvas.toDataURL(), "strokes": JSON.stringify(canvas.strokes) });
    c.clear
  }
  
  // Canvas
  var c = $("#tafel").get(0);
  var i = $("#info");
  i.text("Initialisiere Canvas...");
  canvassify(c);
  // Train if train button pressed
  $('#train').click(function(){
    train($('#tex').text(), c);
    clearCanvas(c);
    // TODO do this dynamically
    //window.location.reload();
    return false;
  });
  $('#clear').click(function(){
    clearCanvas(c);
    return false;
  });
  
  i.text("Bereit. Bitte malen!");
  mathtran.init();
});