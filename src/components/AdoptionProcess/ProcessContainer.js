import React from 'react'
import ProcessItems from "./ProcessItems"
import { Row, Col } from 'react-bootstrap';

const ProcessContainer = () => {
    const adoptionProcess = [
         {  
          img: "https://pyxis.nymag.com/v1/imgs/c9c/2c2/be941ee1a78099dc7f3efea9dab847e011-25-rescue-dog-lede.rsquare.w1200.jpg",
          text: "Find Your Pet",
          firstDescription: "Lorem Ipsum Lorem Ipsum Lorem",
          secondDescription: "Lorem Ipsum Lorem Ipsum Lorem",
        },
         {
            img: "https://i.pinimg.com/736x/5f/80/85/5f80854fd1475958717a19e345695942.jpg",
            text: "Know Your Pet",
            firstDescription: "Lorem Ipsum Lorem Ipsum Lorem",
            secondDescription: "Lorem Ipsum Lorem Ipsum Lorem",
        },
         {
            img: "https://i.pinimg.com/736x/2e/23/d3/2e23d3827c8293c27cea544a8acbcd59.jpg",
            text: "Take Your Pet Home",
            firstDescription: "Lorem Ipsum Lorem Ipsum Lorem",
            secondDescription: "Lorem Ipsum Lorem Ipsum Lorem",
          }
      ]

    return (
        <Row className="adoption-container py-5">
            <Col sm={12}>
                <h1>Pet Adoption Process</h1>
                <Row className="mt-5">
                    {adoptionProcess.map(process => 
                        <ProcessItems 
                            img={process.img} 
                            text={process.text}
                            firstDescription={process.firstDescription}   
                            secondDescription={process.secondDescription}
                        />
                    )} 
                </Row>
            </Col>
        </Row>
    )
}

export default ProcessContainer
