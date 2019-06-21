import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Animated} from "react-animated-css";
//import { Link } from 'react-router-dom';
import "./Categories.css";
import logo from '../../img/brand.png';

function Categories (props) {
    return (
<div className="categories animated fadeIn delay-4s">

                <div className="row">
                    <div className="col-sm-2">
                        <small>
                            TRUSTED BY 100+
                            BUSINESS
                        </small>
                    </div>
                    <div className="animated fadeInLeft col-sm-2">
                        <a href="https://www.amazon.com">
                            <i className="fa fa-amazon fa-2x"></i>
                        </a>
                    </div>
                    <div className="animated fadeInLeft col-sm-2">
                        <a href="https://www.paypal.com">
                            <i className="fa fa-paypal fa-2x"></i>
                        </a>
                    </div>
                    <div className="animated fadeInRight col-sm-2">
                        <a href="https://www.apple.com">
                            <i className="fa fa-apple fa-2x"></i>
                        </a>
                    </div>
                    <div className="animated fadeInLeft col-sm-2">
                        <a href="https://www.dropbox.com">
                            <i className="fa fa-dropbox fa-2x"></i>
                        </a>
                    </div>
                    <div className="animated fadeInRight col-sm-2">
                        <a href="https://www.slack.com">
                            <i className="fa fa-slack fa-2x"></i>
                        </a>
                    </div>
            
            </div>
</div>

    );
}

export default Categories;