import SectionContainer from "../SectionContainer/SectionContainer";

import styles from "./PostConstruction.module.scss";

const PostConstruction = () => (
  <SectionContainer
    id="PostConstruction"
    imgUrl="/images/img_02.jpg"
    imgDescription=""
  >
    <h2 className={`text-title-s ${styles.title}`}>
      Post Construction & Remodeling Cleaning
    </h2>
    <p className={`text-body ${styles.description}`}>
      When the construction of a house has finished and the dust has settled
      (literally) there is a lot of debris that must be cleaned to prepare the
      home for showings and it’s owner. We clean from the ceiling to the floor
      and everything in between.
    </p>
    <p className="text-body">Remove any post construction trash.</p>
    <p className="text-body">Clean dirt off of walls and baseboards.</p>
    <p className="text-body">Clean and polish hard floors.</p>
    <p className="text-body">Clean the exterior of all appliances.</p>
    <p className="text-body">Clean carpet to remove dust.</p>
    <p className="text-body">Clean mirrors and indoor windows.</p>
    <p className="text-body">Clean cabinets, drawers, and closets</p>
    <button className={`btn-primary ${styles.button}`}>
      Book this service
    </button>
  </SectionContainer>
);

export default PostConstruction;
