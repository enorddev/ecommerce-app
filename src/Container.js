import React , {useState} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import closeBtn from './images/icon-close.svg'
import { Carousel } from 'react-responsive-carousel';
import hamburger from './images/icon-menu.svg'
import cart from './images/icon-cart.svg'
import avatar from './images/image-avatar.png'
import logo from './images/logo.svg'
import deleteBtn from './images/icon-delete.svg'
import buttonCart from './images/icon-cart.svg'




export default function Container() {
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
    <div>
   
        <header>
          <div className='flex-left'>
            <div className='navigation'>
                <div className='burger-menu'>
                    <img  src={hamburger} />
                    
                </div>
                
            </div>
            <img src={logo}/>
          </div>
                    
            
          

          <div className='flex-right'>
            <div className='cart-flex'>
            <span className='item-output'>
                {cartOutput}
              </span>
            <img style={{
                        cursor:'pointer', 
                        position: 'relative'
                        }} 
                        onClick={handleCart} 
                        src={cart}/>
              
              
            </div>
            <img className='avatar' src={avatar}/>
          </div>
        </header>

        

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
                            <button >Checkout</button>
                        </div>
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

        {/* PRODUCT DESCRIPTION SECTION */}
        
        <div className='desc'>
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
        
        <div className='counter'>
        
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
  )
}
