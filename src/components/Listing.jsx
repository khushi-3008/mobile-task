import React, { Component } from 'react';
import Navbar from './Navbar';
import Card from './LCard';

class Listing extends Component {

    documentData;
    constructor(props){
        super(props);
        var c;

        if (localStorage.getItem('key')) {
            c = localStorage.getItem('key');
            console.log(c);
            let cardList = [];
            for (let i = 0; i <= c; i++) {
                    this.documentData = JSON.parse(localStorage.getItem('document' + c));
                    console.log(this.documentData.name);
                    console.log(i);
                cardList.push(<Card name={this.documentData.name} brand={this.documentData.brand} />);
            }
            this.setState({CardList:cardList})

        }
    
    }

    render() {
        return (
            <div >
                <Navbar />
                <div style={{margin:"3rem"}}>
                <Card name={this.documentData.name} brand={this.documentData.brand} price={this.documentData.price} color={this.documentData.color} ram={this.documentData.ram} rom={this.documentData.rom} />
                </div>
            </div>
        )
    }
}

export default Listing;