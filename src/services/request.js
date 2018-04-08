import {API_BASE_PATH} from "./config";
import Toast from '../services/toast';

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
                if(responseJson.message)
                    Toast.success(responseJson.message);
                if (successCallback)
                    successCallback(responseJson.data);
            })
            .catch((error) => {
                // console.error(error);
                Toast.error(error.message);
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