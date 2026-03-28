function findBiggest(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    }  else {
        return c;
    }
}

// use
console.log(findBiggest(10, 25, 15))