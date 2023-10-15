import classes from "./LoginDropdown.module.css";

export default function LoginDropdown(props) {
  return (
    <div style={props.style}>
      <div className={classes.div1}>
        <img
          className={classes.icon}
          alt="icon"
          src="https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png"
        ></img>
        <h3>Hello,</h3>
        <h1>Abuzar</h1>
        <h6>View and edit your profile</h6>
      </div>
      <div className={classes.div2}>
        <div>
          <img
            alt="My Ads"
            src="https://www.olx.com.pk/assets/iconMyAds_noinline.81f6b0cc8a3d16d363fb142e1489d035.svg"
          />
          <span>My ads</span>
        </div>
        <div>
          <img
            alt="My Ads"
            src="https://www.olx.com.pk/assets/iconBusinessPackages_noinline.64a7db94ef2eb1776d43916ce82b1a40.svg"
          />
          <span>Buy business packages</span>
        </div>
        <div>
          <img
            alt="My Ads"
            src="https://www.olx.com.pk/assets/iconBoughtPackages_noinline.b29b2b61c39def95f4bf58ac5b6dbb59.svg"
          />
          <span>Bought Packages & Billing</span>
        </div>
      </div>
      <div className={classes.div3}>
        <div>
          <img
            alt="My Ads"
            src="	https://www.olx.com.pk/assets/iconHelp_noinline.f07d255148323e318808a50c52097d0c.svg"
          />
          <span>Help</span>
        </div>
        <div>
          <img
            alt="My Ads"
            src="https://www.olx.com.pk/assets/iconFilters_noinline.0aa1e7bd623dcbcc065196fa3ccba789.svg"
          />
          <span>Settings</span>
        </div>
        <div
          className={classes.logoutDiv}
          onClick={() => {
            props.setIsLoggedin(false);
            props.setInfoClicked(false);
          }}
        >
          <img
            alt="My Ads"
            src="https://www.olx.com.pk/assets/iconLogout_noinline.9da9ed94dfe84e900cc1ae3198b0375b.svg"
          />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
}
