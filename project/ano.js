/*function addnos(num1 , num2){
    const total = num1*num2
    return total
}
const added = addnos(2,8)*/
// 
// console.log("first ",name)
// //var name = "Pratik"
// console.log("Again ",name)
// let person = "Sam"
// function greeting(){
//     console.log(`Hello ${person}`)
// }
// greeting()
//timeout syntax:
// setTimeout(function(){}, time in ms)
// 
// "use strict"
// let x = "thing"
// z = "Else"
// console.log(x)
// console.log(z)
//============================+=================
//interval giving:
// let count = 0
// const int = setInterval(function(){
//     count++
//     console.log(count)
//     if (count === 3)//strict{
//         {
//             clearInterval(int)
//             console.log("This is last time ")
//         }
    
// },3000)
// while(true){
//     let name = prompt("What is ur name ?")
//     if (name === "Samreen"){
//         console.log("Hry cuteee")
//         break
//     }
//     console.log("Try again")
// }
// let d = new Date(2025,0,31)
// console.log(d)
// const months = ['january','february','march']
// const [jan, feb] = months
// console.log(jan,feb)
// console.log(months)
// "use strict"
// const p3 = {
//     "name":"Pratik",
//     "Ol":"bbb",
//     "op":"pp"
// }

// delete p3['op']
//========================
// 
//========================
// const n = 12
// try{
//     n = n + 10// write a prog here if it riuns to error catch gers executed
// }catch(error){
//     console.warn("Error has occured hhhhh", error)
// }finally{ 
//     console.log("Show final no : ",n)
// }
// //if (this.name == undefined){
//     // this.name = "set a name i.e Pratik"
// //}
// const hemlo = (name)=>console.log(`hemlo ${name}`)
// hemlo("Pratik")

// class test{
//     constructor(name){
//         this.name = name
//     }
//     speak(){
        
//         console.log("JJ", this.name)
//     }
// }
// ns = new test("Pratik Bhattacharya")// making new object of the class using new
// //ns.setname("Pratik")
// ns.speak()//object calling functoin
//json is used to share data in form of objects
// swapi.dev or pokeapi.io to get free apis
const name = document.getElementById("name")
const climate = document.getElementById("color")
const diameter = document.getElementById("height")
const residents = document.getElementById(".moreinfo")
const button = document.querySelector(".planet")
button.addEventListener('click', (e) => {
    e.preventDefault()
    name.innerHTML = 'loading'
    climate.innerHTML = 'loading'
    diameter.innerHTML = 'loading'
    const r = Math.ceil(Math.random()*60)
    fetch(`https://swapi.dev/api/people/${r}/`)
        .then( response => response.json())
        .then(data => {
            console.log(data)
            name.innerHTML = data['name']
            climate.innerHTML = data['skin_color']
            diameter.innerHTML = data['height']
            }
            )
        })
const button2 = document.querySelector(".moreinfo")
button.addEventListener('click',(f) => {
    f.preventDefault()
    residents.innerHTML = "loading"
    fetch(`"https://swapi.dev/api/planets/57/"`)
    .then(res2 => res2.json())
    .then(data2 => {
        console.log(data2)
    })

} )