import React from 'react';

import Layout from '../components/Layout';
import pic01 from '../assets/images/pic01.png';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>About me</h2>
      </header>
      <section className="wrapper style5">
        <div className="inner">
        <div className="image right">
          <img src={pic01} alt="" />
        </div>
          <h3>Hello, my names is Iván!</h3>
          <hr />
          <h4>Work experience</h4>
          <h5><a href="https://nearshoreit.mx/">Nearshore IT</a></h5>
          <p>- April 2018 - current - Hermosillo, Son.</p>

          <h5><a href="https://eastridge.com/">Eastridge Workforce Solutions</a></h5>
          <p>- Jan/2017 - Oct/2018 - Tijuana, BC.</p>
          
          <h5><a href="https://sonataservices.com/">Sonata Services</a></h5>
          <p>- Jan/2015 - Oct/2017 - Tijuana, BC.</p>

          <hr/>
          
          <h4>Brands i've collaborated with</h4>
          <p>
            I've had the opportunity to collaborate directly or indirectly with great brands.
          </p>
          <ul>
            <li>NaturallyCurly</li>
            <li>Taylor Made</li>
            <li>Events.com</li>
          </ul>

          <hr/>

          <h4>Other experiences in my career</h4>
          <ul>
            <li>Concluded a trademark registration process under IMPI. (Mexican Institute of Industrial Property).</li>
            <li>Talked in Google I/O Tijuana about Material Design</li>
            <li>Conference at Universidad Tecnologica de Tijuana about frontend
            technologies.</li>
            <li>Angular workshop in Universidad Tecnologica de Tijuana.</li>
          </ul>

          <hr/>

          <h4>Education</h4>
          <ul>
            <li>Computer Science, MIT OpenCourseWare.</li>
            <li>Backend and Frontend developer program at Platzi.</li>
            <li>Computer Information Systems, Universidad Tecnologica de Hermosillo</li>
          </ul>

          <p>
            If you are looking for more information about me or services provided on this website, you can check out my <a href="https://linkedin.com/in/ivanmtzaguero/" target="_blank" rel="noopener noreferrer">Likedin cv</a> or resume in pdf format. if you are hand-ons to code review my <a href="https://github.com/alcance" target="_blank" rel="noopener noreferrer">code repositories.</a>
          </p>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
