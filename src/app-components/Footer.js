import React,{Component} from 'react';

class Footer extends Component{
    render(){
        return(
            <div className="container">
                <footer>
                    <div className="row">
                        <div className="col-lg-12">

                            <ul className="list-unstyled">
                                <li className="pull-right"><a href="#top">Back to top</a></li>
                            </ul>
                            <p>Based on <a href="https://getbootstrap.com" rel="nofollow">Bootstrap</a>. Icons from <a href="https://fortawesome.github.io/Font-Awesome/" rel="nofollow">Font Awesome</a>. Web fonts from <a href="https://www.google.com/webfonts" rel="nofollow">Google</a>.</p>

                        </div>
                    </div>

                </footer>
            </div>
        );
    }
}

export default Footer;