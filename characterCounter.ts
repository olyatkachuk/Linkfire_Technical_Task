//Write a function that will receive a string as param (cannot be null).
//The function should trim the param (remove whitespaces), and return another string that counts the number of times a character was present (discarding numbers).


//Specification by example:

//- If I send "aaaabc", the function should return "b1a4c1".

// - If I send "a1b2c3", the function should discard the numbers and return "a1b1c1".

// - If I send "!!oopp??", the function should return "!2o2p2?2".

// - If I send "aabbccaabb", the function should return "a4b4c2".

// Feel free to add a unit test to make sure your implementation works or add testing scenarios as comments.

// -----

// You can use the code manager of your choice (github, gitlab, bitbucket, etc) but keep in mind that they need to be public so we can access it without credentials.

// Although Linkfire stack is mostly javascript, you can do this technical task with the language and framework of your choice.

// Please remember to include a comprehensive readme.md on how to use/execute your code.


//Test for whitespaces
let counted = characterCounter("aa aabc")
console.log(counted)
//test for discarded number
counted = characterCounter("a1b2c3")
console.log(counted)
counted = characterCounter("aabbccaabb")
console.log(counted)
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