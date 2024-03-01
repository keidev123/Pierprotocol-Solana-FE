import Integration from "../../assets/icons/Integration";
import Speed from "../../assets/icons/Speed";
import Security from "../../assets/icons/Security";

const Features = () => {
  return (
    <div className="features-area" id="features">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="fs-70 fw-bold text-center title">Key Features</div>
            <div className="features-content">
              {featureData.map((item) => (
                <div className="features-item" key={item.id}>
                  <div className="icon">{item.icon}</div>
                  <div className="fs-40 fw-bold title">{item.title}</div>
                  <p className="fs-10">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

const featureData = [
  {
    id: 1,
    icon: <Speed />,
    title: "Multi-Chain Infrastructure",
    text: "Each blockchain has unique attributes; by leveraging their individual strengths, our protocol optimizes performance and efficiency.",
  },
  {
    id: 2,
    icon: <Security />,
    title: "Enhanced Security",
    text: "With a direct peer-to-peer approach, our protocol maximizes security, fostering trust and reliability in every interaction.",
  },
  {
    id: 3,
    icon: <Integration />,
    title: "Smart Contract Integration",
    text: "Our smart contract, optimized for multi-chains, enabling a wide range of applications, all benefiting from peer-to-peer efficiency",
  },
];
