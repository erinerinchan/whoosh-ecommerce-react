import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'

const AboutPage = () => {
  return <main>
    <PageHero title="about" />
    <br />
    <br />
    <Wrapper className="section section-center">
      <h2>Our Story</h2>
    </Wrapper>
    <p className="section-par">One brand, many companies, and many, many people – that’s us in a nutshell. Spread all over the world, we have a passion for home furnishing and an inspiring shared vision: to create a better everyday life for the many people. This, together with our straightforward business idea, shared values, and a culture based on the spirit of togetherness, guides us in everything we do.</p>
    <div className="about-image" />
    <br />
    <br />
    <Wrapper className="section section-center">
      <h2>500 WHOOSH stores in 70 markets</h2>
    </Wrapper>
    <div className="about-map-image" />
    <br/>
    <p className="section-par">
      <tr>
        &bull;The first Whoosh store opened in 1958 in Oslo, Norway.
      </tr>
      <tr>
        &bull;The latest Whoosh store to open is Seoul, South Korea.
      </tr>
      <tr>
        &bull;The Netherlands has <b>the most</b> Whoosh stores in the world.
      </tr>
      <tr>
        &bull;<b>The biggest</b> Whoosh store is Kualar Lumpur, Malaysia.
      </tr>
    </p>
    <br />
  </main>
}

export default AboutPage

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
