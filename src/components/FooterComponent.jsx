import React, { Component } from 'react';

class FooterComponent extends Component {
    render() {
        return (
            <div>
                <footer className='footer'>
                    <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                       <span className='text-muted'>All rights reserved to @javaguides</span>
                    </nav>   
                </footer>
            </div>
        );
    }
}

export default FooterComponent;