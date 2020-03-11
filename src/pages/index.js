import React from 'react'
import ReactPlayer from 'react-player'
import Layout from '../components/Layout'
import AstronautImage from '../components/AstronautImage'
import SEO from '../components/SEO'
import StyledBackgroundSection from '../components/BackgroundSection'
import {
  StyledContentWrapperLeft,
  StyledImageWrapper,
  StyledLink,
  StyledWrapper,
} from '../components/SharedStyledComponents'


export const video = {
  zoom: '1',
  url:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  playing: true,
  loop: true,
  controls: false,
  muted: true,
  volume: 0,
  light: false,
}

const IndexPage = () => (
  <Layout>
    <StyledBackgroundSection>
      <StyledWrapper>
        <StyledContentWrapperLeft>
          <div>
            <SEO
              title="gatsby-background-image/src test"
              keywords={[`gatsby`, `application`, `react`]}
            />
            <h1>Hi people</h1>
            <p>
              Welcome to the <code>gatsby-background-image/src</code> test site.
            </p>
            <p>
              As the left background, you see an image rendered by{' '}
              <code>gatsby-background-image/src</code>
            </p>
            <p>
              To the right, the same image rendered by <code>gatsby-image</code>
            </p>
            <ReactPlayer {...video} />
            <StyledImageWrapper>
              <AstronautImage />
            </StyledImageWrapper>
            Go to <StyledLink to="/image-stack/">image stack</StyledLink> to
            see an example of
            <strong> multiple stacked background images</strong>.<br/>
            Go to <StyledLink to="/art-direction/">art direction</StyledLink> to
            see an example of
            <strong> art-directed background images</strong>.
          </div>
        </StyledContentWrapperLeft>
      </StyledWrapper>
    </StyledBackgroundSection>
  </Layout>
)

export default IndexPage
