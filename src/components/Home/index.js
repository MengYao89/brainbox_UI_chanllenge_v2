import "./index.scss";
import search from "../../assets/svg/search.svg";
import arrow from "../../assets/svg/arrow-up-right.svg";
import { useState } from "react";
import Nav from "../Nav";
import SlidingBlock from "../SlidingBlock";
const Home = () => {
  let defaultInfo = {
    title: `It's never too late to try something new`,
    des:
      "Three paths lead to knoaledge: the path of reflection is the noblest, tha path of imitation is the easiest. and the path of experience is the bitterest"
  };
  let slidingList = [
    {
      iconUrl: arrow,
      title: "Explore",
      des: "Expiore the best places deals"
    },
    {
      iconUrl: arrow,
      title: "Stories",
      des: "Our customer and company stories"
    },
    {
      iconUrl: arrow,
      title: "About",
      des: "Our company history"
    },
    {
      iconUrl: arrow,
      title: "Help",
      des: "FAQ and Support"
    }
  ];
  const [isShow, setIsShow] = useState(false);
  const [int, setInp] = useState("");
  const [routerKey, setRouterKey] = useState("Home");
  const [info, setInfo] = useState({ ...defaultInfo });
  // navbar
  let navList = [
    {
      title: "Explore"
    },
    {
      title: "Stories"
    }
  ];

  //whether to show the search box
  const handleShow = () => {
    setIsShow(true);
  };
  // Listener of search box
  const onInput = (e) => {
    setInp(e.target.value);
  };

  const handleBack = () => {
    setIsShow(false);
    setInp("");
  };

  const callback = (val) => {
    setRouterKey(val);
    //Switch Homepage and other page content
    if (val === "Home") {
      setInfo({ ...defaultInfo });
    }
    /*
    else {
      slidingList.forEach((item, index) => {
        if (item.title === val) {
          setInfo({ ...item });
        }
      });
    }
    */
  };
  return (
    <>
      <div className="box_home">
        <div className="box_left">
          <div className="nav">
            <img src={search} onClick={handleShow} className="search" alt="" />
            {isShow && (
              <input
                onInput={onInput}
                className="inp"
                type="text"
                name=""
                id=""
              />
            )}
            <Nav routerKey={routerKey} callback={callback} navList={navList} />
          </div>
          <div className="box_content">
            {int ? (
              <>
                <div className="box_txt">No result</div>
                <div className="sub_btn" onClick={() => handleBack()}>
                  Back
                </div>{" "}
              </>
            ) : (
              <>
                {routerKey === "Home" && (
                  <>
                    <div className="box_title">{info.title}</div>
                    <div className="box_txt">{info.des}</div>
                    <div className="sub_btn" onClick={() => callback("Home")}>
                      Book Now
                    </div>
                  </>
                )}
                {routerKey === "Explore" && (
                  <>
                    <div className="box_title">Mapping and learning</div>
                    <div className="box_txt">
                      BrainBox AI connects to your existing HVAC system in under
                      three hours. Within two to four months (depending on
                      building size), the AI engine learns your building’s
                      thermal behaviours and maps your system’s point names. It
                      tests all algorithms virtually before deploying them in
                      your building.
                    </div>
                    <div className="box_title">Real-time optimising</div>
                    <div className="box_txt">
                      Using these predictions, the AI identifies optimisation
                      strategies and autonomously sends commands to individual
                      pieces of HVAC equipment. That’s how it enhances your
                      system to always use the least energy while ensuring the
                      most comfortable temperatures for your occupants.
                    </div>
                    <div className="sub_btn" onClick={() => callback("Home")}>
                      Back
                    </div>
                  </>
                )}
                {routerKey === "Stories" && (
                  <>
                    <div className="box_title">Our Stories</div>
                    <iframe
                      width="75%"
                      height="35%"
                      src="https://www.youtube.com/embed/hyS6SyN_k6Y?controls=0"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                    <div className="sub_btn" onClick={() => callback("Home")}>
                      Back
                    </div>
                  </>
                )}
                {routerKey === "About" && (
                  <>
                    <div className="box_txt">
                      As innovators of the global energy transition, BrainBox
                      AI’s game-changing HVAC technology leverages AI to make
                      buildings smarter and greener. Working together with our
                      trusted global partners, we empower building owners to
                      reduce their carbon footprints.
                    </div>
                    <div className="box_txt">
                      Headquartered in Montreal, Canada with team members
                      throughout the world, BrainBox AI brings sustainability to
                      the built environment to significantly reduce energy
                      consumption and costs. Since our launch in 2019, more than
                      100,000,000 square feet of commercial building space has
                      been impacted by our technology, in 70 cities worldwide.
                    </div>
                    <div className="sub_btn" onClick={() => callback("Home")}>
                      Back
                    </div>
                  </>
                )}
                {routerKey === "Help" && (
                  <>
                    <div className="box_title">Need Help ?</div>
                    <div className="box_txt">
                      Leave your email and question, we will get back to you
                      soon.
                    </div>
                    <input
                      type="email"
                      className="email_input"
                      name="email"
                      placeholder="Your email"
                    />
                    <textarea
                      name="message"
                      placeholder="Message"
                      className="message_txt"
                    ></textarea>
                    <div className="sub_btn" onClick={() => callback("Home")}>
                      Back
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </div>
        <div className="box_right">
          <SlidingBlock
            routerKey={routerKey}
            callback={callback}
            list={slidingList}
          />
        </div>
      </div>
    </>
  );
};
export default Home;
