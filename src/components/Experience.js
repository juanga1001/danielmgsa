import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import data from "./data_Experience";

function Experience(props) {
  const cards = data.map((item) => {
    return (
      <VerticalTimelineElement
        key={item.id}
        className="vertical-timeline-element"
        contentStyle={{
          background: "#F3F3F3",
          color: "#273F27",
          boxShadow: "none",
        }}
        contentArrowStyle={{ borderRight: "7px solid  #F3F3F3" }}
        date={item.date}
        iconStyle={{ background: "Transparent" }}
        icon={<img className="icon-timeline" src={item.icon} alt="" />}
      >
        <h3 className="vertical-timeline-element-title">{item.profile}</h3>
        <h4 className="vertical-timeline-element-subtitle">
          {item.organization}
        </h4>
        <p className="vertical-timeline-element-paragraph">
          {item.description}
        </p>
      </VerticalTimelineElement>
    );
  });

  return (
    <section className="Experience-container">
      <div className="section-title">
        <h2>EXPERIENCE</h2>
        <div className="line-title" />
      </div>

      <VerticalTimeline lineColor={"#A7A7A7"}>{cards}</VerticalTimeline>
    </section>
  );
}

export default Experience;
