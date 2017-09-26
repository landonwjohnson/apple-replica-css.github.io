import React from 'react';
import ReactDOM from 'react-dom';
import AppleIcon from '../img/svg/Apple-Icon.svg';
import SearchIcon from '../img/svg/Search-Icon.svg';
import CartIcon from '../img/svg/Cart-Icon.svg';
import classnames from 'classnames';

export default class Header extends React.Component {


    constructor(){
        super();
        this.state ={
            cartMenuOpen: false
        }

        this.handleCartClick = this.handleCartClick.bind(this);
    }
    handleCartClick(){
        console.log('Hi');
        if(this.state.cartMenuOpen){
            this.setState({cartMenuOpen: false})
        }
        else {
            this.setState({cartMenuOpen: true})
        }
    }
    render() {
        var bagClasses = classnames({
            "bagview-content--show": this.state.cartMenuOpen,
            "bagview-content": true
        })
        return (
            <div>
                <div className="ac-gn-header">
                    <ul className="nav">
                        <li className="appleIcon"><img src={AppleIcon}/></li>
                        <li>Mac</li>
                        <li>iPad</li>
                        <li>iPhone</li>
                        <li>Watch</li>
                        <li>TV</li>
                        <li>Music</li>
                        <li>Support</li>
                        <li className="searchIcon" ><img src={SearchIcon} /> </li>
                        <li className="cartIcon" onClick={this.handleCartClick} ><img src={CartIcon} /> </li>
                    </ul>
                    <ul className="mobile-nav">
                        <li className ="menuicon-bread"> <span className = "menuicon-bread-crust-top"/> <span className = "menuicon-bread-crust-bottom"/> </li>
                        <li className="appleIcon"><img src={AppleIcon}/></li>
                        <li className="cartIcon" ><img src={CartIcon} /></li>
                    </ul>
                </div>
                <div className={bagClasses}>
                                <p> Your Bag is empty. </p>
                                    <ul>
                                        <li> Bag </li>
                                        <li> Favorites </li>
                                        <li> Orders </li>
                                        <li> Account </li>
                                        <li> Sign in </li>
                                    </ul>
                                </div>
            </div>
        );
    }
}
