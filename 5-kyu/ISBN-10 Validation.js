/*
                For example:

                ISBN     : 1 1 1 2 2 2 3 3 3  9
                position : 1 2 3 4 5 6 7 8 9 10
                This is a valid ISBN, because:

                (1*1 + 1*2 + 1*3 + 2*4 + 2*5 + 2*6 + 3*7 + 3*8 + 3*9 + 9*10) % 11 = 0

                Examples:

                1112223339   -->  true
                111222333    -->  false
                1112223339X  -->  false
                1234554321   -->  true
                1234512345   -->  false
                048665088X   -->  true
                X123456788   -->  false
* */




const validISBN10 = (isbn) => {
    return isbn.length === 10 && !isbn.startsWith('X')
        ? [...isbn]
            .map((s) => (s === `X` ? 10 : Number(s)))
            .reduce((acc, cur, index) => acc + cur * (index + 1), 0) %
        11 ===
        0
        : false;
};