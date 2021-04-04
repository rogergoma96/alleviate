import { useRouter } from "next/router";
import Dropdown from "../../Commons/Dropdown/Dropdown";
import SectionContainer from "../../Commons/SectionContainer/SectionContainer";

import styles from "./HomeAndApartmentDesktop.module.scss";

const HomeAndApartmentDesktop = () => {
  const router = useRouter();

  return (
    <SectionContainer
      id="HomeAndApartment"
      imgUrl="/images/img-desktop-03.jpg"
      imgDescription=""
    >
      <h2 className={`text-title-l ${styles.title}`}>Services</h2>
      <h3 className={`text-title-s ${styles.section}`}>
        Home & Apartment Cleaning
      </h3>
      <p className={`text-body ${styles.description}`}>
        This service offers regular house upkeep cleaning (one-time, weekly,
        biweekly, monthly) and deep cleaning which cleans the floor, ceiling,
        and everything in between.
      </p>
      <Dropdown label="UPKEEP CLEANING CHECKLIST">
        <p className={`text-action ${styles.subtitle}`}>Kitchen</p>
        <p className="text-body">Clean kitchen sink & faucet</p>
        <p className="text-body">
          Clean exterior of oven, fridge, & dishwasher.
        </p>
        <p className="text-body">Clean stovetop</p>
        <p className="text-body">Sweep & mop floor</p>
        <p className="text-body">Organize miscellaneous objects</p>
        <p className="text-body">Clean inside the microwave</p>
        <p className="text-body">Change trash bag</p>
        <p className={`text-action ${styles.subtitle}`}>Bedroom</p>
        <p className="text-body">Organize miscellaneous objects</p>
        <p className="text-body">Dust/wipe countertops & headboards</p>
        <p className="text-body">Dust ceiling fans & light fixtures </p>
        <p className="text-body">Remove cobwebs</p>
        <p className="text-body">Fix bed/change linens if left out</p>
        <p className="text-body">Sweep & mop/vacuum floor</p>
        <p className="text-body">
          Dust window sills, molding, blinds, & ledges
        </p>
        <p className="text-body">Dust pictures & novelties</p>
        <p className={`text-action ${styles.subtitle}`}>
          Living Room · Dining room · Entryway · Stairway · etc
        </p>
        <p className="text-body">Dust ceiling fans & light fixtures </p>
        <p className="text-body">Remove cobwebs</p>
        <p className="text-body">Organize miscellaneous objects</p>
        <p className="text-body">
          Dust window sills, molding, blinds, & ledges
        </p>
        <p className="text-body">Dust pictures & novelties</p>
        <p className="text-body">Dust/wipe furniture</p>
        <p className="text-body">Vacuum/sweep & mop floors/stair</p>
        <p className={`text-action ${styles.subtitle}`}>Bathrooms</p>
        <p className="text-body">Clean & disinfect toilets, tubs/showers</p>
        <p className="text-body">
          Clean bathroom counter, sink, faucet & fixtures
        </p>
        <p className="text-body">Organize miscellaneous objects</p>
        <p className="text-body">Dust light fixture</p>
        <p className="text-body">Sweep & mop floor</p>
        <p className={`text-body ${styles.last}`}>Hand wipe mirror</p>
      </Dropdown>
      <Dropdown label="DEEP CLEANING CHECKLIST">
        <p className={`text-action ${styles.subtitle}`}>Kitchen</p>
        <p className="text-body">
          Clean inside & outside oven, fridge, microwave, & dishwasher.
        </p>
        <p className="text-body">Clean stovetop & hood fan</p>
        <p className="text-body">Clean kitchen sink & faucet</p>
        <p className="text-body">Sweep & mop floor</p>
        <p className="text-body">Wash dishes</p>
        <p className="text-body">Clean garbage disposal</p>
        <p className="text-body">Wipe down cabinets</p>
        <p className="text-body">Organize miscellaneous objects</p>
        <p className="text-body">Clean baseboards & crown molding</p>
        <p className="text-body">
          Clean & sanitize trash can & change trash bag
        </p>

        <p className={`text-action ${styles.subtitle}`}>Bedroom</p>
        <p className="text-body">Organize miscellaneous objects</p>
        <p className="text-body">Clean countertops & headboards</p>
        <p className="text-body">Dust ceiling fans & light fixtures</p>
        <p className="text-body">Remove cobwebs</p>
        <p className="text-body">Flip mattress</p>
        <p className="text-body">Fix bed/change linens if left out</p>
        <p className="text-body">
          Dust window sills, molding, blinds, & ledges
        </p>
        <p className="text-body">Clean baseboards & crown molding</p>
        <p className="text-body">Dust pictures & novelties</p>

        <p className={`text-action ${styles.subtitle}`}>
          Living Room · Dining room · Entryway · Stairway · etc
        </p>
        <p className="text-body">Clean rug/welcome matt</p>
        <p className="text-body">Dust ceiling fans & light fixtures</p>
        <p className="text-body">Remove cobwebs</p>
        <p className="text-body">Organize miscellaneous objects</p>
        <p className="text-body">
          Dust window sills, molding, blinds, & ledges
        </p>
        <p className="text-body">Clean baseboards & crown molding</p>
        <p className="text-body">Dust pictures & novelties</p>
        <p className="text-body">
          Dust/wipe furniture and clean in couch crevices
        </p>
        <p className="text-body">Sweep & mop/vacuum floors & stairs</p>

        <p className={`text-action ${styles.subtitle}`}>Bathroom</p>
        <p className="text-body">Clean & disinfect toilets, tubs/showers</p>
        <p className="text-body">
          Clean bathroom counter, sink, faucet & fixtures
        </p>
        <p className="text-body">Organize miscellaneous objects</p>
        <p className="text-body">Dust light fixture</p>
        <p className="text-body">Sweep & mop floor</p>
        <p className={`text-body ${styles.last}`}>Hand wipe mirror</p>
      </Dropdown>
      <button
        className={`btn-primary ${styles.button}`}
        onClick={() => router.push("/#Booking")}
      >
        Book this service
      </button>
    </SectionContainer>
  );
};

export default HomeAndApartmentDesktop;
