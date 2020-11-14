/*
MIT License

Copyright (c) 2020 MrBacon470

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
let power = 0
let cursors = 0

function powerClick(number)
{
    power = power + number;
    document.getElementById("click").innerHTML = power
}

function buyCursor(){
    var cursorCost = Math.floor(10 * Math.pow(1.1,cursors))     //works out the cost of this cursor
    if(power >= cursorCost){                                   //checks that the player can afford the cursor
        cursors = cursors++;                                   //increases number of cursors
    	power = power - cursorCost;                          //removes the power spent
        document.getElementById('cursors').innerHTML = cursors //updates the number of cursors for the user
        document.getElementById("click").innerHTML = power  //updates the number of cookies for the user
    }
    var nextCost = Math.floor(10 * Math.pow(1.1,cursors))       //works out the cost of the next cursor
    document.getElementById('cursorCost').innerHTML = nextCost  //updates the cursor cost for the user
}

window.setInterval(function(){
	
	cookieClick(cursors)
	
}, 1000)

