import React, { Component } from 'react';

import './style.scss';
import instagramIcon from './icons/200px-Instagram_logo_2016.svg.png';
import telegramIcon from './icons/200px-Telegram_logo.svg.png';
import twitterIcon from './icons/Twitter_bird_logo_2012.svg.png';

class Footer extends Component {

    render() {
        return (
            <footer>
                <div className="container bigger-container">
                    <div className="social-networks">
                        <a href="#"><img src={instagramIcon} alt=""/></a>
                        <a href="#"><img src={telegramIcon} alt=""/></a>
                        <a href="#"><img src={twitterIcon} alt=""/></a>
                    </div>
                    <div className="trademark">تمام حقوق مادی و معنوی این وبسایت متعلق به محمدرضا کیانی و صادق حایری می‌باشد</div>
                </div>
            </footer>
        );
    }
}

export default Footer;