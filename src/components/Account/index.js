import React from 'react';
import AccountStyles from './Account.scss';

export default class Account extends React.Component {
    render() {
        return <div className={AccountStyles.homeWrapper}>
            <div className={AccountStyles.accContainer}>
                <div className={AccountStyles.accProfile}>
                    <div className={AccountStyles.userImg}>
                        <img src="/public/images/userProfile.png" />
                    </div>
                    <span className={AccountStyles.userAction}>
                        <button>Sign in/Sign up</button>
                    </span>
                </div>
                <div className={AccountStyles.userActionList}>
                    <ul>
                        <li><a>Redcash Balance</a></li>
                        <li><a>Refer & Earn</a></li>
                        <li><a>Wishlist</a></li>
                        <li><span>Country</span><a>Indonesia - English</a></li>
                        <li><span>Currency</span><a>IDR</a></li>
                        <li><a>About Us</a></li>
                        <li><a>Careers</a></li>
                        <li><a>Reddoorz Blog</a></li>
                        <li><a>Contact Us</a></li>
                    </ul>

                </div>


            </div>
        </div>;
    }
}
