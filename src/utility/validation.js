const validate = (val, rules) => {
    let isValid = true;
    for (let rule in rules) {
        switch (rule) {
            case 'isEmail':
                isValid = isValid && validateEmail(val);
                break;
            case 'minLength':
                isValid = isValid && validateLength(val, rules[rule])
                break;
            default:
                isValid = true;
        }
    }
    return isValid;
}

const validateEmail = val => {
    return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(val);
}

const  validateLength = (val, minLength) => {
    return val.length >= minLength
}

export default validate;