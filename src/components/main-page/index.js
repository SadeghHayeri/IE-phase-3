import React, { Component } from 'react';
import Header from "./header";
import Footer from "../common/footer";
import ListItem from "./list-item/index";
import Advantages from "./advantages";

import aboutImg from "./images/why-khanebedoosh.jpg"
import advantageIcon1 from "./images/icons/726446.svg";
import advantageIcon2 from "./images/icons/726488.svg";
import advantageIcon3 from "./images/icons/726499.svg";

class MainPage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Advantages items={[
                    {
                        title: "آسان",
                        motto: "به آسانی صاحب خانه شوید",
                        img: advantageIcon1
                    },
                    {
                        title: "مطمئن",
                        motto: "با خیال راحت دنبال خانه بگردید",
                        img: advantageIcon2
                    },
                    {
                        title: "گسترده",
                        motto: "در مناطق مورد علاقه خود صاحب خانه شوید",
                        img: advantageIcon3
                    },
                ]}/>
                <ListItem title="چرا خانه به دوش؟" img={aboutImg} items={[
                    "اطلاعات کامل و صحیح از املاک قابل معامله",
                    "بدون محدودیت, ۲۴ ساعته و در تمام ایام هفته",
                    "جست و جوی هوشمند ملک, صرفه جویی در زمان",
                    "تنوع در املاک, افزایش قدرت خرید مشتریان",
                    "بانکی جامع از اطلاعات هزاران آگهی به روز",
                    "دستیابی به نتیجه مطلوب در کمترین زمان ممکن",
                    "همکاری با مشاوران متخصص در حوزه املاک",
                ]}/>
                <Footer/>
            </div>
        );
    }
}

export default MainPage;
