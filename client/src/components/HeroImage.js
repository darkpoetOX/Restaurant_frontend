import Carousel from 'react-bootstrap/Carousel';
const HeroImage =  () => {
    return (
        <Carousel fade interval={3000}>
            <Carousel.Item>
                <img src={'./Images/heroBanner1.png'} className={"hero-image"}/>
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={'./Images/heroBanner2.png'} className={"hero-image"}/>
                <Carousel.Caption>


                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={'./Images/heroBanner1.png'} className={"hero-image"}/>
                <Carousel.Caption>


                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
export default HeroImage;
