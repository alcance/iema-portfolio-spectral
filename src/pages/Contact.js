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
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Work email</td>
                <td>ivanmxdev@gmail.com</td>
                <td>Work and contracts.</td>
              </tr>
              <tr>
                <td>Personal email</td>
                <td>alcance.enlinea@gmail.com</td>
                <td>Personal and general contact.</td>
              </tr>
              <tr>
                <td>Skype</td>
                <td>ivan.devsgo</td>
                <td>Quick video calls.</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>+526624469480</td>
                <td>Direct questions only.</td>
              </tr>
              <tr>
                <td>Twitter</td>
                <td>@ivanmdev</td>
                <td>Follow me on social media.</td>
              </tr>
            </tbody>
          </table>
          <hr/>
          <h3>Just type a message and relax</h3>
          <form method="post" action="#">
            <label>
              Name
              <input type="text" name="name" id="name" />
            </label>
            <label>
              Email
              <input type="email" name="email" id="email" />
            </label>
            <label>
              Message
              <textarea name="message" id="message" rows="5" />
            </label>
            <button type="submit">Send</button>
            <input type="reset" value="Clear" />
          </form>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
