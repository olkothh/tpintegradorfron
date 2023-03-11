import React from "react";


const Carousel = () => {
    return (
        <div>

            <div id="carouselExampleIndicators" className="carousel slide" >
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner" style={{ textAlign: 'center' }}>
                    <div className="carousel-item active">
                        <img src={require(`./img/01.png`)} className="d-block  " style={{   maxHeight: '500px',marginLeft:"auto",marginRight:"auto" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={require(`./img/02.png`)} className="d-block  "style={{   maxHeight: '500px',marginLeft:"auto",marginRight:"auto" }} alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={require(`./img/03.png`)} className="d-block  "style={{   maxHeight: '500px',marginLeft:"auto",marginRight:"auto" }} alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    )

}

export default Carousel