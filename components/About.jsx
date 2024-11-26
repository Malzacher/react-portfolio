export default function About() {
  return (
    <>
      <div className="about-wrapper">
        <div id="about">
          <p className="small-heading">01. About Me</p>
          <p id="description">
            I’m a passionate web developer and SEO specialist with experience
            crafting diverse websites and applications. From Shopify and
            WordPress to custom React and PHP projects, I bring creativity and
            technical expertise to every project. I thrive on building
            user-friendly, optimised solutions that not only look great but also
            perform exceptionally in driving results.
          </p>

          <p className="small-heading">Technologies I use everyday:</p>

          <div className="tech">
            <div className="left-tech">
              <div>
                <i className="fa-solid fa-caret-right"></i> Javascript
              </div>
              <div>
                <i className="fa-solid fa-caret-right"></i> React &amp; Next
              </div>
              <div>
                <i className="fa-solid fa-caret-right"></i> Wordpress
              </div>
            </div>
            <div className="right-tech">
              <div>
                <i className="fa-solid fa-caret-right"></i> Shopify
              </div>
              <div>
                <i className="fa-solid fa-caret-right"></i> Woocommerce
              </div>
              <div>
                <i className="fa-solid fa-caret-right"></i> PHP
              </div>
            </div>
          </div>
        </div>

        <div id="overlay">
          <img id="photo" src="Nick.jpeg" alt="" />
        </div>
      </div>
    </>
  );
}
