var colors=[];
var pickedColor;
var num=6;
var squares=document.querySelectorAll(".square");
var resetButton=document.querySelector("#reset");
var colorDisplay=document.querySelector("#colorDisplay");
var message=document.getElementById("message");
var h1=document.querySelector("h1");
var modeButtons=document.querySelectorAll(".mode");


init();
function init()
{
    setupSquares();
    squareListeners();
    reset();
    
}
function setupSquares()
{
    for(var i=0;i<modeButtons.length;i++)
    {
        modeButtons[i].addEventListener("click",function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            if(this.textContent=== "Easy")
                num=3;
            else
                num=6;
            reset();
        });
    }
}
function squareListeners()
{
    for(var i=0;i<squares.length;i++)
    {
    // squares[i].style.backgroundColor=colors[i];
    squares[i].addEventListener("click",function()
    {
        var clickedColor=this.style.backgroundColor;
        if(clickedColor===pickedColor)
        {
            changeColors(pickedColor);
            message.textContent="CORRECT!";
            h1.style.background=pickedColor;
            resetButton.textContent="PLAY AGAIN?";
        }
        else
        {
            this.style.background="#232323";            
            message.textContent="TRY AGAIN!";
        }
    });
    }
}
function reset()
{
 resetButton.textContent="NEW COLORS";   
 colors=generateRandomColors(num);
 pickedColor=colors[pickColor()];
 colorDisplay.textContent=pickedColor;
 for(var i=0;i<squares.length;i++)
 {
    if(colors[i])
    {
        squares[i].style.display="block";
        squares[i].style.backgroundColor=colors[i];            
    }
    else
        squares[i].style.display="none";
}
message.textContent="";
h1.style.background="steelblue";

}

function changeColors(color)
{
    for(var i=0;i<colors.length;i++)
    {
        squares[i].style.backgroundColor=color;
    }
}

function pickColor()
{
    var random=Math.floor(Math.random()*colors.length);
    return random;
}
function generateRandomColors(num)
{
    var arr=[];
    for(var i=0;i<num;i++)
    {
        arr.push(randomColor());
    }
    return arr;
}
function randomColor()
{
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";
}
var resetButton=document.querySelector("#reset");
resetButton.addEventListener("click",function()
{
    reset();
});
