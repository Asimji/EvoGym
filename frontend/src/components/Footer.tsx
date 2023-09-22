import Logo from "../assests/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex justify-between">
        <div className="mt-16 basis-1/2 md:mt-0 text-left">
          <img alt="logo" src={Logo} />
          <p className="my-5">
          EvoGym is your ultimate fitness destination, merging innovation with motivation. Our cutting-edge facilities, diverse classes, and expert trainers propel your fitness journey. Join our thriving community for a transformative health experience. Unleash the potential of EvoGym today!
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        {/* <div className="mt-16 basis-1/4 md:mt-0 text-left">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">facebook</p>
          <p className="my-5">twitter</p>
        </div> */}
        <div className="mt-16 basis-1/4 md:mt-0 text-left">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Prayagraj, Uttar Pradesh</p>
          <p>(333) 425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;