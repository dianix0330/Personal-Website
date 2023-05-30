import proofPlatformLarge from 'assets/pimgs/ProofHub/board-view.webp';
import proofPlatformPlaceholder from 'assets/pimgs/ProofHub/board-view.webp';
import proofPlatform from 'assets/pimgs/ProofHub/board-view.webp';
import proofHubBackgroundLarge from 'assets/pimgs/ProofHub/proofhub-report.jpg';
import proofHubPlaceholder from 'assets/pimgs/ProofHub/proofhub-report.jpg';
import proofHubBackground from 'assets/pimgs/ProofHub/proofhub-report.jpg';
import sliceIrlPlaceholder from 'assets/pimgs/ProofHub/proofhub-result.png';
import sliceIrl from 'assets/pimgs/ProofHub/proofhub-result.png';
import proofSidebarAnnotationsLarge from 'assets/pimgs/ProofHub/gantt-chart.webp';
import proofSidebarAnnotationsPlaceholder from 'assets/pimgs/ProofHub/gantt-chart.webp';
import proofSidebarAnnotations from 'assets/pimgs/ProofHub/gantt-chart.webp';
import proofSidebarLayersLarge from 'assets/pimgs/ProofHub/calendar.webp';
import proofSidebarLayersPlaceholder from 'assets/pimgs/ProofHub/calendar.webp';
import proofSidebarLayers from 'assets/pimgs/ProofHub/calendar.webp';
import proofSlidesLarge from 'assets/pimgs/ProofHub/proofhub-development.png';
import proofSlidesPlaceholder from 'assets/pimgs/ProofHub/proofhub-development.png';
import proofSlides from 'assets/pimgs/ProofHub/proofhub-development.png';
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
import styles from './ProofHub.module.css';

const title = 'Project Management & Team Collaboration';
const description =
  'ProofHub is an easy-to-use project managment software with everything you need to manage teams, work, and projects from a central location.';
const roles = [
  'UX Design',
  'Maintain and deploy by using Storybook',
  'Frontend development',
];

export const ProofHub = () => {
  return (
    <Fragment>
      <Meta title={title} prefix="Projects" description={description} />
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={proofHubBackground}
          srcSet={`${proofHubBackground.src} 1280w, ${proofHubBackgroundLarge.src} 2560w`}
          placeholder={proofHubPlaceholder}
          opacity={0.8}
        />
        <ProjectHeader title={title} description={description} roles={roles} />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={[proofPlatform, proofPlatformLarge]}
              placeholder={proofPlatformPlaceholder}
              alt="Project management system"
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>The challenge</ProjectSectionHeading>
              <ProjectSectionText>
                The challenging part of building custom calendar component was to
                implement locking the race condition problems.
              </ProjectSectionText>
              <br />
              <ProjectSectionHeading>The solution</ProjectSectionHeading>
              <ProjectSectionText>
                To handle race conditions in a calendar component on the frontend side, I
                used single source of data, and WebSockets for real-time update that
                status. On the backend side, we locked the database using transactions and
                mutex lock for ensuring that only one operation is performed at a time.
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={[proofSidebarLayers, proofSidebarLayersLarge]}
                placeholder={proofSidebarLayersPlaceholder}
                alt="Calendar View"
                sizes={`(max-width: ${media.laptop}px) 300px, 400px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={[proofSidebarAnnotations, proofSidebarAnnotationsLarge]}
                placeholder={proofSidebarAnnotationsPlaceholder}
                alt="Grantt View"
                sizes={`(max-width: ${media.laptop}px) 300px, 400px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Development</ProjectSectionHeading>
              <ProjectSectionText>
                When developing the Hitask application, I used primarily React, JavaScript
                (TypeScript), Bootstrap, GraphQL, and Jest/React Testing Library for unit
                tests. I focused on both performance optimization of the app as well as
                troubleshooting any issues that arose. I also wrote stories for reusable
                UI components using Storybooks.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={[proofSlides, proofSlidesLarge]}
              placeholder={proofSlidesPlaceholder}
              alt="The new My Slides tab in slice, showing annotated and favorited slides."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>The results</ProjectSectionHeading>
              <ProjectSectionText>
                {`The development of the Hitask application was a success, as it is now
                well-used by over 500,000 users and businesses. It provides users with an
                easier way to manage their projects in one access point, and includes
                features like project management, document storage, shared calendar,
                sharing permissions, time tracking, etc. It has been well-received by the
                market and continues to be developed and updated.`}
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
