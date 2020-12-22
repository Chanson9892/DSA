// Given two strings, return an array of every matching substring

// Example Input and Output
// in: 'te', 'test'
// Out: ['t', 'te', 'e']

// Assume you are given a single word strings with no white space.
// Letter case does not matter! the return should be in all lowercase or all uppercase.
// If there is no sub string return false.

// set all strings to lowercase
//find substrings
// cat c ca cat a at t => nested loop
//!arr.includes(subStr) => arr.push(subStr)
// str2.includes(arr[i])
// matched.push(arr[i])
// return matched


// VIDEO ANSWER -----------------------------------------------------
function matchingSubStrings(str1, str2) {
    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()
    let matched = []
    
    let subString = findSubStrings(str1)

    subString.forEach(subStr => str2.includes(subStr) ? 
    matched.push(subStr) : null)

    return matched.length == 0 ? false : matched
}


function findSubStrings(str){
    let arr = []
    for (let i = 0; i < str.length; i++){
        for (let j = i +1; j < str.length+1; j++){
            let subStr = str.slice(i,j)
            arr.includes(subStr) ? null : arr.push(subStr)
        }
    }
    return arr
}

matchingSubStrings('te', 'test')

// MY ANSWER -----------------------------------------------
function matchingSubStrings(str1, str2) {
    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()
    let matched = []
    
    for (let i = 0; i < str1.length; i++){
        for (let j = i +1; j < str1.length+1; j++){
            let subStr = str1.slice(i,j)
            if (str2.toLowerCase().includes(subStr )) {
                matched.push(subStr)
            }
        }
    }

    if (matched.length === 0) {
        matched = false
    }
    console.log(matched)
}
    
matchingSubStrings('te', 'test')