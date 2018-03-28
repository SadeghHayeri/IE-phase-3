import { BuildingType, DealType } from './enums'

class Search {
    static query() {
        //TODO: remove from here
        var imagePath1 = '/assets/images/houses/13PINK1-master768-v2.jpg';
        var imagePath2 = '/assets/images/houses/320px-Bhutanese_Farmhouse_Soe_Yaksa.jpg';
        var imagePath3 = '/assets/images/houses/320px-Cambo_169.jpg';
        var imagePath4 = '/assets/images/houses/320px-Faza_in_Kenya\'s_Coast_Province.JPEG';
        var imagePath5 = '/assets/images/houses/320px-La_cabaña_de_Alpina.jpg';
        var imagePath6 = '/assets/images/houses/320px-Ranch_style_home_in_Salinas,_California.JPG';

        var houses = [
            {
                id: "34_Fdsf33",
                owner: "folan",
                dealType: DealType.BUY,
                buildingType: BuildingType.APARTMENT,
                area: 4000,
                price: {
                    sell: 50000,
                },
                location: {
                    name: "فلان‌جا",
                    lat: 54.32131,
                    lng: 34.52344,
                },
                imgPath: imagePath1,
            },
            {
                id: "3432233",
                owner: "khane-be-doosh",
                dealType: DealType.BUY,
                buildingType: BuildingType.VILLA,
                area: 50560,
                price: {
                    sell: 8000,
                },
                location: {
                    name: "شمال",
                    lat: 54.32131,
                    lng: 34.52344,
                },
                imgPath: imagePath2,
            },
            {
                id: "23",
                owner: "khane-be-doosh",
                dealType: DealType.RENTAL,
                buildingType: BuildingType.VILLA,
                area: 8000,
                price: {
                    base: 12000,
                    rent: 300,
                },
                location: {
                    name: "آبیانه",
                    lat: 54.32131,
                    lng: 34.52344,
                },
                imgPath: imagePath3,
            },
            {
                id: "sadekh",
                owner: "folan",
                dealType: DealType.BUY,
                buildingType: BuildingType.APARTMENT,
                area: 4000,
                price: {
                    sell: 50000,
                },
                location: {
                    name: "فلان‌جا",
                    lat: 54.32131,
                    lng: 34.52344,
                },
                imgPath: imagePath4,
            },
            {
                id: "rewr",
                owner: "khane-be-doosh",
                dealType: DealType.BUY,
                buildingType: BuildingType.VILLA,
                area: 50560,
                price: {
                    sell: 8000,
                },
                location: {
                    name: "شمال",
                    lat: 54.32131,
                    lng: 34.52344,
                },
                imgPath: imagePath5,
            },
            {
                id: "2fds3",
                owner: "khane-be-doosh",
                dealType: DealType.RENTAL,
                buildingType: BuildingType.VILLA,
                area: 8000,
                price: {
                    base: 12000,
                    rent: 300,
                },
                location: {
                    name: "آبیانه",
                    lat: 54.32131,
                    lng: 34.52344,
                },
                imgPath: imagePath6,
            },
        ];

        return houses;
    }
}

export default Search;