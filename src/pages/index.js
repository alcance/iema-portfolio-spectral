import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';
import { Link } from 'gatsby';

import pic1 from '../assets/images/pic01.svg';
import pic2 from '../assets/images/pic02.svg';
import pic3 from '../assets/images/pic03.svg';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="/#" className="button primary">
                Tech stack
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
            You have an awesome idea or product
            <br /> 
            I will facilitate you development process
          </h2>
          <p>
            My mission is to create a hub for talented developers and great companies, using knowledge as the vehicle for personal and professional growth.
            <br />
          </p>
        </header>
        <ul className="icons major">
          <li>
            <span className="icon major style1">
              <i class="fab fa-apple fa-3x"></i>
            </span>
          </li>
          <li>
            <span className="icon major style1">
              <i class="fab fa-linux fa-3x"></i>
            </span>
          </li>
          <li>
            <span className="icon major style1">
              <i class="fab fa-js fa-3x"></i>
            </span>
          </li>
          <li>
            <span className="icon major style1">
              <i class="fab fa-python fa-3x"></i>
            </span>
          </li>
          <li>
            <span className="icon major style1">
              <i class="fab fa-react fa-3x"></i>
            </span>
          </li>
          <li>
            <span className="icon major style1">
              <i class="fab fa-angular fa-3x"></i>
            </span>
          </li>
          <li>
            <span className="icon major style1">
              <i class="fab fa-ember fa-3x"></i>
            </span>
          </li>
          <li>
            <span className="icon major style1">
              <i class="fab fa-node fa-3x"></i>
            </span>
          </li>
          <li>
            <span className="icon major style1">
              <i class="fab fa-sass fa-3x"></i>
            </span>
          </li>
          <li>
            <span className="icon major style1">
              <i class="fab fa-gulp fa-3x"></i>
            </span>
          </li>
          <li>
            <span className="icon major style1">
              <i class="fab fa-grunt fa-3x"></i>
            </span>
          </li>
          <li>
            <span className="icon major style1">
              <i class="fab fa-git fa-3x"></i>
            </span>
          </li>
          <li>
            <span className="icon major style1">
              <i class="fab fa-gitlab fa-3x"></i>
            </span>
          </li>
          <li>
            <span className="icon major style1">
              <i class="fab fa-bitbucket fa-3x"></i>
            </span>
          </li>
          <li>
            <span className="icon major style1">
              <i class="fab fa-docker fa-3x"></i>
            </span>
          </li>
          <li>
            <span className="icon major style1">
              <i class="fab fa-jenkins fa-3x"></i>
            </span>
          </li>
          <li>
            <span className="icon major style1">
              <i class="fab fa-aws fa-3x"></i>
            </span>
          </li>
          <li>
            <span className="icon major style1">
              <i class="fab fa-digital-ocean fa-3x"></i>
            </span>
          </li>
          <li>
            <span className="icon major style1">
              <i class="fab fa-google fa-3x"></i>
            </span>
          </li>
          <li>
            <span className="icon major style1">
              <i class="fab fa-jira fa-3x"></i>
            </span>
          </li>
          <li>
            <span className="icon major style1">
              <i class="fab fa-slack fa-3x"></i>
            </span>
          </li>
        </ul>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <h2>
            End-to-end Software Consultant
            <br />
          </h2>
          <p>
            In more than a decade I've been growing my career within web development, education, marketing and business.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
          <h2>
            Training and Mentoring
            <br />
          </h2>
          <p>
            Modern web custom made programs for inmmesive training for your team or tailored mentorship one on one sessions.
          </p>
          
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>
            Conferences and seminars
            <br />
          </h2>
          <p>
            My career is my passion, and i love to talk about it. Share my thoughts and experience to large groups or transfer knowledge using learning programs.
          </p>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>FULL DEVELOPMENT CYCLE SERVICES</h2>
          <p>
            I am with you from brain storming to client satisfaction.
            <br />
            These are just examples of services, if you have an idea. <Link to="/Contact">Let's talk!</Link>
          </p>
        </header>
        <ul className="features">
          <li className="fa-paper-plane">
            <h3>Analysis and planning</h3>
            <p>
              Enable yourself with the best communication and management tools for an outstanding development experience.
            </p>
          </li>
          <li className="icon solid fa-laptop">
            <h3>Brainstorming service</h3>
            <p>
              Let's talk about your project and bounce ideas to get a bigger picture and start planning. 
            </p>
          </li>
          <li className="icon solid fa-code">
            <h3>Code quality audit and improvement</h3>
            <p>
              I will read your codebase, looking opportunity areas for improvements, refactor modules using modern languages to make it look great and understandble.
            </p>
          </li>
          <li className="icon solid fa-headphones-alt">
            <h3>Minimum viable product (MVP)</h3>
            <p>
              Validate your idea quicly with most modern tool sets. I will help you to reduce launching costs to the minimium using cross-platform technologies.
            </p>
          </li>
          <li className="icon fa-heart">
            <h3>Agile methodologies</h3>
            <p>
              Quick iterations are needed in order to gain feedback from the end user. 
            </p>
          </li>
          <li className="icon fa-flag">
            <h3>Team building</h3>
            <p>
              Build a successful team and manage your software projects. Recruitment and training service to build your full-time development cell.
            </p>
          </li>
        </ul>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Let's talk!</h2>
          <p>
            To learn more about me or services, feel free to contact me or read more about it.
          </p>
        </header>
        <ul className="actions stacked">
          <li>
            <Link to="/Contact" className="button fit primary">Contact</Link>
          </li>
          <li>
            <Link to="/Services" className="button fit">Services</Link>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
