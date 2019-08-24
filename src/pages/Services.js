import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Services</h2>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <div className="row">
            <h4>Contracts and pricing</h4>
            <p>Short term freelance, remote contracts are preferred. My job is to build a optimal environment for your development cycle. Bringing in to your place specific training and mentoring programs for your team to grow and learn how to apply it in field.</p>
            <p>Once this program has been implemented, I will step back.</p>

            <div className="table-wrapper">
              <h5>100% remote software development contracts and on site training</h5>
              <table>
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Remote</td>
                    <td>Hourly based rate for consulting and management services.</td>
                  </tr>
                  <tr>
                    <td>Short-term</td>
                    <td>Fixed price based for project.</td>
                  </tr>
                  <tr>
                    <td>Training</td>
                    <td>Specific training program for your team or group.</td>
                  </tr>
                  <tr>
                    <td>Mentoring</td>
                    <td>One on one inmerssive training program.</td>
                  </tr>
                  <tr>
                    <td>Conferences</td>
                    <td>One payment event for special events and conferences.</td>
                  </tr>
                  <tr>
                    <td>Seminars</td>
                    <td>Academic programs, based on number of people.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        
          <h3>YOUR TO GO SPECIALIST FOR MODERN WEB PROJECTS</h3>
          <p>
            As long time experieced developer in different industries and product types, I am able to contribute to your project wearing several differents hats, it all depends about your specific needs.
          </p>
          <p>
            Leading and collaborating with distributed remote teams, stakeholders and clients can be a real pain. So, think of me as channel to connect all people involved in the project.
          </p>

          <p>I will deal with supervision and consulting, and put at your disposal the best communication and management tools for an outstanding development experience.</p>

          <p>The development process includes communication with managers, designers, developers, marketers, and stakeholders.</p>

          <hr />
          <h4>BENEFITS</h4>
          <div className="row">
						<div className="col-12 col-12-medium">
              <ol>
                <li>
                <h5>Launch the first version quickly</h5>
                Build the first version of your product and launch it to the market as soon as possible so you can start getting feedback from your clients
                </li>
                <br/>
                <li>
                <h5>Validate it</h5>
                Get your product on the market so you can validate it. Save time, energy and money, reach your desired result faster.
                </li>
                <br/>
                <li>
                <h5>Maximize profits</h5>
                Feedback research at every stage can help you confirm your client’s needs, so you can make changes without investing money unnecessarily.
                </li>
              </ol>

            </div>
          </div>
          <hr/>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
