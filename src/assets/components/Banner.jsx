//     "https://c2.staticflickr.com/6/5290/5263932151_787198a683_b.jpg",
//     "https://2.bp.blogspot.com/-AAFfc_5rQmU/UIYVg8POVtI/AAAAAAAAKNo/jqILTZqWFQM/s1600/publicidad+zapatillas+.jpg",
//     "https://www.intelipost.com.br/wp-content/uploads/2020/09/post_thumbnail-6d6ddb1609bacd8c594433ee535b3dcd.jpeg",
import Carousel from 'react-bootstrap/Carousel';
import "../css/banner.css";
function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="">
      <Carousel.Item>
        <img
          className="img "
          src="https://emprendeconhuevos.com/wp-content/uploads/2020/11/Tienda-de-ropa.jpg"
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img"
          src="https://i.ytimg.com/vi/Y15RT4Sy4y4/maxresdefault.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5 className='text-dark'>Second slide label</h5>
          <p className='text-dark'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img "
          src="https://www.intelipost.com.br/wp-content/uploads/2020/09/post_thumbnail-6d6ddb1609bacd8c594433ee535b3dcd.jpeg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5 >Third slide label</h5>
          <p >
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;