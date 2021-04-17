import React from 'react';
import './Navbar.css';

function Navbar() {

    return (
        <section class="et-hero-tabs">
            <div class="et-hero-tabs-container">
                <a class="et-hero-tab" href='/'>Admin</a>
                <a class="et-hero-tab" href='/listing'>Listing Items</a>
                <span class="et-hero-tab-slider"></span>
            </div>
        </section>
    )
}

export default Navbar;