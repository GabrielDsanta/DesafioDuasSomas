

//Exercicio 01

const arrayA = [3,2,4]

console.log(FindDoubles(arrayA, 6))

function FindDoubles(array, target){
    const response = []
    for (let i = 0; i < array.length; i++) {
        const currentNumber = array[i]
        array.forEach((item, index) => {
            item !== currentNumber && item + currentNumber === target && (response.push(i, index), i = array.length)
        })
    }

    return response
}



