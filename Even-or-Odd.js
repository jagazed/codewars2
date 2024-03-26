function fits(x, y){
    if (Number.isInteger(y / x)) {
        return 'Fits';
    }
    return 'Does not';
}
console.log(fits(5, 10);