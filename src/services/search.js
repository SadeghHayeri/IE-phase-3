import { BuildingType, DealType } from './enums'
import RequestService from './request'

class HouseService {
    static query(parameters, successCallback, errorCallback) {
        RequestService.getRequest("/house", parameters, successCallback, errorCallback);
    }

    static getHouse(owner, id, successCallback, errorCallback) {
        RequestService.getRequest("/house" + "/" + owner + "/" + id, {}, successCallback, errorCallback);
    }
}

export default HouseService;