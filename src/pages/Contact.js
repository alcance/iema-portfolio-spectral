import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>Contact</h2>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <h3>Contact information</h3>
          <p>Best way to get in touch is using email address, if you have an elaborated question and want to reach me over phone or skype, please provide information first to work email address below.</p>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Information</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Work and contracts</td>
                <td><a href="mailto:ivanmxdev@gmail.com" target="_top">ivanmxdev@gmail.com</a></td>
              </tr>
                <tr>
                <td>Personal and general contact.</td>
                <td><a href="mailto:alcance.enlinea@gmail.com" target="_top">alcance.enlinea@gmail.com</a></td>
              </tr>
              <tr>
                <td>Direct questions only</td>
                <td>+526624469480</td>
              </tr>
              <tr>
                <td>Quick video calls.</td>
                <td><a href="skype:ivan.devsgo?chat" target="_top">ivan.devsgo</a></td>
              </tr>
              <tr>
                <td>Direct messages for simple questions.</td>
                <td><a href="https://t.me/ivanmdev" target="_blank" rel="noopener noreferrer">@ivanmdev</a></td>
              </tr>
            </tbody>
          </table>
          
          <h3>Join me on social media</h3>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Handle</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Linkedin</td>
                <td><a href="https://linkedin.com/in/ivanmtzaguero/" target="_blank" rel="noopener noreferrer">@ivanmtzaguero</a></td>
                <td>Professional network.</td>
              </tr>
              <tr>
                <td>Github</td>
                <td><a href="https://github.com/alcance" target="_blank" rel="noopener noreferrer">@alcance</a></td>
                <td>Personal code repositories.</td>
              </tr>
              <tr>
                <td>Twitter</td>
                <td><a href="https://twitter.com/ivanmdev" target="_blank" rel="noopener noreferrer">@ivanmdev</a></td>
                <td>Follow me on Twitter.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
