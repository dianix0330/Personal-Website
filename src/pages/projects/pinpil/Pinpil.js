import sliceAnnotationLarge from 'assets/slice-annotation-large.png';
import sliceAnnotationPlaceholder from 'assets/slice-annotation-placeholder.png';
import sliceAnnotation from 'assets/slice-annotation.png';
import pinpilAppLarge from 'assets/pimgs/Pinpil/Search.gif';
import pinpilAppPlaceholder from 'assets/pimgs/Pinpil/Search.gif';
import pinpilApp from 'assets/pimgs/Pinpil/Search.gif';
import pinpilChallengeLarge from 'assets/pimgs/Pinpil/9.png';
import pinpilChallengePlaceholder from 'assets/pimgs/Pinpil/9.png';
import pinpilChallenge from 'assets/pimgs/Pinpil/9.png';
import pinpilBackgroundLarge from 'assets/pimgs/Pinpil/pinpil-background-large.jpg';
import pinpilBackgroundPlaceholder from 'assets/slice-background-placeholder.jpg';
import pinpilBackground from 'assets/pimgs/Pinpil/pinpil-background.gif';
import sliceIrlPlaceholder from 'assets/pimgs/Pinpil/Pinpil-large.png';
import sliceIrl from 'assets/pimgs/Pinpil/Pinpil-large.png';
import sliceSidebarAnnotationsLarge from 'assets/pimgs/Pinpil/pinpil-sidebar-annotation.png';
import sliceSidebarAnnotationsPlaceholder from 'assets/pimgs/Pinpil/pinpil-sidebar-annotation.png';
import sliceSidebarAnnotations from 'assets/pimgs/Pinpil/pinpil-sidebar-annotation.png';
import sliceSidebarLayersLarge from 'assets/pimgs/Pinpil/pinpil-sidebar.jpg';
import sliceSidebarLayersPlaceholder from 'assets/pimgs/Pinpil/pinpil-sidebar.jpg';
import sliceSidebarLayers from 'assets/pimgs/Pinpil/pinpil-sidebar.jpg';
import sliceSlidesLarge from 'assets/pimgs/Pinpil/pinpil-challenge.png';
import sliceSlidesPlaceholder from 'assets/pimgs/Pinpil/pinpil-challenge.png';
import sliceSlides from 'assets/pimgs/Pinpil/pinpil-challenge.png';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';
import { media } from 'utils/style';
import styles from './Pinpil.module.css';

const title = 'Quick Drug & Pharmacy search';
const description =
  'This application allows users to search for the drugs they need and get information about the availability, prices, and reviews of the different pharmacies in their city.';
const roles = [
  'User Research',
  'UX Design',
  'Frontend development',
  'Mobile responsive',
  'Design GraphQL API',
  'Backend API',
];

export const Pinpil = () => {
  return (
    <Fragment>
      <Meta title={title} prefix="Projects" description={description} />
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={pinpilBackground}
          srcSet={`${pinpilBackground.src} 1280w, ${pinpilBackgroundLarge.src} 2560w`}
          placeholder={pinpilBackgroundPlaceholder}
          opacity={0.8}
        />
        <ProjectHeader title={title} description={description} roles={roles} />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={[pinpilApp, pinpilAppLarge]}
              placeholder={pinpilAppPlaceholder}
              alt="The Slice web application showing a selected user annotation."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>FE challenge</ProjectSectionHeading>
              <ProjectSectionText>
                Our task was to create a mobile app designed to help people easily search
                for medications, pharamcies, and current specail offers. The top priorty
                was to provide an intuitive, user-friendly expereince where anyone could
                find the information they were looking for quickly and efficiently.
              </ProjectSectionText>
              <br />
              <ProjectSectionHeading>The solution</ProjectSectionHeading>
              <ProjectSectionText>
                We analyzed all the possible needs and use cases of our intended audience
                to learn what features we needed to include.
                <br />
                We determined that the app should provide users with the ability to:
                <br />
                <ul dir="ltr">
                  <li role="presentation" style={{ listStyleType: 'none' }}>
                    - Search for medications at the lowest price{' '}
                  </li>
                  <li role="presentation" style={{ listStyleType: 'none' }}>
                    - Find the most conveniently located pharmacies
                  </li>
                  <li role="presentation" style={{ listStyleType: 'none' }}>
                    - Locate 24-hour pharmacies Contact a pharmacy directly from the app
                  </li>
                </ul>
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={[sliceSidebarLayers, sliceSidebarLayersLarge]}
                placeholder={sliceSidebarLayersPlaceholder}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={[sliceSidebarAnnotations, sliceSidebarAnnotationsLarge]}
                placeholder={sliceSidebarAnnotationsPlaceholder}
                alt="Multiple user annotations on a shared layer."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>BE Challenge</ProjectSectionHeading>
              <ProjectSectionText>
                The main challenge in the development of Pinpil that combines different
                offline businesses, is that everyone has their own software and database
                update rules, formats and names. However, our client had already developed
                a service that aggregates data from different pharmacies. The service
                collects drug information in different formats, from emails to PDF files,
                then deposits all of the information into a primary database. So we faced
                the challenge of gathering and normalizing all this pharmacy and drug
                data. Our servers also had to constantly update the normalized data as new
                information was received from the aggregate server.
              </ProjectSectionText>
              <ProjectSectionHeading>The Solution</ProjectSectionHeading>
              <ProjectSectionText>
                To address the challenge of normalizing the data from different
                pharmacies, we created a pipeline that used machine learning algorithms to
                recognize and classify all the different formats of data. We also created
                an automated process to consolidate and transfer the necessary data from
                the primary database to the Pinpil database. Additionally, we developed an
                architecture that dynamically updated the database when new information
                came in. Finally, we implemented protocols that tracked all updates and
                their source. This enabled us to track any versions that might have been
                out of sync, and to revert back to the correct version if needed.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={[pinpilChallenge, pinpilChallengeLarge]}
              placeholder={pinpilChallengePlaceholder}
              alt="Pinpil Application Challenge"
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Development</ProjectSectionHeading>
              <ProjectSectionText>
                Our team used React Native and Redux to develop the app, then we optimized
                the build for iOS and Android from one code base. Also used Axios for API
                requests, and Stripe for payment solutions. LEveraged Firebase for push
                notifications and Amazon Web Services for hosting and data storage.
                Implement infinite scroll with React, you can use the
                react-infinite-scroller library.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={[sliceSlides, sliceSlidesLarge]}
              placeholder={sliceSlidesPlaceholder}
              alt="The new My Slides tab in slice, showing annotated and favorited slides."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>The results</ProjectSectionHeading>
              <ProjectSectionText>
                {`In the end, we satisfied the client's goal to create an intuitive,
                user-friendly pharmacy app for iOS and Android platforms. The simple,
                sleek design allows users to easily search for medications, find the
                lowest prices and applicable discounts, and locate and contact nearby
                pharmacies. Pinpil is consistently updated to provide users with the most
                current drug and pharmacy data available, making the app a reliable tool
                that users can trust to provide accurate information.`}
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              src={sliceIrl}
              placeholder={sliceIrlPlaceholder}
              alt="Pinpil App Result"
            />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
