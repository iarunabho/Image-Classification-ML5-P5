// Your code will go here
// open up your console - if everything loaded properly you should see 0.3.0
let mobilenet;
let puffin;
function modelReady() {
    console.log('Model is ready!!')
    mobilenet.predict(puffin, gotResults);
}

function imageReady() {
    image(puffin,0,0,width,height);
}
function gotResults( error, results) {
    if(error){
        console.log(error);
    } else {
        console.log(results);
        let label = results[0].label;
        let prob = results[0].confidence;
        fill(0);
        textSize(64);
        text(label, 10, height - 100);
        createP(label);
        createP(prob);
    }
}
function setup(){
    createCanvas(640, 480);
    puffin = createImg('./images/puffin.jpg',imageReady);
    puffin.hide();
    background(0);
    mobilenet = ml5.imageClassifier('MobileNet', modelReady)   
}
