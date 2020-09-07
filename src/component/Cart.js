import React, { Component } from 'react'

export default class Cart extends Component {
     render() {
          const { cartItems } = this.props
          return (

               <div>
                    {cartItems.length === 0 ?
                         <div className="cart cart-header">cart Item is Empty</div>
                         :
                         <div className="cart cart-header">you have {cartItems.length} items in the cart</div>}
                    <div>
                         <div className='cart'>
                              <ul className="cart-items">
                                   {cartItems.map((item, index) => (
                                        <li key={item._id}>
                                             <div>
                                                  <img src={item.image} alt={item._id} />
                                             </div>
                                             <div>
                                                  <div>
                                                       {item.title}
                                                  </div>
                                                  <div className="right">
                                                       ${item.price} x {item.count} {"  "}
                                                       <button className="button" onClick={() => this.props.removeFromCart(item)}>Remove</button>
                                                  </div>

                                             </div>
                                        </li>
                                   ))}
                              </ul>
                         </div>
                         {cartItems.length !== 0 &&
                              <div className="cart">
                                   <div className="total">
                                        Total:{" "}
                                         $ {cartItems.reduce((a, c) => a + (c.price * c.count), 0)}

                                   </div>
                                   <button className="button primary">Proceed</button>

                              </div>
                         }

                    </div>
               </div>
          )
     }
}
