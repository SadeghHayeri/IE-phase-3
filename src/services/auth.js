import RequestService from "./request";

class Auth {
    static user = null;

    static getUser(successCallback, errorCallback) {
        if(this.user)
            successCallback(this.user);
        else {
            RequestService.postRequest("/login", {},
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
    }

    static isLogedIn() {
        return this.user !== null;
    }
}

export default Auth;