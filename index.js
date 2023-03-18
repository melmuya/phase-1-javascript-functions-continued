// code your solution here
function saturdayFun(activity = "roller-skate"){
    return(`This Saturday, I want to ${activity}!`)
    console.log(`This Saturday, I want to ${activity}!`)
    
}
saturdayFun()
saturdayFun("bathe my dog")

const mondayWork = function (mondayTask = "go to the office"){
    return(`This Monday, I will ${mondayTask}.`)
}

function wrapAdjective(visualFlairAdjective = "*"){
    return(function innerfunction(parameter = "special"){
        return(`You are ${visualFlairAdjective}${parameter}${visualFlairAdjective}!`)
    }
)}
wrapAdjective("*")(`a hard worker`)
