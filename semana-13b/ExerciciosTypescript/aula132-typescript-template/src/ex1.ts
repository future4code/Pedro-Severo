// Exercício 1

const array: number[] = [1, 2, 3, 4, 5, 6];
type result = {
    amount: number, 
    oddNumbers: number, 
    arraySum: number
};

function takeArray(numbers: number[]): result {
    const justOddNumbers: number[] = numbers.filter((el: number) => {
        return el%2 !== 0;
    })
    
    let sum: number = 0
    for(let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    
    const result: result = {
        amount: numbers.length,
        oddNumbers: justOddNumbers.length,
        arraySum: sum
    }

    return result
}

takeArray(array)