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
}
function setup()
{
    canvas = createCanvas(640, 420)
    canvas.center()
}
function draw()
{
    image(img, 0, 0, 640, 420)
}