import Accordion from "react-bootstrap/Accordion";

const Faq = () => {
  return (
    <div className="faq-area" id="faq">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="fs-70 fw-bold text-center title">FAQ</div>
            <div className="faq-content">
              <Accordion defaultActiveKey="">
                {faqData.map((item) => (
                  <Accordion.Item key={item.id} eventKey={item.id.toString()}>
                    <Accordion.Header>{item.title}</Accordion.Header>
                    <Accordion.Body>{item.desc}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;

const faqData = [
  {
    id: 0,
    title: "What is Pier Protocol?",
    desc: "Pier is a decentralized peer-to-peer protocol built on the Ethereum blockchain, designed to facilitate Peer-To-Peer with speed, security, and minimal fees.",
  },
  {
    id: 1,
    title: "Why Multi-Chain?",
    desc: "The decision to adopt a multichain approach is driven by our commitment to inclusivity, flexibility, and resilience. By operating across multiple chains, our protocol ensures wider accessibility, enhanced security and optimized performance.",
  },
  {
    id: 2,
    title: "How Do I Get Started?",
    desc: "To get started, create a Metamask wallet, acquire some ETH (Ethereum's native token) for transaction fees, and then connect your wallet on our profile and start trading",
  },
  {
    id: 3,
    title: "Where Can I Find More Information or Get Support?",
    desc: "For more information, visit our Gitbook. For support, join our Telegram where our team and community members can assist you.",
  },
];
