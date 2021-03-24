import Dropdown from "../DropDown/DropDown";
import SectionContainer from "../SectionContainer/SectionContainer";

import styles from "./AirBnb.module.scss";

const AirBnb = () => (
  <SectionContainer imgUrl="/images/img_04.jpg" imgDescription="">
    <h2 className="text-title-s">AirBnB Turnover</h2>
    <p className="text-body">
      Whenever people go on vacation, the kickstart to their experience is the
      arrival to their AirBnB. An AirBnB is more than just a temporary
      residence, it is a home to the occupant.
    </p>
    <p className={`text-body ${styles.description}`}>
      We heighten this experience by providing clients with organized utensils,
      plentiful toiletries, and a spotless home every time.
    </p>
    <Dropdown label="Kitchen">
      <p className="text-body">
        Clean the stove, fridge, toaster, kettle, and all other small and large
        appliances.
      </p>
      <p className="text-body">Sweep and mop floors</p>
      <p className="text-body">Faucet & sink</p>
      <p className="text-body">Wash dishes</p>
      <p className="text-body">Take out the trash</p>
      <p className="text-body">Clean all counters and tables</p>
      <p className="text-body">
        Reorganize pots, pans, eating utensils, and all other objects.
      </p>
      <p className={`text-body ${styles.last}`}>
        Replenish paper towels, soap, kitchen cloth, etc
      </p>
    </Dropdown>
    <Dropdown label="Bedroom">
      <p className="text-body">Change linens & make the beds</p>
      <p className="text-body">Sweep & mop/vacuum floor</p>
      <p className="text-body">Dust light fixtures & fans</p>
      <p className="text-body">Clean blinds</p>
      <p className="text-body">Clean under beds</p>
      <p className="text-body">Clean counter tops</p>
      <p className={`text-body ${styles.last}`}>Take out the trash</p>
    </Dropdown>
    <Dropdown label="Living Room · Dining room · Entryway · Stairway · etc">
      <p className="text-body">Sweep & mop/vacuum floor</p>
      <p className="text-body">Dust light fixtures and fans</p>
      <p className="text-body">Clean shelves, countertops, and baseboards </p>
      <p className="text-body">Clean sofa</p>
      <p className={`text-body ${styles.last}`}>
        Reorganized and dust electronics & novelties
      </p>
    </Dropdown>
    <Dropdown label="Bathroom">
      <p className="text-body">Clean counter & shelves</p>
      <p className="text-body">Wash basin</p>
      <p className="text-body">Hand wipe mirror</p>
      <p className="text-body">Clear Drains</p>
      <p className="text-body">Clean toilet, bathtub/shower, & faucet</p>
      <p className="text-body">Sweep/Mop floor</p>
      <p className="text-body">Take out the trash</p>
      <p className={`text-body ${styles.last}`}>
        Replenish towels, soap, & other toiletries
      </p>
    </Dropdown>
    <button className={`btn-primary ${styles.button}`}>
      Book this service
    </button>
  </SectionContainer>
);

export default AirBnb;
