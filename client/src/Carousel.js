import React from "react";
import master1 from "./master1.jpg";
import master2 from "./master2.jpg";
// import master3 from "./master3.jpg";
import "./carousel.css";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer,
} from "mdbreact";

const CarouselPage = () => {
  return (
    <div>
      <MDBContainer>
        <MDBCarousel
          activeItem={1}
          length={2}
          showControls={true}
          showIndicators={false}
          className="z-depth-1"
          slide
        >
          <MDBCarouselInner className="background">
            <MDBCarouselItem itemId="1">
              <MDBView>
                <img
                  className="d-block w-100"
                  src={master1}
                  alt="First slide"
                  height="800px"
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView>
                <img
                  className="d-block w-100"
                  src={master2}
                  alt="Second slide"
                  height="800px"
                />
              </MDBView>
            </MDBCarouselItem>
            {/* <MDBCarouselItem itemId="3">
              <MDBView>
                <img
                  className="d-block w-100"
                  src={master3}
                  alt="Third slide"
                />
              </MDBView>
            </MDBCarouselItem> */}
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
    </div>
  );
};

export default CarouselPage;
