import React, { Component } from "react";
import '../src/Menu.css';
import MenuPrincipal from './MenuPrincipal';
import Header from '../src/heder';
import Footer from "./footer";


class Menu extends Component {
    
    render() {

        return (
            <div>
               <MenuPrincipal/>
                <Header />
                <Footer/>
            </div>

        );
    }
}

export default Menu;