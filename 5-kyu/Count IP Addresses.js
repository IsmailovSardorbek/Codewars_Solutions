/*
                Examples:

                With input "10.0.0.0", "10.0.0.50"  => return   50
                With input "10.0.0.0", "10.0.1.0"   => return  256
                With input "20.0.0.10", "20.0.1.0"  => return  246
* */

function ipsBetween(start, end){
    let arr1 = start
        .split`.`
        .map(Number)
        .map((s) => s.toString(2).padStart(8, "0"));

    let arr2 = end
        .split`.`
        .map(Number)
        .map((s) => s.toString(2).padStart(8, "0"));

    return parseInt(arr2.join``, 2) - parseInt(arr1.join``, 2)
}