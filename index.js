// code your solution here
function saturdayFun(string = "roller-skate") {
    return (`This Saturday, I want to ${string}!`);
}

function mondayWork(string = "go to the office") {
    return (`This Monday, I will ${string}.`)
}

function wrapAdjective(result){
    return function name(emphatic = 'a hard worker') {
        return `You are ${result}${emphatic}${result}!`
    }
}