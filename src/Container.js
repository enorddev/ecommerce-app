import React , {useState} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import closeBtn from './images/icon-close.svg';
import { Carousel } from 'react-responsive-carousel';
import hamburger from './images/icon-menu.svg';
import cart from './images/icon-cart.svg';
import avatar from './images/image-avatar.png';
import logo from './images/logo.svg';
import deleteBtn from './images/icon-delete.svg';
import buttonCart from './images/icon-cart.svg';
import * as ReactBootStrap from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';




export default function Hero() {
    const [output, setOutput] = useState(0)
    const [cartOutput, setCartOutput] = useState(0)
    const [showModal, setShowModal] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const [isEmpty, setIsEmpty ] = useState(false)
   
   

    const price = 125
    const totalPrice = price * output
    

    const handlePlus = () => {
        setOutput(prevState => prevState + 1)
    }

    const handleMinus = () => {
        setOutput(prevState => prevState - 1)
    }

    const addToCart = () => {
        setCartOutput(output)
    }

    const handleCart = (e) => {
        setShowModal(current => !current)
        if(cartOutput === 0) {
            setIsEmpty(prevEmpty => !prevEmpty)
        }
    }

    const handleDelete = () => {
        if(window.confirm('Are you sure?')) {
            
            return (setCartOutput(0), setIsEmpty(true), setOutput(0)) 
        }
    }

    const [show, setShow] = useState(false);
    // const [continueShop, setContinueShop] = useState(false)

    const handleClose = () => {
        return (
            setShow(false),
            setShowModal(false),
            setCartOutput(0),
            setOutput(0)
        )
        
        }
    const handleShow = () => setShow(true);

    const handleContinue = () => setShow(false); 
        
    
    const spanStyle = {
        color: '#fe8019',
        fontWeight:'600',
      }
    
    const priceFlex = {
        display: 'flex',
        alignItems: 'center',
        gap: '20px'
      }

      

  return (
        <>      
            
        <header>
             
             {[ 'xl'].map((expand) => (
             <ReactBootStrap.Navbar key={expand} variant='light' expand={expand} className="mb-3" id='navbar'>
                <ReactBootStrap.Container fluid>
                    <ReactBootStrap.Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <ReactBootStrap.Navbar.Brand ><img src={logo}/></ReactBootStrap.Navbar.Brand>
                            <ReactBootStrap.Navbar.Offcanvas
                                id={`offcanvasNavbar-expand-${expand}`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                placement="end">
                                <ReactBootStrap.Offcanvas.Header closeButton></ReactBootStrap.Offcanvas.Header>
                        <ReactBootStrap.Offcanvas.Body>
                            <ReactBootStrap.Nav className="justify-content-center flex-grow-1 pe-3">
                                <ReactBootStrap.Nav.Link href="#action1">Collections</ReactBootStrap.Nav.Link>
                                <ReactBootStrap.Nav.Link href="#action2">Men</ReactBootStrap.Nav.Link>
                                <ReactBootStrap.Nav.Link href="#action3">Women</ReactBootStrap.Nav.Link>
                                <ReactBootStrap.Nav.Link href="#action4">About</ReactBootStrap.Nav.Link>
                                <ReactBootStrap.Nav.Link href="#action5">Contact</ReactBootStrap.Nav.Link>
                            </ReactBootStrap.Nav>
                        </ReactBootStrap.Offcanvas.Body>
                    </ReactBootStrap.Navbar.Offcanvas>
                    <ReactBootStrap.Navbar.Brand href= '#'>
                    <ReactBootStrap.Navbar.Text className="justify-content-end" id="navbar-align"/>
                        <span className='item-output'>
                            {cartOutput}
                        </span>
                            <img 
                                className='cart-image'
                                width='20' 
                                height='20'
                                style={{
                                cursor:'pointer', 
                                position: 'relative',
                                marginRight: '20px'
                                }} 
                                onClick={handleCart} 
                                src={cart}/>

                            <img 
                                className='avatar' 
                                
                                width='40' 
                                height='40'
                                src={avatar}/>
                    </ReactBootStrap.Navbar.Brand>
                
                </ReactBootStrap.Container>
            </ReactBootStrap.Navbar>
            ))}
    </header>
            

        <div className='wrapper'>
            <div>
            {showModal && 
                <div className='cart-modal'>
                    <div className={`modal-content ${isVisible ? 'isVisible' : <h1>Empty</h1>}`}>

                        <h3 style={{textAlign:'center', paddingBottom: '10px', paddingTop: '10px'}}>Cart</h3>
                        <hr />
                        <div style={{
                                    display:'flex', 
                                    alignItems: 'center', 
                                    justifyContent:'center', 
                                    gap:'25px', 
                                    width:'100%', 
                                    maxWidth:'350px', 
                                    margin:'auto',
                                    paddingTop: '25px'
                                    }}>
                            <img style={{borderRadius:'8px'}} src='./main3.webp' width='80'/>
                            <div style={{display:'flex', flexDirection: 'column'}}>
                                <p style={{fontWeight:'400'}}>Fall Limited Edition Sneakers</p>
                                <p style={{display:'flex', gap:'50px'}}>${price}.00 x {output}  <strong>${totalPrice}.00</strong></p>
                            </div>

                            <img onClick={handleDelete} src={deleteBtn}/>
                        </div>
                            <div className='checkout-Btn'>
                                <button onClick={handleShow}>Checkout</button>
                            </div>

                            <ReactBootStrap.Modal
                                show={show}
                                onHide={handleClose}
                                backdrop="static"
                                keyboard={false}>
                                <ReactBootStrap.Modal.Header closeButton>
                                    <ReactBootStrap.Modal.Title>Thank you for your order</ReactBootStrap.Modal.Title>
                                </ReactBootStrap.Modal.Header>
                                <ReactBootStrap.Modal.Body>
                                
                    
                                    <div className='checkout_modal' style={{
                                                                        display: 'flex', 
                                                                        flexDirection: 'row', 
                                                                        alignItems: 'center', 
                                                                        justifyContent:'space-between'
                                                                        }}>
                                        <div>
                                            Total : <strong>${totalPrice}.00</strong><br/>
                                            Order number is: <strong>000-000-001</strong>
                                        </div>
                                        
                                        <div><img style={{float: 'right', borderRadius:'8px'}} src="./main3.webp" width="100"/></div>
                                    </div>

                                    
                                </ReactBootStrap.Modal.Body>
                                <ReactBootStrap.Modal.Footer>
                                    <div className='close-btn'>
                                    
                                        <button onClick={handleClose}>Close</button>
                                        <button onClick={handleContinue}>Continue shopping</button>
                                    </div>
                                </ReactBootStrap.Modal.Footer>
                                        
                                   
                                    
                            </ReactBootStrap.Modal>
                    </div>

                </div>}

                {isEmpty && <div className={`empty-Cart ${isEmpty ? 'isEmpty' : ''}`}><h1>Your cart is empty</h1></div>}
            

                
            {/* HEADER SECTION ENDS HERE */}
            
            
            {/* IMAGE CAROUSEL SECTION */}
            
            <Carousel className={`carousel ${showModal ? "showModal" : ""}`}>
                <div> 
                    <img src="./main1.webp" />
                </div>

                <div>
                    <img src="./main2.webp" />
                </div>

                <div>
                    <img src="./main3.webp" />
                </div>

                <div>
                    <img src="./main4.webp" />
                </div>
            </Carousel>
        </div>
        

        {/* PRODUCT DESCRIPTION SECTION */}
        <div>
        <div className={`desc ${showModal ? "showModal" : ""}`}>
            <h3 style={spanStyle}>SNEAKER COMPANY</h3>
            <h1 style={{width:'100%', maxWidth:'400px', paddingTop:'15px'}}>Fall Limited Edition Sneakers</h1>
            <p style={{
                        paddingTop:'15px', 
                        paddingBottom:'15px', 
                        width:'100%', 
                        maxWidth:'340px', 
                        lineHeight: '1.5'
                        }}>
                        These low-profile sneakers are your perfect casual wear companion. Featuring
                        a durable rubber outer sole, they'll withstand everything the weather can offer.
            </p>

            <div className='desc-flex'>
                <div className='price' style={priceFlex}>
                    <h1>$125.00</h1>
                    <p style={{ backgroundColor: '#f5dec3' , color: '#fe8019', fontWeight: '600' , padding:'5px'}}>50%</p>
                </div>
                <p style={{textDecoration: 'line-through', opacity: '0.4'}}>$250.00</p>

            </div>
        </div>


        
        {/* COUNTER SECTION */}
        
        <div className={`counter ${showModal ? "showModal" : ""}`}>
        
            <div className='counter-output'>
                <button style={{backgroundColor: '#f6f8fa'}} onClick={handleMinus} className='control-Btn'>-</button>
            
                <button style={{width: '400px', backgroundColor: '#f6f8fa', fontSize: '18px', fontWeight: '600', borderRadius: '8px' }}>{output}</button>
            
                <button style={{backgroundColor: '#f6f8fa'}} onClick={handlePlus} className='control-Btn'>+</button>
            </div>
            
            <div className='addBtn'>
                <button  onClick={addToCart}><img src={buttonCart}/>Add to cart</button>
            </div>           

        
        </div>
        </div>
        
      
    </div>
        </>
           
  )
}



