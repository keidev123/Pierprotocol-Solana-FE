import React, { useState } from "react";
import { Tab, Nav } from "react-bootstrap";
import Buy from "./Buy";
import Activity from "./Activity";
import { Link } from "react-router-dom";

const Dashboard: React.FC = () => {

    const [searchWord, setSearchWord] = useState("")

    return (
        <div className="dashboard-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="fs-30 fw-bold title">Open Positions</div>
                        <div className="dashboard-tabs">
                            <Tab.Container defaultActiveKey="first">
                                <div className="tabs-nav">
                                    <Nav variant="pills">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first" onClick={() => setSearchWord("")}>BUY</Nav.Link>
                                        </Nav.Item>
                                        {/* <Nav.Item>
                                            <Nav.Link eventKey="second">SELL</Nav.Link>
                                        </Nav.Item> */}
                                        <Nav.Item>
                                            <Nav.Link eventKey="third" onClick={() => setSearchWord("")}>Activity</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <div className="search">
                                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_401_8554)">
                                                <path d="M19.6387 18.0925L15.8064 14.2586C18.6739 10.4266 17.892 4.99568 14.0601 2.12821C10.2282 -0.739264 4.79719 0.0426015 1.92972 3.87454C-0.93775 7.70648 -0.155885 13.1375 3.67605 16.0049C6.75418 18.3083 10.9819 18.3083 14.0601 16.0049L17.894 19.8388C18.3758 20.3206 19.1569 20.3206 19.6386 19.8388C20.1204 19.357 20.1204 18.5759 19.6386 18.0941L19.6387 18.0925ZM8.90003 15.2649C5.49438 15.2649 2.73359 12.5042 2.73359 9.09851C2.73359 5.69287 5.49438 2.93208 8.90003 2.93208C12.3057 2.93208 15.0665 5.69287 15.0665 9.09851C15.0628 12.5026 12.3042 15.2613 8.90003 15.2649Z" fill="#CFCFCF" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_401_8554">
                                                    <rect width="19.8" height="19.8" fill="white" transform="translate(0.200195 0.400269)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <input placeholder="Enter token name or mint address" onChange={(e) => setSearchWord(e.target.value)} value={searchWord} />
                                    </div>
                                    <div className="ml-lg-auto">
                                        <Link to={"/create-offer"} className="btn-lg create-offer">
                                            <span>CREATE OFFER</span>
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle
                                                    cx="12.05"
                                                    cy="11.8502"
                                                    r="11.55"
                                                    fill="url(#paint0_linear_0_1)"
                                                />
                                                <path
                                                    d="M11.0507 17.6268V8.06775H13.7111V17.6268H11.0507ZM7.59807 14.1808V11.5204H17.1571V14.1808H7.59807Z"
                                                    fill="white"
                                                />
                                                <defs>
                                                    <linearGradient
                                                        id="paint0_linear_0_1"
                                                        x1="26.725"
                                                        y1="11.7174"
                                                        x2="-3.3"
                                                        y2="11.7174"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop stopColor="#5200FF" />
                                                        <stop offset="1" stopColor="#58ADFE" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <Buy searchWord={searchWord} />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <Activity searchWord={searchWord} />
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
