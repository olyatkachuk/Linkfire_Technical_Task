//Test for whitespaces
let counted = characterCounter("aa aabc")
console.log(counted)
//Test for discarded number
counted = characterCounter("a1b2c3")
console.log(counted)
//Test for special charachters
counted = characterCounter("aabbccaabb")
console.log(counted)
//Test for discarded letters
counted = characterCounter("!!oopp??")
console.log(counted)


function characterCounter(inputString : string) : string{
    let trimmedString = inputString.replace(/\s/g, "")
    
    var resultString = ""

    var discardedCharacters : Array<string> = []//["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

    for (let i = 0; i <= 9; i++) {
        discardedCharacters.push(i.toString())
    }
    
    for(let i = 0; i < trimmedString.length; i++){
        var target = trimmedString[i]  
        
        if (discardedCharacters.indexOf(target) !== -1){ //includes(target)){
            continue
        }

        var targetCount = 0

        for(let n = 0; n < trimmedString.length; n++){
            if (trimmedString[n] == target){
                targetCount++
            }
        }

        resultString += target + targetCount
        discardedCharacters.push(target)
    }

    return resultString
}


// test("has no whitespaces", ()=>{
//     expect(characterCounter("fjkdhs fadf afsd").toBe("fjkdhsfadfafsd"))
// })
