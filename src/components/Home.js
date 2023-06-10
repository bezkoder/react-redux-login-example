import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";
import HomeProfileIcon from "../icons/home-profile-icon";
import Icon from "@ant-design/icons";
import RiceDonateIcon from "../icons/rice-donate-icon";
import MyProfileIcon from "../icons/my-profile-icon";
import SearchIcon from "../icons/search-icon";
import MessagingIcon from "../icons/messaging-icon";
import CallIcon from "../icons/call-icon";
import InvitationIcon from "../icons/invitation-icon";
import WelcomBanner from "../icons/welcome-banner";
import ChildSupport from "../icons/child-support";
import ChildSup from '../icons/child-support.png';
import LiveIcon from '../icons/live.png';
import LiveText from '../icons/live-text.png';
import Rainbow from '../icons/Rainbow.png';
import RegisterCounter from '../icons/MyHopeRegisterCounter.png';
import FlameText from '../icons/flame-of-hope.png'
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  // useEffect(() => {
  //   UserService.getPublicContent().then(
  //     (response) => {
  //       setContent(response.data);
  //     },
  //     (error) => {
  //       const _content =
  //         (error.response && error.response.data) ||
  //         error.message ||
  //         error.toString();

  //       setContent(_content);
  //     }
  //   );
  // }, []);

  /* global $, jQuery */

  // (function () {
  //   "use strict";

  //   var carousels = function () {
  //     $(".owl-carousel1").owlCarousel({
  //       loop: true,
  //       center: true,
  //       margin: 0,
  //       responsiveClass: true,
  //       nav: false,
  //       responsive: {
  //         0: {
  //           items: 1,
  //           nav: false
  //         },
  //         680: {
  //           items: 2,
  //           nav: false,
  //           loop: false
  //         },
  //         1000: {
  //           items: 3,
  //           nav: true
  //         }
  //       }
  //     });
  //   };

  //   (function ($) {
  //     carousels();
  //   })(jQuery);
  // })();

  return (
    <div className="container">
      <div className="icons-container">
        <div className="left-icons">
          <div className="home-profile-icon">
            <Icon onClick={() => navigate('/register')} component={HomeProfileIcon} />
          </div>
          <div>Name</div>
        </div>
        <div className="right-icons">
          <div className="left-action-icons-1">
            <Icon onClick={() => navigate('/register')} component={InvitationIcon} />
          </div>
          <div className="left-action-icons-2">
            <Icon onClick={() => navigate('/register')} component={RiceDonateIcon} />
          </div>
          <div className="left-action-icons-3">
            <Icon onClick={() => navigate('/register')} component={MyProfileIcon} />
          </div>
          <div className="left-action-icons-4">
            <Icon onClick={() => navigate('/register')} component={SearchIcon} />
          </div>
          <div className="left-action-icons-5">
            <Icon onClick={() => navigate('/register')} component={MessagingIcon} />
          </div>
          <div className="left-action-icons-6">
            <Icon onClick={() => navigate('/register')} component={CallIcon} />
          </div>
        </div>
      </div>
      {/* <div class="gtco-testimonials">
        <h2>Testimonials Carousel - Cards Comments</h2>
        <div class="owl-carousel owl-carousel1 owl-theme">
          <div>
            <div class="card text-center">
              <image
                class="card-img-top"
                src="https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300"
                alt=""
              />
              <div class="card-body">
                <h5>
                  Ronne Galle <br />
                  <span> Project Manager </span>
                </h5>
                <p class="card-text">
                  “ Nam libero tempore, cum soluta nobis est eligendi optio
                  cumque nihil impedit quo minus id quod maxime placeat ”{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div class="card text-center">
              <image
                class="card-img-top"
                src="https://images.unsplash.com/photo-1588361035994-295e21daa761?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=301&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=301"
                alt=""
              />
              <div class="card-body">
                <h5>
                  Missy Limana
                  <br />
                  <span> Engineer </span>
                </h5>
                <p class="card-text">
                  “ Nam libero tempore, cum soluta nobis est eligendi optio
                  cumque nihil impedit quo minus id quod maxime placeat ”{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div class="card text-center">
              <image
                class="card-img-top"
                src="https://images.unsplash.com/photo-1575377222312-dd1a63a51638?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=302&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=302"
                alt=""
              />
              <div class="card-body">
                <h5>
                  Martha Brown
                  <br />
                  <span> Project Manager </span>
                </h5>
                <p class="card-text">
                  “ Nam libero tempore, cum soluta nobis est eligendi optio
                  cumque nihil impedit quo minus id quod maxime placeat ”{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div class="card text-center">
              <image
                class="card-img-top"
                src="https://images.unsplash.com/photo-1549836938-d278c5d46d20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=303&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=303"
                alt=""
              />
              <div class="card-body">
                <h5>
                  Hanna Lisem
                  <br />
                  <span> Project Manager </span>
                </h5>
                <p class="card-text">
                  “ Nam libero tempore, cum soluta nobis est eligendi optio
                  cumque nihil impedit quo minus id quod maxime placeat ”{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="welcome-banner">
        <Icon onClick={() => navigate('/register')} component={WelcomBanner} />
      </div>
      <div style={{ width: '100%' }}>
        <img style={{ width: '100%' }} src={ChildSup} />
      </div>
      {/* <div className="banner-series">
        <Icon onClick={() => navigate('/register')} component={ChildSupport} />
      </div> */}
      <div style={{ marginBottom: '10px', textAlign: 'center' }}>
       <img src={LiveText} />
      </div>
      <div style={{ marginBottom: '10px', textAlign: 'center' }}>
        <img style={{ width: '100%' }} src={LiveIcon} />
      </div>
      <div className="prayer-head">
        <div className="headings">One fire</div>
        <div className="headings">that human beings</div>
        <div className="headings">put prayers and or wishes into</div>
      </div>
      <div className="flame-container">
        <div className="the-world-text">
          <div className="world-text">The world of</div>
          <div style={{ textAlign: 'center' }}>
            <img style={{ width: '200px' }} src={RegisterCounter} />
          </div>
          <div className="world-text">fires united as one</div>
          <div className="world-text">that is</div>
          <div style={{ marginTop: '90px' }} className="flame-image">
            <img src={FlameText} />
          </div>
        </div>
        <img style={{ widht: '100%' }} src={Rainbow} />
      </div>
    </div>
  );
};

export default Home;
