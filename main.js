function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier('MobileNet', modelLoaded);
}
function modelLoaded() {
  console.log('Model Loaded!');
}

function preload() {
  classifier = ml5.imageClassifier('DoodlNet')
}

function draw() {
  image(video, 0, 0, 300, 300);
    classifier.classify(video, gotResult);
}
function gotResult(error, results) {
  if (error) {
      console.error(error);
  }  else { 
      if ((results[0].confidence > 0.5) (previous_results != results[0].label)){
  console.log(results);
  previous_result = results[0].label;
  var synth = window.speechSynthesis;
  speak_data = 'El objeto detectado es - '+results[0].label;
  var utterThis = new SpeechSynthesisUtterance(speak_data);
  document.getElementById('label').innerHTML = 'Etiqueta: ' + results[0].label;

  document.getElementById('confidence ').innerHTML = 'Confianza: ' + Math.round(results[0].confidence * 100) + '%';

  utterThis = new SpeechSynthesisUtterance(results[0].label);
  synth.speak(utterThis);
      }
  }
}



