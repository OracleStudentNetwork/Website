import React from "react";
import { Heading } from "evergreen-ui";
import { Image } from "@chakra-ui/core";
import Logo from "../assets/nav_logo.png";

class Navbar extends React.Component {
    render() {
        return (
            <nav
                height="5vh"
                style={{
                    display: this.props.mobile ? "none" : "flex",
                    justifyContent: "flex-start",
                    alignItems: this.props.mobile ? "flex-start" : "",
                }}
            >
                <a href="/" style={{ marginLeft: "1vw" }}>
                    <Image src={Logo} alt="logo" width="auto" height="40px" />
                </a>
                <ul className="navbar-links">
                    <Heading size={500}>
                        <li>
                            <a href="/#mission">Our Mission</a>
                        </li>
                    </Heading>
                    <Heading size={500}>
                        <li>
                            <a href="/#services">What We Do</a>
                        </li>
                    </Heading>
                    <Heading size={500}>
                        <li>
                            <a href="/#roadmap">Road Map</a>
                        </li>
                    </Heading>
                    <Heading size={500}>
                        <li>
                            <a href="/#learn-more">Learn More</a>
                        </li>
                    </Heading>
                    <Heading size={500}>
                        <li>
                            <a href="/#contact">Contact Us</a>
                        </li>
                    </Heading>
                    {/* <Heading size={500}>
                        <li>
                            <a href="terms">Terms</a>
                        </li>
                    </Heading> */}
                </ul>
            </nav>
        );
    }
}

export default Navbar;
