var colors=[];
var numSquares=6;
var pickedcolor;
var squares=document.querySelectorAll('.square');
var colorDisplay=document.getElementById('colorDisplay');
var messageDisplay=document.getElementById('message');
var h1=document.querySelector('h1');
var resetButton=document.querySelector('#reset');
var modeButtons=document.querySelectorAll('.mode');
colorDisplay.textContent=pickedcolor;

init();
function init()
{ 
    setmodeButtons();
    setsquares();
    reset();
}
function setmodeButtons()
{
    for(var i=0;i<modeButtons.length;i++)   // mode buttons
    {
        modeButtons[i].addEventListener('click',function()
        {
            modeButtons[0].classList.remove('selected');
            modeButtons[1].classList.remove('selected');
            this.classList.add('selected');
            this.textContent==='Easy'? numSquares= 3 : numSquares=6;
            reset();
        });
    }
}
function setsquares()
{
    for(var i=0;i<squares.length;i++)       //checking if picked color =clicked color
    {      
        squares[i].addEventListener('click',function(){     //add listeners to all the squares
            
            var clickedColor=this.style.background;         //grabbing up the picked color
            
            
            if(clickedColor===pickedcolor){
                messageDisplay.textContent='correct!';            
                changedColor(clickedColor);
                h1.style.background=clickedColor;
                resetButton.textContent='Play Again?';
            }
            else{
            this.style.background='#232323' 
                messageDisplay.textContent='Try again!';            
            }
        });
    }
} 

function reset(){
    //1)store the changed background color
    colors=generateRandomColors(numSquares);
    //2)picked color bhi naya lena padega
    pickedcolor=pickcolor(numSquares);
    //3)Display new picked color again
    colorDisplay.textContent=pickedcolor;
    resetButton.textContent='New Colors';
    //4)random colors ko sqares mai store karwana padega
    messageDisplay.textContent='';
    for(var i=0;i<squares.length;i++)
    {
        if (colors[i])
        {   squares[i].style.display='block';
            squares[i].style.background=colors[i];
            
        }
        else{
            squares[i].style.display='none';
        }
    }
    h1.style.background='steelblue';
}

// easybtn.addEventListener('click',function(){
//     easybtn.classList.add('selected');
//     hardbtn.classList.remove('selected');
//     numSquares=3;
//     colors=generateRandomColors(numSquares);
//     pickedcolor=pickcolor(numSquares);
//     colorDisplay.textContent=pickedcolor;
//     for(var i=0;i<squares.length;i++){
//         if(colors[i])
//         {squares[i].style.background=colors[i]; 
//         }else
//         {
//             squares[i].style.display='none';
//         }
//     }
// });

// hardbtn.addEventListener('click',function(){
//     hardbtn.classList.add('selected');
//     easybtn.classList.remove('selected');
//     numSquares=6;
//     colors=generateRandomColors(numSquares);
//     pickedcolor=pickcolor(numSquares);
//     colorDisplay.textContent=pickedcolor;
//     for(var i=0;i<squares.length;i++)
//     {
//         squares[i].style.background=colors[i];
//         squares[i].style.display='block'; 
//     }

// });

resetButton.addEventListener('click',function(){    //rest the colors
    reset();
});


function changedColor(color){           //After picking right color change all the color with right color
    for(var i=0;i<squares.length;i++)    
    {
        squares[i].style.background=color;
    }
}

function pickcolor(numSquares)          //to pick a random color for computer player to store
{
    var random=Math.floor(Math.random()*numSquares) //it is a floor no need to worry about no. going above 6
    
    return colors[random];
}

function generateRandomColors(num){     //Just to generate 6 random colors
    
    var arr=[];          //1) Create an array
    
    for(var i=0;i<num;i++) //repeat the no. of colors u want
    {
        arr.push(randomColor());       //2) generate random colors and push in the array  (A function to make the code cleaner)
    }
    
    //3)Return the array
    return arr;
}

function randomColor()
{
    var r=Math.floor(Math.random()*256);    //no. ranging from 0 to 256 for red,blue and green
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);

    return ("rgb(" + r +", " + g + ", "+ b +")");
}