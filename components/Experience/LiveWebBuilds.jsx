import Left from "../Sections/Left";
import Right from "../Sections/Right";

export default function LiveWebBuilds() {
  return (
    <div>
      <h2>02. Live Web Builds</h2>
      <Left title={"Holiday House Manager - Wordpress"} image={"/react-portfolio/HHM.png"} ghLink={"https://holidayhousemanager.com.au/"}> I developed and designed the "Holiday House Manager" website from scratch, managing its SEO and ongoing development. The site has grown from receiving zero clicks to over 300 per month. Technologies used include WordPress, JavaScript, and PHP. I oversee all aspects, ensuring continuous improvement and performance. </Left>
      <Right title={"Tucker Tub - WooCommerce & Next.js"} image={"/react-portfolio/Tucker-Tub.png"} ghLink={"https://www.tuckertub.com.au/shop/raw-food"}> I took over the SEO management of the "Tucker Tub" site and began handling its development tasks, including the integration of category pages. The site is built on a headless WooCommerce platform. Technologies used include JSX, Next.js, and WooCommerce. I actively manage both SEO and ongoing development to ensure optimal performance.</Right>
      <Left title={"Guardian Vaults - PHP & ACF"} image={"/react-portfolio/Guardian-Gold.png"} ghLink={"https://guardianvaults.com.au/"}>I manage the SEO and all web requests for the "Guardian Vaults" site, including a complete rebuild of the homepage (linked below). The site is built using PHP with ACF on WordPress, without a page builder. I handle ongoing SEO tasks and ensure the site’s development needs are met for optimal performance. </Left>
    </div>
  );
}
