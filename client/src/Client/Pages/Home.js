import CarouselPage from "../../Carousel";
import logo2 from "../../default.png";

const Home = () => (
  <div>
    <CarouselPage />
    <section className="home" id="home">
      <h1 className="Title"> ABOUT US</h1>
      <div className="home-content">
        <p className="content">
          {" "}
          Sesame AC offers its clients the best possible protection for all
          their assistance needs. As a consulting and disaster management
          company, we are committed to finding the best services for you. Our
          expert staff has the knowledge to manage everything from the simplest
          policy to the most complicated package. <br />
          <br />
          Contact us to get a free estimate today.{" "}
        </p>
        <p className="content">
          {" "}
          As a leading Insurance Agency, the object of SESAME is the management,
          study, assistance, technical advice, recourse, settlement and
          liquidation of claims of all kinds and representation of foreign
          companies in Tunisia and outside Tunisia and more generally all
          commercial operations, financial, transferable or immovable property
          directly or indirectly related to its corporate object.{" "}
        </p>
      </div>
    </section>
    {/* <div style={{ height: "800px" }}>
      <h2 className="myH2">
        <img src={logo2} />
      </h2>
      <p className="myP">
        This is a responsive fixed navbar animated on scroll
      </p>
      <p className="myP">
        I took inspiration ABfromDO STEIF (
        <a href="https://codepen.io/abdosteif/pen/bRoyMb?editors=1100">
          https://codepen.io/abdosteif/pen/bRoyMb?editors=1100
        </a>
        ) and Dicson{" "}
        <a href="https://codepen.io/dicson/pen/waKPgQ">
          (https://codepen.io/dicson/pen/waKPgQ)
        </a>
      </p>
      <p className="myP">I HOPE YOU FIND THIS USEFULL</p>
      <p className="myP">Albi</p>
      <p className="myP">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum ratione
        facere animi impedit rem labore sint repellendus ipsa sapiente
        voluptatem aut excepturi quo itaque, ab earum cumque. Voluptatem beatae
        id inventore quod voluptate qui deserunt, quis placeat, tempora ex
        totam, dolore sequi harum eos voluptatibus animi labore officiis minus
        laboriosam Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Ipsum ratione facere animi impedit rem labore sint repellendus ipsa
        sapiente voluptatem aut excepturi quo itaque, ab earum cumque.
        Voluptatem beatae id inventore quod voluptate qui deserunt, quis
        placeat, tempora ex totam, dolore sequi harum eos voluptatibus animi
        labore officiis minus laboriosam Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Ipsum ratione facere animi impedit rem labore sint
        repellendus ipsa sapiente voluptatem aut excepturi quo itaque, ab earum
        cumque. Voluptatem beatae id inventore quod voluptate qui deserunt, quis
        placeat, tempora ex totam, dolore sequi harum eos voluptatibus animi
        labore officiis minus laboriosam Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Ipsum ratione facere animi impedit rem labore sint
        repellendus ipsa sapiente voluptatem aut excepturi quo itaque, ab earum
        cumque. Voluptatem beatae id inventore quod voluptate qui deserunt, quis
        placeat, tempora ex totam, dolore sequi harum eos voluptatibus animi
        labore officiis minus laboriosam Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Ipsum ratione facere animi impedit rem labore sint
        repellendus ipsa sapiente voluptatem aut excepturi quo itaque, ab earum
        cumque. Voluptatem beatae id inventore quod voluptate qui deserunt, quis
        placeat, tempora ex totam, dolore sequi harum eos voluptatibus animi
        labore officiis minus laboriosam
      </p>
    </div> */}
  </div>
);

export default Home;
