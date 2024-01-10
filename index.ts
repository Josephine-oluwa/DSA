const mergeStrings = (word1: string, word2: string) => {
    let mergeString = "";

    let maxLength = Math.max(word1.length, word2.length)

    for (let i = 0; i < maxLength; i++) {
        if (i < word1.length) {
            mergeString += word1[i]
        }

        if (i < word2.length){
            mergeString += word2[i]
        }
    }

    return mergeString
}

const word1 ="abc"
const word2 = "pqr"

const mergeString = mergeStrings(word1, word2)

console.log(mergeString)