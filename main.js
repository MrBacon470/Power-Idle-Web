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
let power = 10
var generators = []
var lastUpdate = Date.now()

for (let i = 0; i < 10; i++) {
  let generator = {
    cost: Math.pow(Math.pow(10, i), i) * 10,
    bought: 0,
    amount: 0,
    mult: 1
  }
  generators.push(generator)
}

function format(amount) {
  let powers = Math.floor(Math.log10(amount))
  let mantissa = amount / Math.pow(10, powers)
  if (powers < 3) return amount.toFixed(2)
  return mantissa.toFixed(2) + "e" + powers
}

function buyGenerator(i) {
  let g = generators[i - 1]
  if (g.cost > power) return
  power -= g.cost
  g.amount += 1
  g.bought += 1
  g.mult *= 1.05
  g.cost *= 1.5
}


function updateGUI() {
  document.getElementById("currency").textContent = "Power: " + format(power)
  for (let i = 0; i < 10; i++) {
    let g = generators[i]
    document.getElementById("gen" + (i + 1)).innerHTML = "Amount: " + format(g.amount) + "<br>Bought: " + g.bought + "<br>Mult: " + format(g.mult) + "x<br>Cost: " + format(g.cost)
    if (g.cost > power) document.getElementById("gen" + (i + 1)).classList.add("locked")
    else document.getElementById("gen" + (i + 1)).classList.remove("locked")
  }
}

function productionLoop(diff) {
  power += generators[0].amount * generators[0].mult * diff
  for (let i = 1; i < 10; i++) {
    generators[i - 1].amount += generators[i].amount * generators[i].mult * diff / 5
  }
}

function mainLoop() {
  var diff = (Date.now() - lastUpdate) / 1000

  productionLoop(diff)
  updateGUI()

  lastUpdate = Date.now()
}

setInterval(mainLoop, 50)

updateGUI()
