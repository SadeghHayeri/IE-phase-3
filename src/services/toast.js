import { toast } from 'react-toastify';

class Toast extends toast {

    static delay = 3000;

    static success(message, delay) {
        toast(message, {
            type: toast.TYPE.SUCCESS,
            autoClose: delay ? delay : this.delay,
            className: {
                fontFamily: "Shabnam-Light"
            },
        });
    }

    static warning(message, delay) {
        toast(message, {
            type: toast.TYPE.WARNING,
            autoClose: delay ? delay : this.delay,
            className: {
                fontFamily: "Shabnam-Light"
            },
        });
    }

    static error(message, delay) {
        toast(message, {
            type: toast.TYPE.ERROR,
            autoClose: delay ? delay : this.delay,
            className: {
                fontFamily: "Shabnam-Light"
            },
        });
    }
}

export default Toast;