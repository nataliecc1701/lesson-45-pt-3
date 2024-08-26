function createAccount(pin, amount) {
    let acctPin = pin
    let balance = amount || 0;
    return {
        checkBalance(pin) {
            if (pin === acctPin) return `$${balance}`;
            return "Invalid PIN."
        },
        
        deposit(pin, amount) {
            if (pin === acctPin) {
                balance += amount;
                return `Succesfully deposited $${amount}. Current balance: $${balance}.`
            }
            return "Invalid PIN."
        },
        
        withdraw(pin, amount) {
            if (pin === acctPin) {
                if (balance > amount) {
                    balance -= amount;
                    return `Succesfully withdrew $${amount}. Current balance: $${balance}.`
                }
                return "Withdrawal amount exceeds account balance. Transaction cancelled."
            }
            return "Invalid PIN."
        },
        
        changePin(oldPin, newPin) {
            if (oldPin === acctPin) {
                acctPin = newPin;
                return "PIN successfully changed!"
            }
            return "Invalid PIN."
        },
    }
}

module.exports = { createAccount };
