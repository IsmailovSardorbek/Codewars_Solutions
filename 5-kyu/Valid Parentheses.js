/*
 *   Examples
    "()"              =>  true
    ")(()))"          =>  false
    "("               =>  false
    "(())((()())())"  =>  true
*
* */


function validParentheses(parens) {
    const stack = [], open = ['(', '{', '['], close = [')', '}', ']' ]

    for(let i = 0; i < parens.length; i++) {
        if(open.includes(parens[i])) {
            stack.push(parens[i])
        } else {
            if(close.indexOf(parens[i]) === open.indexOf(stack[stack.length - 1])) {
                stack.pop()
            }
            else return false
        }
    }
    return stack.length === 0
}
