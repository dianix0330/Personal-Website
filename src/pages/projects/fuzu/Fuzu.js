import fuzuPlatformLarge from 'assets/pimgs/fuzu/fuzu-homepage.jpg';
import fuzuPlatformPlaceholder from 'assets/pimgs/fuzu/fuzu-homepage.jpg';
import fuzuPlatform from 'assets/pimgs/fuzu/fuzu-homepage.jpg';
import pinpilBackgroundLarge from 'assets/pimgs/Fuzu/fuzu-background.jpg';
import pinpilBackgroundPlaceholder from 'assets/pimgs/Fuzu/fuzu-background.jpg';
import pinpilBackground from 'assets/pimgs/Fuzu/fuzu-background.jpg';
import fuzuIrlPlaceholder from 'assets/pimgs/Fuzu/fuzu-result.jpg';
import fuzuIrl from 'assets/pimgs/Fuzu/fuzu-result.jpg';
import sliceSidebarAnnotationsLarge from 'assets/pimgs/Fuzu/fuzu-sidebar-annotation.jpg';
import sliceSidebarAnnotationsPlaceholder from 'assets/pimgs/Fuzu/fuzu-sidebar-annotation.jpg';
import sliceSidebarAnnotations from 'assets/pimgs/Fuzu/fuzu-sidebar-annotation.jpg';
import sliceSidebarLayersLarge from 'assets/pimgs/Fuzu/fuzu-sidebar.jpg';
import sliceSidebarLayersPlaceholder from 'assets/pimgs/Fuzu/fuzu-sidebar.jpg';
import sliceSidebarLayers from 'assets/pimgs/Fuzu/fuzu-sidebar.jpg';
import sliceSlidesLarge from 'assets/pimgs/Fuzu/fuzu-development.jpg';
import sliceSlidesPlaceholder from 'assets/pimgs/Fuzu/fuzu-development.jpg';
import sliceSlides from 'assets/pimgs/Fuzu/fuzu-development.jpg';
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
import styles from './Fuzu.module.css';

const title = 'Job search platform for hiring';
const description =
  'The website uses machine learning to take into account the former user’s activity and offer relevant vacancies or candidates. It also serves as a learning platform, enabling users to enhance their soft and hard skills.';
const roles = [
  'UX Design',
  'Frontend development',
  'Refactor code',
  'Software architecture',
  'Optimize SEO',
];

export const Fuzu = () => {
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
              srcSet={[fuzuPlatform, fuzuPlatformLarge]}
              placeholder={fuzuPlatformPlaceholder}
              alt="The Slice web application showing a selected user annotation."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>The challenge</ProjectSectionHeading>
              <ProjectSectionText>
                {`
                  The platform's legacy code didn't meet the current requirements for loading speed, maintainability, and marketability.
                `}
              </ProjectSectionText>
              <br />
              <ProjectSectionHeading>The solution</ProjectSectionHeading>
              <ProjectSectionText>
                <ul dir="ltr">
                  <li role="presentation" style={{ listStyleType: 'none' }}>
                    {`- We used ElasticSearch technology to return search results
                    immediately.`}
                  </li>
                  <li role="presentation" style={{ listStyleType: 'none' }}>
                    {`- The platform also uses machine learning to evaluate candidate's
                    skills and experience.`}
                  </li>
                  <li role="presentation" style={{ listStyleType: 'none' }}>
                    {`- We implement server side rendering by using NextJS to increase the
                    website's load speed and optimized the pages. It's avearge loading
                    speed is currently less than 2 seconds.`}
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
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Development</ProjectSectionHeading>
              <ProjectSectionText>
                {`When we started building Fuzu from scratch, React was our very obious
                choice. React is pretty good at creating Single Page Applications, but
                Google crawlers find it difficult to index and fully process the JS of our
                app. This will start affecting our SEO, you know for the job platform like
                Fuzu, the user's content is Hero.`}
                <br />
                {`We have also implemented virtual scrolling and image optimization to improve loading speeds.`}
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
                The client received a full-featured platform in under 1 year, fulfilling
                their commitments before the investors. Now they have over 50K active
                users per month. The legacy code has been turned into a stable system that
                requires no special technical knowledge to maintain. Also, the website is
                now fast-loading and scalable due to optimization.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              src={fuzuIrl}
              placeholder={fuzuIrlPlaceholder}
              alt="Pinpil App Result"
            />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
