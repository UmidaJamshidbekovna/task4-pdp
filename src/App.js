
import logo from './logo.svg';
import cardPic from './cardpic.jpg'
import './App.css';

function App() {
  return (
    <div>
     <header>
        <div className="container d-flex justify-content-between py-4">
            <div className="header-title">
                <a href="#" className='fs-4'>Start Bootstrap</a>
            </div>
            <div className="header-nav d-flex">
              <div className="headerNav-I">
                <ul className='list-unstyled d-flex justify-content-between px-5 fs-5'>
                  <li className='px-3'><a href="#">Home</a></li>
                  <li className='px-3'><a href="#">About</a></li>
                  <li className='px-3'><a href="#">Shop</a></li>
                </ul>
              </div>
              <div className="headerNav-B">
                  <a type='button' className='btn btn-outline-dark'>Cart</a>
              </div>
             
            </div>
        </div>
     </header>

      <section id='homeSection' className='py-5'>
        <div className="container py-5">
          <h1 className='text-white text-center'>Shop in style</h1>
          <p className='text-center'>With this shop hompeage template</p>
        </div>
      </section> 
      <section id='itemCards'>
        <div className="container">
            <div className="row my-5 text-center">
                <div className="col-3">
                    <img className='d-block rounded-top' src={cardPic} alt="" width={270}/>
                    <h4 className='mt-2'>Fancy Product</h4>
                    <p className='mb-5'>$40.00 - $80.00</p>
                    <button type='button' className='btn btn-outline-dark mt-auto mb-4'>View options</button>
                </div>
                <div className="col-3">
                    <img className='d-block rounded-top' src={cardPic} alt="" width={270}/>
                    <h4 className='mt-2'>Fancy Product</h4>
                    <p  className='mb-5'>$40.00 - $80.00</p>
                    <button type='button' className='btn btn-outline-dark mt-auto'>View options</button>
                </div>
                <div className="col-3">
                    <img className='d-block rounded-top' src={cardPic} alt="" width={270}/>
                    <h4 className='mt-2'>Fancy Product</h4>
                    <p  className='mb-5'>$40.00 - $80.00</p>
                    <button type='button' className='btn btn-outline-dark mt-auto'>View options</button>
                </div>
                <div className="col-3">
                    <img className='d-block rounded-top' src={cardPic} alt="" width={270}/>
                    <h4 className='mt-2'>Fancy Product</h4>
                    <p  className='mb-5'>$40.00 - $80.00</p>
                    <button type='button' className='btn btn-outline-dark mt-auto mb-4'>View options</button>
                </div>

                <div className="col-3">
                    <img className='d-block rounded-top' src={cardPic} alt="" width={270}/>
                    <h4 className='mt-2'>Fancy Product</h4>
                    <p  className='mb-5'>$40.00 - $80.00</p>
                    <button type='button' className='btn btn-outline-dark mt-auto'>View options</button>
                </div>
                <div className="col-3">
                    <img className='d-block rounded-top' src={cardPic} alt="" width={270}/>
                    <h4 className='mt-2'>Fancy Product</h4>
                    <p  className='mb-5'>$40.00 - $80.00</p>
                    <button type='button' className='btn btn-outline-dark mt-auto'>View options</button>
                </div>
                <div className="col-3">
                    <img className='d-block rounded-top' src={cardPic} alt="" width={270}/>
                    <h4 className='mt-2'>Fancy Product</h4>
                    <p  className='mb-5'>$40.00 - $80.00</p>
                    <button type='button' className='btn btn-outline-dark mt-auto'>View options</button>
                </div>
                <div className="col-3">
                    <img className='d-block rounded-top' src={cardPic} alt="" width={270}/>
                    <h4 className='mt-2'>Fancy Product</h4>
                    <p  className='mb-5'>$40.00 - $80.00</p>
                    <button type='button' className='btn btn-outline-dark mt-auto mb-4'>View options</button>
                </div>
            </div>
        </div>
      </section>
      <section id='footer' className='py-5'>
          <p className='m-0 text-center text-white'>Copyright © Your Website 2023</p>
      </section>
    </div>
  );
}

export default App;
