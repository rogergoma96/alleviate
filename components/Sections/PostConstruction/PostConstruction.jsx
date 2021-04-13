import { useRouter } from 'next/router';
import SectionContainer from '../../Commons/SectionContainer/SectionContainer';

import styles from './PostConstruction.module.scss';

const PostConstruction = ({ isMobile }) => {
  const router = useRouter();

  return (
    <SectionContainer
      isMobile={isMobile}
      id="PostConstruction"
      imgUrl={`/images/${
        isMobile ? 'img-mobile-03.jpg' : 'img-desktop-02.jpg'
      }`}
      imgDescription="Post Construction & Remodeling Cleaning"
    >
      {!isMobile && (
        <h2 className={`text-title-s ${styles.title}`}>
          Post Construction & Remodeling Cleaning
        </h2>
      )}
      <p className={`text-body ${styles.description}`}>
        When the construction of a house has finished & the dust has settled
        (literally) there is a lot of debris that must be cleaned to prepare the
        home for showings & it’s owner. We clean from the ceiling to the floor &
        everything in between.
      </p>
      <p className="text-body">Remove any post construction trash.</p>
      <p className="text-body">Clean dirt off of walls and baseboards.</p>
      <p className="text-body">Clean and polish hard floors.</p>
      <p className="text-body">Clean the exterior of all appliances.</p>
      <p className="text-body">Clean carpet to remove dust.</p>
      <p className="text-body">Clean mirrors and indoor windows.</p>
      <p className="text-body">Clean cabinets, drawers, and closets</p>
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

export default PostConstruction;
