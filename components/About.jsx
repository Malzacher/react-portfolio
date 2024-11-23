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
              <i className="fa-solid fa-caret-right"></i> Javascript
              <i className="fa-solid fa-caret-right"></i> React & Next
              <i className="fa-solid fa-caret-right"></i> Wordpress
            </div>
            <div className="right-tech">
              <i className="fa-solid fa-caret-right"></i> Shopify
              <i className="fa-solid fa-caret-right"></i> Woocommerce
              <i className="fa-solid fa-caret-right"></i> PHP
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
