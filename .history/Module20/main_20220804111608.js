function SubmitEvent(...thisArgs) {
    return thisArgs.reduce(function(previous, current){
        return previous + current;      
    })
}

console.log(sum(5, 5, 5));