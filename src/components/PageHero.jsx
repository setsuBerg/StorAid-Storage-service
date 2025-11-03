import './page-hero.css'

const PageHero = ({ title }) => {


  return (
    <section className='page-texts'>
        <div className='page-hero'>
            <h1 className='page-title font-bold'>{title}</h1>
            <h5 className='page-hero-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec<span className='block'> ullamcorper mattis, pulvinar dapibus leo.</span></h5>
        </div>
    </section>
  )
}

export default PageHero