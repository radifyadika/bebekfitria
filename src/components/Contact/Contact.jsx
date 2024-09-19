import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
import { MdVideocam } from "react-icons/md";

const Contanct = () => {
  const phoneNumber = "0813-1005-5488"; // Update with the correct number
  const whatsappNumber = "6281310055488"; // Update with the correct number (without dashes)

  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left"></div>
        <div className="flexColStart contactModes">
          {/* first row */}
          <div className="flexStart row">
            <div className="flexColCenter mode">
              <div className="flexStart">
                <div className="flexCenter icon">
                  <MdCall size={25} color="#A7D6C2" />
                </div>
                <div className="flexColStart detail">
                  <span className="primaryText">Call</span>
                  <span className="secondaryText">{phoneNumber}</span>
                </div>
              </div>
              <a href={`tel:${phoneNumber}`} className="flexCenter button">
                Call Now
              </a>
            </div>

            {/* second mode */}
            <div className="flexColCenter mode">
              <div className="flexStart">
                <div className="flexCenter icon">
                  <BsFillChatDotsFill size={25} color="#A7D6C2" />
                </div>
                <div className="flexColStart detail">
                  <span className="primaryText">Chat</span>
                  <span className="secondaryText">{phoneNumber}</span>
                </div>
              </div>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                className="flexCenter button"
              >
                Chat Now
              </a>
            </div>
          </div>

          {/* second row */}
          <div className="flexStart row">
            <div className="flexColCenter mode">
              <div className="flexStart">
                <div className="flexCenter icon">
                  <MdVideocam size={25} color="#A7D6C2" />
                </div>
                <div className="flexColStart detail">
                  <span className="primaryText">Video Call</span>
                  <span className="secondaryText">{phoneNumber}</span>
                </div>
              </div>
              <a href={`tel:${phoneNumber}`} className="flexCenter button">
                Video Call Now
              </a>
            </div>

            {/* fourth row */}
            <div className="flexColCenter mode">
              <div className="flexStart">
                <div className="flexCenter icon">
                  <HiChatBubbleBottomCenter size={25} color="#A7D6C2" />
                </div>
                <div className="flexColStart detail">
                  <span className="primaryText">Message</span>
                  <span className="secondaryText">{phoneNumber}</span>
                </div>
              </div>
              <a href={`sms:${phoneNumber}`} className="flexCenter button">
                Message Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contanct;
