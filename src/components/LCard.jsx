import React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import './LCard.css'

function LCard(props){
    return (
        <>
            <div className="wrapper" >

            <div className="title">
                <h3>List of Mobiles</h3>
            </div>
                <Card
                    style={{
                        marginLeft: "2vh",
                        marginTop: "3vh",
                        width:"80%",
                        backgroundColor: "#ffffff",
                        height: "35vh",
                        borderRadius:"10px"
                    }} >
                    <CardContent>
                        <Typography variant="h5" component="h2">
                        Name:  {props.name}
                        </Typography>
                        <Typography variant="h5" component="h2">
                        Brand:   {props.brand}
                        </Typography>
                        <Typography variant="h5" component="h2">
                        Price:   {props.price}
                        </Typography>
                        <Typography variant="h5" component="h2">
                        Color:    {props.color}
                        </Typography>
                        <Typography variant="h5" component="h2">
                        RAM:    {props.ram}
                        </Typography>
                        <Typography variant="h5" component="h2">
                        ROM:    {props.rom}
                        </Typography>
                    </CardContent>
                </Card>
            </div>

        </>
    )
}

export default LCard;