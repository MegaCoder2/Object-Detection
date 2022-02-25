var result = []
var ml5status = ""
var errordetect = false
var i
function bedroom()
{
    window.location = "/test1.html"
}
function tv()
{
    window.location = "/test2.html"
}
function desk()
{
    window.location = "/test3.html"
}
function bottles()
{
    window.location = "/test4.html"
}
function fruitbasket()
{
    window.location = "/test5.html"
}
img = ""
function preload()
{
    img = loadImage("bedroom.jpg")
    img2 = loadImage("tv.png")
    img3 = loadImage("desk.jpg")
    img4 = loadImage("bottles.jpg")
    img5 = loadImage("fruits.jpg")
}
function setup()
{
    if(window.location.pathname == "/test1.html")
    {
        canvas = createCanvas(480, 404)
    }
    else if(window.location.pathname == "/test2.html")
    {
        canvas = createCanvas(850, 567)
    }
    else if(window.location.pathname == "/test3.html")
    {
        canvas = createCanvas(400, 400)
    }
    else if(window.location.pathname == "/test4.html")
    {
        canvas = createCanvas(1024, 512)
    }
    else if(window.location.pathname == "/test5.html")
    {
        canvas = createCanvas(350, 350)
    }
    canvas.center()
    objectDetection = ml5.objectDetector("cocossd", modelLoaded)
    document.getElementById("status").innerHTML = "Status: Detecting Objects... (may take time)"
}
function modelLoaded()
{
    console.log("Model loaded successfully!")
    ml5status = true
    if(window.location.pathname == "/test1.html")
    {
        objectDetection.detect(img, gotResult)
    }
    else if(window.location.pathname == "/test2.html")
    {
        objectDetection.detect(img2, gotResult)
    }
    else if(window.location.pathname == "/test3.html")
    {
        objectDetection.detect(img3, gotResult)
    }
    else if(window.location.pathname == "/test4.html")
    {
        objectDetection.detect(img4, gotResult)
    }
    else if(window.location.pathname == "/test5.html")
    {
        objectDetection.detect(img5, gotResult)
    }
}
function gotResult(error, results)
{
    if(error)
    {
        console.log("An error occured:" + error)
        errordetect = true
    }
    else
    {
        console.log(results)
        result = results
    }
}
function draw()
{
    if(window.location.pathname == "/test1.html")
    {
        image(img, 0, 0, 480, 404)
    }
    else if(window.location.pathname == "/test2.html")
    {
        image(img2, 0, 0, 850, 567)
    }
    else if(window.location.pathname == "/test3.html")
    {
        image(img3, 0, 0, 400, 400)
    }
    else if(window.location.pathname == "/test4.html")
    {
        image(img4, 0, 0, 1024, 512)
    }
    else if(window.location.pathname == "/test5.html")
    {
        image(img5, 0, 0, 350, 350)
    }
    if(ml5status != "")
    {
        for(var i = 0; i < result.length; i++)
        {
            fill("#ff0000")
            text(result[i].label + " (confidence: " + Math.round(result[i].confidence * 100) + "%)", result[i].x + 7.5, result[i].y + 15)
            noFill()
            stroke("#ff0000")
            rect(result[i].x, result[i].y, result[i].width, result[i].height)
            document.getElementById("status").innerHTML = "Status: Detecting Objects... (Detecting Objects " + Math.round(i + 1) + "/" + result.length + ")"
        }
        document.getElementById("status").innerHTML = "Detected " + result.length + " object(s)." 
    }
    if(errordetect == true)
    {
        document.getElementById("status").innerHTML = "An error occured, try again later."
    }
}