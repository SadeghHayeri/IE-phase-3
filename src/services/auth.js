import RequestService from "./request";

class Auth {
    static user = null;

    static makeRequest(successCallback, errorCallback) {
        RequestService.getRequest("/auth/profile", {},
            (data) => {
                this.user = {
                    id: data.id,
                    name: data.name,
                    balance: data.balance
                };
                successCallback(this.user)
            },
            (error) => {
                errorCallback(error)
            }
        );
    }

    static getUser(successCallback, errorCallback) {
        if(this.user)
            successCallback(this.user);
        else {
            let token = localStorage.getItem("token");
            if (token)
                this.makeRequest(successCallback, errorCallback);
        }
    }

    static isLogedIn() {
        return this.user !== null;
    }
}

export default Auth;