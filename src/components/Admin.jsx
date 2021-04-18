import React, { Component, useState } from 'react';
import Navbar from './Navbar';
import './Admin.css'

class Admin extends Component {
    documentData;
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {
            name: '',
            brand: '',
            price: '',
            color: '',
            ram: '',
            rom: ''
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    // on form submit...

    handleFormSubmit(e) {
        var c=0;
        if (localStorage.getItem('key')) {
             c = localStorage.getItem('key');
            c++;
            localStorage.setItem('key', JSON.stringify(c));

        } else {
            localStorage.setItem('key', JSON.stringify(0));
        }

        e.preventDefault();
        localStorage.setItem('document'+c , JSON.stringify(this.state));
        this.setState({
            name: '',
            brand: '',
            price: '',
            color: '',
            ram: '',
            rom: ''
        });
        alert("Form submitted successfully")
    }

    // function download(){
    //     var blob = new Blob([mobileName,"\n",brand,"\n",Price,"\n",Color,"\n",Ram,"\n",Rom], {type: "json"});
    //     var url = window.URL.createObjectURL(blob);
    //     var a = document.createElement("a");
    //     a.href = url;
    //     a.download = "test.json";
    //     a.click();
    //   }



    render() {

        return (
            <>
                <Navbar />
                <div className="container" >
                    <header className="header">
                        <h1 id="title" className="text-center">Add your mobile details</h1>

                    </header>
                    <form id="survey-form" style={{ marginLeft: '20rem', marginRight: '20rem' }} onSubmit={this.handleFormSubmit}>
                        <div className="form-group">
                            <label id="name-label" for="name">Mobile Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="form-control"
                                placeholder="Enter Mobile name"
                                value={this.state.name}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label id="brand-label" for="brand">Brand</label>
                            <input
                                type="text"
                                name="brand"
                                id="brand"
                                className="form-control"
                                placeholder="Enter Brand of mobile"
                                value={this.state.brand}
                                onChange={this.handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label id="price-label" for="price">Price</label>
                            <input
                                type="number"
                                name="price"
                                id="price"
                                className="form-control"
                                placeholder="Enter price"
                                value={this.state.price}
                                onChange={this.handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label id="color-label" for="color">Color</label>
                            <input
                                type="text"
                                name="color"
                                id="color"
                                className="form-control"
                                placeholder="Enter color"
                                value={this.state.color}
                                onChange={this.handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label id="ram-label" for="ram">RAM</label>
                            <input
                                type="number"
                                name="ram"
                                id="ram"
                                className="form-control"
                                placeholder="Enter ram"
                                value={this.state.ram}
                                onChange={this.handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label id="rom-label" for="rom">ROM</label>
                            <input
                                type="number"
                                name="rom"
                                id="rom"
                                className="form-control"
                                placeholder="Enter rom"
                                value={this.state.rom}
                                onChange={this.handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <button type="submit" id="submit" className="submit-button">
                                Submit
                    </button>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}

export default Admin;