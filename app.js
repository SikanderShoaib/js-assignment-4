
document.write("Welcome To Mobile Phone Recomender\n<br>");
document.write("Please Answer The following question to help us suggest the perfect mobile phone\n<br>");
var budget = prompt("Enter abudget of your mobile phone (low/medium/high)");
document.write("Your prefer budget is: " + budget + "<br>");
var opreatingSystem = prompt("Which opreating system do you prefer? (Andriod / IOS)");
document.write("Your prefer opreating System is: " + opreatingSystem + "<br>");
var cameraQuality = prompt("What camera quality do you need? (basic/moderate/high)");
document.write("Your prefer camera quality is: " + cameraQuality + "<br>");
var batteryLife = prompt("Which battery life do you prefer (short/average/long)");
document.write("Your perefer battery life is: " + batteryLife + "<br>");
var screenSize = prompt("Which screen size do you prefer (small/medium/large)");
document.write("Your prefer screen size is: " + screenSize + "<br>");

document.write("Wait Your Input is processed\n<br>\n<br>\n<br>")

// for low budget for low budget for low budget for low budget for low budget for low budget for low budget for low budget

if(budget == "low" || budget == "Low" || budget == "low"){
    if (opreatingSystem == "andriod" || opreatingSystem == "Andriod") {
        document.write("SAMSUNG A10s\n<br>")
    }else{
        document.write("I Phone 5s\n<br>");
    }
    document.write("Price: 25000 PKR\n<br>");

      if ((opreatingSystem == "andriod") && cameraQuality == "basic") {
        document.write("Camera Quality: 13MP\n<br>")
      }else if((opreatingSystem == "ios") && cameraQuality == "basic"){
        document.write("Camera Quality: 8MP\n<br>");
      }else if(cameraQuality == "moderate" || cameraQuality == "high"){
        document.write("In this budget moderate and high quality camera is not available\n<br>");
      }
      if ((opreatingSystem == "andriod") && screenSize == "small" || screenSize == "medium") {
        document.write("Screen Size: 6.2 Inches\n<br>");
      }else if((opreatingSystem == "ios") && screenSize == "small"){
        document.write("Screen Size: 4.00 Inches\n<br>");
      }else if(screenSize == "medium" && screenSize == "large"){
        document.write("In this budget medium and large screen smartphone is not available\n<br>");
      }
      if((opreatingSystem == "andriod") && batteryLife == "short" || batteryLife == "average"){
        document.write("Battery Life: 24hrs\n<br>\n<br>");
      }else if((opreatingSystem == "ios") && batteryLife == "short"){
        document.write("Battery Life: 10hrs\n<br>\n<br>");
      }else if((opreatingSystem == "ios") && batteryLife == "average" || batteryLife == "long"){
        document.write("in this budget long and average battery life smart phone is not available\n<br>\n<br>");
      }
}




// for medium budget for medium budget for medium budget for medium budget for medium budget for medium budget for medium budget for medium budget 


if(budget == "medium" || budget == "Medium" || budget == "MEDIUM"){
    if (opreatingSystem == "andriod" || opreatingSystem == "Andriod") {
        document.write("OPPO A12\n<br>")
    }else{
        document.write("I Phone X Max\n<br>");
    }
    document.write("Price: 50000 PKR\n<br>");
      if ((opreatingSystem == "andriod") && cameraQuality == "basic" || cameraQuality == "moderate") {
        document.write("Camera Quality: Dual 13MP\n<br>")
      }else if((opreatingSystem == "ios") && cameraQuality == "basic" || cameraQuality == "moderate"){
        document.write("Camera Quality: Dual 12MP\n<br>");
      }else if((opreatingSystem == "andriod" || opreatingSystem == "ios") && cameraQuality == "high"){
        document.write("In this budget high quality camera is not available\n<br>");
      }
      if ((opreatingSystem == "andriod") && screenSize == "small" || screenSize == "medium") {
        document.write("Screen Size: 6.2 Inches\n<br>");
      }else if((opreatingSystem == "ios") && screenSize == "small" || screenSize == "medium"){
        document.write("Screen Size: 5.8 Inches\n<br>");
      }else if((opreatingSystem == "andriod" || opreatingSystem == "ios") && screenSize == "large"){
        document.write("In this budget large screen smartphone is not available\n<br>");
      }
      if((opreatingSystem == "andriod") && batteryLife == "short" || batteryLife == "average"){
        document.write("Battery Life: 24hrs\n<br>\n<br>");
      }else if((opreatingSystem == "ios") && batteryLife == "short" || batteryLife == "average"){
        document.write("Battery Life: 16hrs\n<br>\n<br>");
      }else if((opreatingSystem == "andriod" || opreatingSystem == "ios") && screenSize == "long"){
        document.write("in this budget long battery life smart phone is not available\n<br>\n<br>");
      }
}




//for high budget for high budget for high budget for high budget for high budget for high budget for high budget for high budget 


if(budget == "high" || budget == "High" || budget == "HIGH"){
    if (opreatingSystem == "andriod" || opreatingSystem == "Andriod") {
        document.write("SAMSUNG S24 ULTRA\n<br>")
    }else{
        document.write("I Phone 15 Max\n<br>");
    }
    document.write("Price: 500000 PKR\n<br>");
      if ((opreatingSystem == "andriod") && cameraQuality == "basic" || cameraQuality == "moderate" || cameraQuality == "high") {
        document.write("Camera Quality: 200MP\n<br>")
      }else if((opreatingSystem == "ios") && cameraQuality == "basic" || cameraQuality == "moderate" || cameraQuality == "high"){
        document.write("Camera Quality: 48MP\n<br>");
      }else if((opreatingSystem == "andriod" || opreatingSystem == "ios") && cameraQuality == " "){
        document.write("Please Enter Valid\n<br>");
      }
      if ((opreatingSystem == "andriod") && screenSize == "small" || screenSize == "medium" || screenSize == "large") {
        document.write("Screen Size: 6.8 Inches\n<br>");
      }else if((opreatingSystem == "ios") && screenSize == "small" || screenSize == "medium"){
        document.write("Screen Size: 6.7 Inches\n<br>");
      }else if((opreatingSystem == "andriod" || opreatingSystem == "ios") && screenSize == " "){
        document.write("Please Enter A Valid\n<br>\n<br>");
      }
      if((opreatingSystem == "andriod") && batteryLife == "short" || batteryLife == "average" || batteryLife == "long"){
        document.write("Battery Life: 24hrs\n<br>");
      }else if((opreatingSystem == "ios") && batteryLife == "short" || batteryLife == "average" || batteryLife == "long"){
        document.write("Battery Life: 23hrs\n<br>\n<br>");
      }else if((opreatingSystem == "andriod" || opreatingSystem == "ios") && screenSize == " "){
        document.write("Please Enter A Valid\n<br>\n<br>");
      }
}


document.write("Enjoy Your New Mobile");
