import React from "react";
import { Pane, Paragraph, Heading } from "evergreen-ui";
import Appstore from "../assets/appstore.svg";
import Playstore from "../assets/playstore.png";
import Signup from "./Signup";

class Contact extends React.Component {
    render() {
        return (
            <Pane
                background="#212121"
                paddingTop="15vh"
                paddingBottom="10vh"
                paddingRight="10vw"
                paddingLeft="10vw"
                textAlign="center"
                display="flex"
                flexDirection="column"
                minHeight="40vh"
                justifyContent="space-between"
            >
                <Pane>
                    <Pane textAlign="center" flexGrow="1">
                        <Heading
                            color="white"
                            size={900}
                            fontWeight={1500}
                            marginBottom="5vh"
                        >
                            Sign up for our closed-beta!
                        </Heading>
                        <Signup
                            alignment="center"
                            width={this.props.mobile ? "100%" : "50%"}
                            mobile={this.props.mobile}
                        />
                    </Pane>
                    {/* <Heading
                        size={900}
                        fontSize={this.props.mobile ? "32px" : "48px"}
                        textAlign="center"
                        color="white"
                    >
                        So What Are You Waiting For?
                    </Heading>
                    <a href="https://google.com" rel="noopener" target="_blank">
                        <Button
                            iconAfter="arrow-right"
                            appearance="primary"
                            intent="success"
                            height={48}
                            marginTop="5vh"
                        >
                            Join our Discord
                        </Button>
                    </a> */}
                </Pane>
                <Pane display="flex" marginTop="2em" justifyContent="center">
                    <Pane margin={10}>
                        <a
                            href="https://apps.apple.com/us/app/discord-chat-for-games/id985746746"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <img src={Appstore} alt="Get it on App Store"></img>
                        </a>
                    </Pane>
                    <Pane margin={10}>
                        <a
                            href="https://play.google.com/store/apps/details?id=com.discord&hl=en_CA&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <img
                                height="40px"
                                alt="Get it on Google Play"
                                src={Playstore}
                            />
                        </a>
                    </Pane>
                </Pane>
                <Pane>
                    <Paragraph color="white">
                        If you’re on mobile, we highly recommend the Discord
                        app, found on all major app stores.
                    </Paragraph>
                </Pane>
            </Pane>
        );
    }
}

export default Contact;
