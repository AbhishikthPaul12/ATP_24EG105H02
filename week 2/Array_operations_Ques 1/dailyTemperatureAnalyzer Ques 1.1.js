/*Assignment 1.1: Daily Temperature Analyzer*/

//Test Data
const temperatures=[32,35,28,40,38,30,42]

//filter() temperatures above 35
const temperaturesAbove35=temperatures.filter((temperature)=>temperature>35)
console.log(`Temperatures above 35: ${temperaturesAbove35}`)

//map() to convert all temperatures from Celsius → Fahrenheit
const temperaturesInFahrenheit=temperatures.map((temperature)=>(temperature*9/5)+32)
console.log(`Temperatures in Fahrenheit: ${temperaturesInFahrenheit}`)

//reduce() to calculate average temperature
const averageOfTemperatures=temperatures.reduce((accumulator,temperature)=>accumulator+temperature,0)/temperatures.length   
console.log(`Average of temperatures: ${averageOfTemperatures.toFixed(2)}`)

//find() first temperature above 40
const temperatureAbove40=temperatures.find((temperature)=>temperature>40)
console.log(`First temperature above 40: ${temperatureAbove40}`)

//findIndex() of temperature 28
const indexOfTemperature28=temperatures.findIndex((temperature)=>temperature===28)
console.log(`Index of temperature 28: ${indexOfTemperature28}`)