import React from 'react';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>About me</h2>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <h3>Lorem ipsum dolor</h3>
          <p>
            Morbi mattis mi consectetur tortor elementum, varius pellentesque
            velit convallis. Aenean tincidunt lectus auctor mauris maximus, ac
            scelerisque ipsum tempor. Duis vulputate ex et ex tincidunt, quis
            lacinia velit aliquet. Duis non efficitur nisi, id malesuada justo.
            Maecenas sagittis felis ac sagittis semper. Curabitur purus leo,
            tempus sed finibus eget, fringilla quis risus. Maecenas et lorem
            quis sem varius sagittis et a est. Maecenas iaculis iaculis sem.
            Donec vel dolor at arcu tincidunt bibendum. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Fusce ut aliquet justo.
            Donec id neque ipsum. Integer eget ultricies odio. Nam vel ex a orci
            fringilla tincidunt. Aliquam eleifend ligula non velit accumsan
            cursus. Etiam ut gravida sapien.
          </p>

        
          <hr />

          <h4>Feugiat aliquam</h4>
          <p>
            Nam sapien ante, varius in pulvinar vitae, rhoncus id massa. Donec
            varius ex in mauris ornare, eget euismod urna egestas. Etiam lacinia
            tempor ipsum, sodales porttitor justo. Aliquam dolor quam, semper in
            tortor eu, volutpat efficitur quam. Fusce nec fermentum nisl. Aenean
            erat diam, tempus aliquet erat.
          </p>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
