const array = [1, 2, 3, 4, 5, 6];
function takeArray(numbers) {
    const justOddNumbers = numbers.filter((el) => {
        return el % 2 !== 0;
    });
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    ;
    const result = {
        amount: numbers.length,
        oddNumbers: justOddNumbers.length,
        arraySum: sum
    };
    return result;
}
;
takeArray(array);
//# sourceMappingURL=ex1.js.map