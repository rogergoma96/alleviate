import { useRouter } from 'next/router';
import Dropdown from '../../Commons/Dropdown/Dropdown';
import SectionContainer from '../../Commons/SectionContainer/SectionContainer';

import styles from './Moving.module.scss';

const Moving = ({ isMobile }) => {
  const router = useRouter();

  return (
    <SectionContainer
      isMobile={isMobile}
      id="Moving"
      imgUrl={`/images/${
        isMobile ? 'img-mobile-05.jpg' : 'img-desktop-05.jpg'
      }`}
      imgDescription="Move-In & Move-Out Cleaning"
    >
      {!isMobile && (
        <h3 className="text-title-s">Move-In & Move-Out Cleaning</h3>
      )}
      <p className="text-body">
        Whenever a home sits unoccupied, it can accumulate cobwebs and dust. To
        prepare for your family’s arrival, we clean the entire house to make it
        your new home.
      </p>
      <p className={`text-body ${styles.description}`}>
        When passing off a place you called home to another family, welcome them
        to their new home with a refreshing environment. We will return your
        home to the way it was when you first moved in.
      </p>
      <Dropdown label="Kitchen">
        <p className="text-body">
          Clean the interior & exterior of all appliances & hood fan
        </p>
        <p className="text-body">Clean kitchen sink & faucet</p>
        <p className="text-body">Sweep & mop floor</p>
        <p className="text-body">Clean inside the microwave</p>
        <p className="text-body">Clean garbage disposal</p>
        <p className={`text-body ${styles.last}`}>Clean baseboards</p>
      </Dropdown>
      <Dropdown label="Bedroom">
        <p className="text-body">Dust ceiling fans & light fixtures</p>
        <p className="text-body">Remove cobwebs</p>
        <p className="text-body">
          Dust window sills, molding, blinds, & ledges
        </p>
        <p className="text-body">Sweep & mop/vacuum floor</p>
        <p className={`text-body ${styles.last}`}>Clean baseboards</p>
      </Dropdown>
      <Dropdown label="Living Room · Dining room · Entryway · Stairway · etc">
        <p className="text-body">
          Dust window sills, molding, blinds, & ledges
        </p>
        <p className="text-body">Remove cobwebs</p>
        <p className="text-body">Dust ceiling fans & light fixtures</p>
        <p className="text-body">Sweep & mop/vacuum floor/stairs</p>
        <p className={`text-body ${styles.last}`}>Clean baseboards</p>
      </Dropdown>
      <Dropdown label="Bathroom">
        <p className="text-body">Clean & disinfect toilets, tubs/showers</p>
        <p className="text-body">
          Clean bathroom counter, sink, faucet & fixtures
        </p>
        <p className="text-body">Dust light fixture</p>
        <p className="text-body">Sweep & mop floor</p>
        <p className={`text-body ${styles.last}`}>Hand wipe mirror</p>
      </Dropdown>
      <button
        type="button"
        className={`btn-primary ${styles.button}`}
        onClick={() => router.push('/#Booking')}
      >
        Book this service
      </button>
    </SectionContainer>
  );
};

export default Moving;
