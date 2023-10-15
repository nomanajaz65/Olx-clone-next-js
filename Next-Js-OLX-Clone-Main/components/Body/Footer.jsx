import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.mainDiv}>
        <div className={classes.listDivs} id={classes.div1}>
          <h6>POPULAR CATEGORIES</h6>
          <ul>
            <li>Cars</li>
            <li>Flats for rent</li>
            <li>Mobile Phones</li>
            <li>Jobs</li>
          </ul>
        </div>
        <div className={classes.listDivs} id={classes.div2}>
          <h6>TRENDING SEARCHES</h6>
          <ul>
            <li>Bikes</li>
            <li>Watches</li>
            <li>Books</li>
            <li>Dogs</li>
          </ul>
        </div>
        <div className={classes.listDivs} id={classes.div3}>
          <h6>ABOUT US</h6>
          <ul>
            <li>About EMPG</li>
            <li>OLX Blog</li>
            <li>Contact Us</li>
            <li>OLX for Business</li>
          </ul>
        </div>
        <div className={classes.listDivs} id={classes.div4}>
          <h6>OLX</h6>
          <ul>
            <li>Help</li>
            <li>Sitemap</li>
            <li>Terms of use</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className={classes.linksDiv}>
          <label>Follow us</label>
          <div className={classes.iconsDiv}>
            <a
              href="https://www.facebook.com/olxpakistan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={classes.linksImgs}
                src="https://www.olx.com.pk/assets/iconFacebook_noinline.773db88c5b9ee5aaab365e61cdb750da.svg"
              ></img>
            </a>
            <a
              href="https://twitter.com/OLX_Pakistan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={classes.linksImgs}
                src="https://www.olx.com.pk/assets/iconTwitter_noinline.6037fa7d9a7b9d6408fb1b3d70524b97.svg"
                alt="Twitter Logo"
              />
            </a>
            <a
              href="https://www.instagram.com/olx.pakistan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={classes.linksImgs}
                src="https://www.olx.com.pk/assets/iconInstagram_noinline.d7d5811ebc44e03a674c8d0b5ff3f232.svg"
                alt="Instagram Logo"
              />
            </a>
          </div>
          <div className={classes.appsDiv}>
            <a
              href="https://apps.apple.com/pk/app/olx-pakistan/id1551315538"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                id={classes.img1}
                className={classes.appLinksImg}
                src={"/images/AppStore.JPG"}
                alt="App Store"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.olx.pk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                id={classes.img2}
                className={classes.appLinksImg}
                src={"/images/PlayStore.JPG"}
                alt="Google Play"
              />
            </a>
            <a
              href="https://appgallery.huawei.com/#/app/C104375435"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                id={classes.img3}
                className={classes.appLinksImg}
                src={"/images/HuaweiStore.JPG"}
                alt="App Gallery"
              />
            </a>
          </div>
        </div>
      </div>
      <div className={classes.secDiv}>
        <label className={classes.label1}>Free Classifieds in Pakistan</label>
        <label className={classes.label2}>© 2006-2022 OLX</label>
      </div>
    </footer>
  );
}
