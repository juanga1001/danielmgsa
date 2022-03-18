import data from "./data_Publications";

function Publications(props) {

  const cards = data.map((item) => {
    return (
      <div key={item.id} className={`Publication-card ${item.id % 2 !== 0 ? "Publication-gray-card" : "Publication-green-card"}`}>
        <div className="Publication-main-info">   
            <h3>{item.title}</h3>
            <p>{item.description}</p>
        </div> 
        <div className="Publication-footer">
            <h4>{item.date}</h4>
            <a href={item.link} target="_blank" rel="noreferrer">SEE PUBLICATION</a>
        </div>
      </div>
    );
  });

  return (
    <section className="Publications-container">
      <div className="section-title">
        <h2>PUBLICATIONS</h2>
        <div className="line-title" />
      </div>
      <div className="Publications-content">{cards}</div>
    </section>
  );
}

export default Publications;
