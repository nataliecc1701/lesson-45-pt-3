function curriedAdd(addend = null) {
    let total = 0
    
    function curryingFunct(addend = null) {
        if (addend !== null) {
            total = total + addend;
            return curryingFunct
        }
        return total;
    }
    
    return curryingFunct(addend)
}

module.exports = { curriedAdd };
