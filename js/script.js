// Copyright (c) 2023 Savyon All rights reserved
//
// Created by: Savyon
// Created on: March 2023
// This file contains the JS functions for index.html

function calculate() {
  // Get the value of the input field
  var side = document.getElementById("side").value;
  // Convert the input to a number
  side = parseFloat(side);
  // Check if the input is valid
  if (isNaN(side) || side <= 0) {
    alert("Please enter a valid positive number for the side length.");
    return;
  }
  // Calculate the volume of the cube and round to 2 decimal places
  var volume = side * side * side;
  volume = volume.toFixed(2);
  // Calculate the surface area of the cube and round to 2 decimal places
  var surfaceArea = 6 * side * side;
  surfaceArea = surfaceArea.toFixed(2);
  // Display the result
  var resultText = "The volume of the cube is " + volume + " square units.<br>";
  resultText += "The surface area of the cube is " + surfaceArea + " square units.";
  document.getElementById("result").innerHTML = resultText;
}


