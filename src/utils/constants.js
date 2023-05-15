import Mission from '../assets/Mission.jpg'
import Vision from '../assets/Vision.jpg'
import History from '../assets/History.jpg'

export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    image: Vision,
    title: 'our vision',
    text: 'We believe we can make a big difference for people with big dreams and thin wallets, and we want to do it within the limits of our planet.'
  },
  {
    id: 2,
    image: Mission,
    title: 'work at whoosh',
    text: 'Would you like to join us in making life at home better for people all around the world? We have a wide range of opportunities across our entire value chain.'
  },
  {
    id: 3,
    image: History,
    title: 'for suppliers',
    text: 'Interested in becoming a Whoosh supplier? Already a Whoosh supplier? Here you’ll find everything you need to get in contact or stay in touch.'
  }
]

export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`
