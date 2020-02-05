const string: string = "Pedro Severo";

function toReverseString(string: string): string {
    return string.split('').reverse().join('');
};

console.log(toReverseString(string));