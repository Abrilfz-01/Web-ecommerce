import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Hero.css'


const Hero = () => {
    const heroData = [
      {
        id: 1,
        image: ('../../../public/img/productos/Img-1.png'),
        title1: 'Colección Exquisita',
        title2: 'FRAGANCIAS PREMIUM',
        description: 'Descubra una encantadora variedad de aromas que cautivan los sentidos y evocan emociones, seleccionados para aquellos que aprecian las cosas buenas de la vida.',
        brand:'Tuxedo #14',
      },
      {
        id: 2,
        image: ('../../../public/img/productos/Img-2.png'),
        title1: 'Colección Exquisita',
        title2: 'FRAGANCIAS PREMIUM',
        description: 'Descubra una encantadora variedad de aromas que cautivan los sentidos y evocan emociones, seleccionados para aquellos que aprecian las cosas buenas de la vida.',
        brand:'Yves S. #18',
      },
      {
        id: 3,
        image: ('../../../public/img/productos/Img-3.png'),
        title1: 'Colección Exquisita',
        title2: 'FRAGANCIAS PREMIUM',
        description: 'Descubra una encantadora variedad de aromas que cautivan los sentidos y evocan emociones, seleccionados para aquellos que aprecian las cosas buenas de la vida.',
        brand:'Reveur #8',
      },
    ];


  return (
    <section className='home' id='inicio'>
      <Carousel fade>
        {
          heroData.map(hero => (
              <Carousel.Item key={hero.id}>
                <img
                  className="d-block w-100"
                  src={hero.image}
                  alt={"Slide" + hero.id}
                />
                <Carousel.Caption>
                  <div className="col-md-4">
                    <div className="cont-1 carousel-caption d-none d-md-block">
                      <h2>{hero.title1}</h2>
                      <h1>{hero.title2}</h1>
                      <button className="discover">Descubrir</button>
                      <p>{hero.description}</p>
                    </div>
            
                    <div className="cont-2 carousel-caption d-flex">
                      <p>{hero.brand}</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-arrow-up-right-circle-fill" viewBox="0 0 16 16">
                        <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z"/>
                      </svg>
                    </div>

                    <div className="cont-3 carousel-caption">
                      <p className="p1">Más</p>
                      <h1>+40</h1>
                      <p>marcas</p>
                    </div>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            ))
        }
      </Carousel>
    </section>
    
  );
}

export default Hero;
