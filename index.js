// Code your solution here
function findMatching(arr, str) {
    return arr.filter(driver => driver.toLowerCase() == str.toLowerCase())

}

function fuzzyMatch(arr, str) { 
    return arr.filter(name => !name.search(str))
}

function matchName(arr, str) { 
    return arr.filter(person => person.name == str)
}