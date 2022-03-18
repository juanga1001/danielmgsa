import Carousel from 'react-elastic-carousel';
import data from "./data_Education"

function Education(props) {
  
  const cards = data.map((item) => {
    return(
      <div key={item.id} className="Education-card">
          <div className="card-header"> </div>
          <div className="card-content">
            <img
              className="icon-timeline"
              src={item.imgage}
              alt=""
              landingscape
            />
            <h3>{item.title}</h3>
            <h4>{item.subtitle}</h4>
            <p>{item.description}</p>
            <div>
              <h3>{item.date}</h3>
            </div>
          </div>
        </div>
    );
  });

  const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 550, itemsToShow: 2},
    {width: 768, itemsToShow: 3},
    {width: 1200, itemsToShow: 4},
  ]

  return (
    <section className="Education-container">
      <div className="section-title">
        <h2>EDUCATION</h2>
        <div className="line-title" />
      </div>
      <div className="Education-content">
      <Carousel breakPoints={breakPoints}>
          {cards}
      </Carousel>    
      </div>
    </section>
  );
}

export default Education;
