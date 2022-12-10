/*
            Examples:

            "TestController"  -->  "test_controller"
            "MoviesAndBooks"  -->  "movies_and_books"
            "App7Test"   -->  "app7_test"
            1  -->  "1"
* */




function toUnderscore(string) {
    return typeof string === 'string' ? [...string]
        .map((x, i) => x === x.toUpperCase() && x.toLowerCase() !== x.toUpperCase() && i !== 0
            ? `_${x.toLowerCase()}` : x).join('').toLowerCase() : String(string)
}