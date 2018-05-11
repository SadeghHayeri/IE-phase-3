import RequestService from "./request";
import BindingService from "./binder";

class Auth {
    static init() {
        this.user = null;

        BindingService.listen('AuthChange', (args) => {
            this.user = args[0];
        });

        let token = localStorage.getItem("token");
        if (token)
            this.makeRequest();
    }

    static makeRequest() {
        RequestService.getRequest("/auth/profile", {},
            (data) => {
                BindingService.signal('AuthChange', data);
            },
            (error) => {
                BindingService.signal('AuthChange', null);
            }
        );
    }

    static getUser() {
        return this.user;
    }

    static isLoggedIn() {
        return this.user !== null;
    }
}

export default Auth;