import persianRex from 'persian-rex'
import pnumber from 'pnumber'


class NumberService {
    static toPersian(value) {
        return pnumber.toPersianDigits(value.toString())
    }

    static toEnglish(value) {
        return pnumber.toEnglishDigits(value.toString());
    }
    
    static isPersianNumber(value) {
        return persianRex.number.test(value.toString());
    }
}

export default NumberService;