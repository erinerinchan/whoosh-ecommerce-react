import React from 'react'
import styled from 'styled-components'
import { services } from '../utils/constants'
const WorkWithUs = () => {
  return (
    <Wrapper>
      <div className='section-center'>
        <article className='header'>
          <h3>Work with us</h3>
        </article>
        <div className='services-center'>
          {services.map((service) => {
            const { id, image, title, text } = service
            return (
              <article className='service' key={id} >
                <img src={image} alt="cards" />
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  h4 {
    color: #FEFEFE;
  }
  padding: 5rem 0;

  background: #A4A4EC;

  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  .service {
    background: #5A4AE3;
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--radius);
    height: 530px;
    width: 360px;
    p {
      color: #FEFEFE;
    }
  }
  img {
    height: 250px;
    width: 300px;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    color: var(--clr-primary-1);
    border-radius: var(--radius);
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`
export default WorkWithUs
