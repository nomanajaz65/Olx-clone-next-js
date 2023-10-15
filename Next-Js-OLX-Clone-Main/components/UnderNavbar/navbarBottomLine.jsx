import classes from "./navbarBottomLine.module.css";

export default function NavbarBottomLine() {
  return (
    <>
      <div className={classes.dropdown}>
        <button className={classes.dropbtn}>
          All Categories
          <i className={classes.arrowDown}></i>
        </button>
        <div className={classes.dropdown_content}>
          <div className={classes.row}>
            <div className={classes.column}>
              <h3>Mobiles</h3>
              <a href="#">Tablets</a>
              <a href="#">Accessories</a>
              <a href="#">Mobile Phones</a>
              <a href="#">Cameras & Accessories</a>
              <a href="#">Games & Entertainment</a>
              <a href="#">Clerical & Administration</a>
              <a href="#">Other Home Appliances</a>
              <a href="#">Sales</a>
              <a href="#">IT & Networking</a>
              <a href="#">Hotels & Tourism</a>
            </div>
            <div className={classes.column}>
              <h3>Electronics & Home Appliances</h3>
              <a href="#">Computers & Accessories</a>
              <a href="#">TV - Video - Audio</a>
              <a href="#">Generators, UPS & Power Solutions</a>
              <a href="#">Kitchen Appliances</a>
              <a href="#">AC & Coolers</a>
              <a href="#">Fridge & Freezers</a>
              <a href="#">Washing Machines & Dryers</a>
              <a href="#">Manufacturing</a>
            </div>
            <div className={classes.column}>
              <h3>Jobs</h3>
              <a href="#">Online</a>
              <a href="#">Marketing</a>
              <a href="#">Advertising & PR</a>
              <a href="#">Education</a>
              <a href="#">Customer Services</a>
              <a href="#">Human Resources</a>
              <a href="#">Accounting & Finance</a>
              <a href="#">Medical</a>
              <a href="#">Domestic Staff</a>
              <a href="#">Part-Time</a>
            </div>
            <div className={classes.column}>
              <h3>Fashion & Beauty</h3>
              <a href="#">Accessories</a>
              <a href="#">Cothes</a>
              <a href="#">Footwear</a>
              <a href="#">Jewelery</a>
              <a href="#">Makeup</a>
              <a href="#">Skincare</a>
              <a href="#">Watches</a>
              <a href="#">Wedding</a>
              <a href="#">Couture</a>
              <a href="#">Other Fashion</a>
            </div>
            <div className={classes.column}>
              <h3>Vehicles</h3>
              <a href="#">Cars</a>
              <a href="#">Cars on Installments</a>
              <a href="#">Cars Accessories</a>
              <a href="#">Spare Parts</a>
              <a href="#">Buses, Vans & Trucks</a>
              <a href="#">Rickshaw & Chingchi</a>
              <a href="#">Other Vehicles</a>
              <a href="#">Boats</a>
              <a href="#">Tractors and Trailers</a>
            </div>
            <div className={classes.column}>
              <h3>Animals</h3>
              <a href="#">Fish & Aquariums</a>
              <a href="#">Hens & Aseel</a>
              <a href="#">Dogs</a>
              <a href="#">Cats</a>
              <a href="#">Livestock</a>
            </div>
            <div className={classes.column}>
              <h3>Kids</h3>
              <a href="#">Kids Furniture</a>
              <a href="#">Toys</a>
              <a href="#">Prams & Walkers</a>
              <a href="#">Kids Bikes</a>
              <a href="#">Kids Accessories</a>
              <a href="#">Swings & Slides</a>
              <a href="#">Land & Plots</a>
              <a href="#">Baby Clothes</a>
              <a href="#">Baby Care</a>
            </div>
            <div className={classes.column}>
              <h3>Bikes</h3>
              <a href="#">Motor Cycles</a>
              <a href="#">Spare Parts</a>
              <a href="#">Bicycles</a>
              <a href="#">ATV & Quads</a>
              <a href="#">Scooters</a>
            </div>
          </div>
        </div>
      </div>
      <label className={classes.label} id={classes.label1}>
        Mobile Phones
      </label>
      <label className={classes.label} id={classes.label2}>
        Cars
      </label>
      <label className={classes.label} id={classes.label3}>
        Motorcycles
      </label>
      <label className={classes.label} id={classes.label4}>
        Houses
      </label>
      <label className={classes.label} id={classes.label5}>
        TV-Video-Audio
      </label>
      <label className={classes.label} id={classes.label6}>
        Tablets
      </label>
      <label className={classes.label} id={classes.label7}>
        Lands and Plots
      </label>
    </>
  );
}
