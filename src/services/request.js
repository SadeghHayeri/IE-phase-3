import {API_BASE_PATH} from "./config";
import {toast } from 'react-toastify';


class RequestService {
    static baseRequest(path, config, successCallback, errorCallback) {
        path = API_BASE_PATH + path;

        fetch(path, config)
            .then((response) => response.json())
            .then((response) => {
                if(response.code !== 200)
                    throw Error(response.message);
                return response;
            })
            .then((responseJson) => {
                console.log(responseJson);
                if(responseJson.message)
                    toast(responseJson.message, {
                        type: toast.TYPE.SUCCESS,
                        autoClose: 3000,
                        className: {
                            fontFamily: "Shabnam-Light"
                        },
                    });
                if (successCallback)
                    successCallback(responseJson.data);
            })
            .catch((error) => {
                // console.error(error);
                toast(error.message, {
                    type: toast.TYPE.ERROR,
                    autoClose: 3000,
                    className: {
                        fontFamily: "Shabnam-Light"
                    },
                });
                if (errorCallback)
                    errorCallback(error)
            });
    }

    static postRequest(path, data = {}, successCallback = null, errorCallback = null) {
        const config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        };

        this.baseRequest(path, config, successCallback, errorCallback);
    }

    static getRequest(path, params = {}, successCallback = null, errorCallback = null) {
        const query = Object.keys(params)
            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
            .join('&');
        path += '?' + query;

        const config = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        };

        this.baseRequest(path, config, successCallback, errorCallback);
    }
}

export default RequestService;