import React, { useState } from "react";

 
import {
  AnimatedTextCharacter, 
  CostumLinesAnimation,
  ElementAnimation,
} from "../../components/AnimationComponents";


import { frequentlyAsked } from "../../assets/DataComponents";
import "./contact.css";

// images
import heroImage from "../../images/bgContactUs.webp";
import locationIcon from "../../icons/locationIcon.svg";
import emailIcon from "../../icons/emailContactIcon.svg";
import phoneIcon from "../../icons/phoneIcon.svg";
import location from "../../images/location.webp";

function Contact() {
  const [faqState, setfaqState] = useState(
    Array(frequentlyAsked.length).fill(false)
  );

  const toggleFaq = (index) => {
    const newfaqState = [...faqState];
    newfaqState[index] = !newfaqState[index];
    setfaqState(newfaqState);
  };

  return (
    <div className="contact-container">
      <div className="hero d-center">
        <div className="hero-image">
          <img src={heroImage} alt="" />
        </div>

        <div className="about-page d-center">
          <div className="title">
            <h2 className="d-center">
              {" "}
              <AnimatedTextCharacter delay={1} text={"CONTACT"} />{" "}
              <span>
                {" "}
                <AnimatedTextCharacter text={"US"} delay={2} />{" "}
              </span>
            </h2>

            <CostumLinesAnimation
              classContainer={"lines_title"}
              width={"100%"}
            />
          </div>
          <section className="d-center">
            <ElementAnimation
              classContainer={"d-center"}
              startPositionX={-90}
              element={
                <p>
                  Connect with our team for all your car related needs. We are
                  ready to help you with the best information, services and
                  solutions for your vehicle.
                </p>
              }
            />
          </section>
        </div>
      </div>

      <div className="contact-information d-center">
        {[
          [locationIcon, "Location", `Makassar,  South Sulawesi Indonesian`],
          [phoneIcon, "Phone", ["+1290323", "+19238273"]],
          [
            emailIcon,
            "Email",
            ["muhismailmks@gmail.com", "computer.nyasar@gmail.com"],
          ],
        ].map(([icon, aboutContact, info], i) => (
          <ElementAnimation
            key={i}
            classContainer={"detail-contact d-flex"}
            delay={0.4 + i / 2}
            element={
              <>
                <div className="contact-icon d-flex">
                  <div className="icon">
                    <img src={icon} alt="" />
                  </div>
                  <h4>{aboutContact}</h4>
                </div>

                {Array.isArray(info) ? (
                  info.map((text, num) => <p key={num}>{text}</p>)
                ) : (
                  <p>{info}</p>
                )}
              </>
            }
          />
        ))}
      </div>

      <div className="faq-container">

        <ElementAnimation 
            delay={1}
            startPositionX={-90}
            element={
              <h2 className="faq-title">Frequently Asked Questions</h2> 
            }
        />

        <main>
          <div className="words-faq-container d-flex">
            {frequentlyAsked.map((ask, i) => (
              <ElementAnimation
                startPositionX={-50}
                delay={0.4 + i / 2}   
                classContainer={"main-faq"}
                key={i}
                element={ 
                  <div onClick={() => toggleFaq(i)} className={faqState[i] ? `faq active` : "faq "}>     
                   <div className="question d-flex">
                      <h4>{ask.question}</h4>
                    </div>
                    <div className="answer">
                      <p className="faq-article-text">{ask.answer}</p>
                    </div> 
                  </div>
    
                }
              />
            ))}
          </div>

          <div className="about-faq d-flex">
            <section>
              <ElementAnimation
                 delay={.3}
                 startPositionX={50}
                 element={  <h5>Feel free to explore the existing questions,</h5>}
              />
              <ElementAnimation
                 delay={.6}
                 startPositionX={80}
                 element={   <p className="faq-article-text">
                 We've collected frequently asked questions from users like you
                 and packaged them into an easy-to-access guide. Whether you are
                 an experienced driver or considering your first car purchase, we
                 hope that our FAQ page will provide valuable insight and
                 knowledge.
               </p>}
              />

            </section>
            <section>
            <ElementAnimation
                 delay={1}
                 startPositionX={50}
                 element={ <h5>ask us what you want to know about the car,</h5>}
              />
              <ElementAnimation
                 delay={1.3}
                 startPositionX={80}
                 element={  <p className="faq-article-text">
                 Do you want to know more about car maintenance, the latest
                 technology, or considerations when buying a new car? Do you need
                 guidance on maintaining your vehicle or understanding automotive
                 terms? We strive to provide detailed answers to these questions
                 and more.
               </p>}
              />

            </section>
          </div>
        </main>
      </div>

      <div className="question-form">
      <ElementAnimation
                 delay={.6}
                 startPositionX={80}
                 element={  <h4>  Do you have a question, service request, or  suggestion? Please fill in the form below </h4>
                }
              />

        <form action="" className="d-flex">
          <ElementAnimation 
            classContainer={'input-container d-center'}
            delay={.3}
            element={ <input type="text" placeholder="Name" required />}
          />
          <ElementAnimation 
            classContainer={'input-container d-center'}
            delay={.5}
            element={ <input type="text" placeholder="Email" required />}
          />
          <ElementAnimation 
            classContainer={'input-container d-center'}
            delay={.7}
            element={  <input type="text" placeholder="Message" required />}
          />
          <ElementAnimation 
            classContainer={'d-center'}
            delay={.8}
            element={ <button type="submit">Submit</button>}
          /> 
        </form>
      </div>

      <div className="location">
        <ElementAnimation
          element={ <img src={location} alt="" />}
          delay={.2}
        />
       
      </div>

    </div>
  );
}

export default Contact;
