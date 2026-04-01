export function add(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

export function subtract(numbers) {
    if (numbers.length === 0) return 0;
    return numbers.slice(1).reduce((acc, num) => acc - num, numbers[0]);
}

export function multiply(numbers) {
    if (numbers.length === 0) return 0;
    return numbers.reduce((acc, num) => acc * num, 1);
}

export function divide(numbers) {
    if (numbers.length === 0) return 0;

    return numbers.slice(1).reduce((acc, num) => {
        if (num === 0) {
            return NaN;
        }
        return acc / num;
    }, numbers[0]);
}