import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Rhoncus est pellentesque elit ullamcorper. Placerat vestibulum
                lectus mauris ultrices eros. Nunc sed blandit libero volutpat.
                Egestas dui id ornare arcu odio ut sem nulla. Nibh sed pulvinar
                proin gravida hendrerit lectus. Senectus et netus et malesuada
                fames ac turpis. Pretium quam vulputate dignissim suspendisse.
                Mauris sit amet massa vitae tortor condimentum. Consequat semper
                viverra nam libero justo laoreet. Ante in nibh mauris cursus.
                Congue eu consequat ac felis donec et odio pellentesque. Id
                interdum velit laoreet id donec ultrices tincidunt arcu non.
                Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut
                placerat.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Web Development</h5>
                </div>

                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Data Science</h5>
                </div>

                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Product Design</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Web Development</h5>
                </div>

              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp}/>
    </section>
  );
};
