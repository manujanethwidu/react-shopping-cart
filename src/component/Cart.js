import React, { Component } from 'react'

export default class Cart extends Component {
     constructor(props) {
          super(props)
          this.state = {
               name: "",
               email: "",
               address: '',
               showCheckout: false
          }
     }

     onClickHlandler = () => {
          this.setState({ showCheckout: true })
          console.log(this.state.showCheckout);

     }

     handlInput = (e) => {
          this.setState({ [e.target.name]: e.target.value })

     }
     createOrder = (e) => {
          e.preventDefault()
          const order = {
               name: this.state.name,
               email: this.state.email,
               address: this.state.address,
               cartItems: this.props.cartItems

          }
          this.props.createOrder(order)
     }

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
                                   <button onClick={this.onClickHlandler} className="button primary">Proceed</button>
                              </div>

                         }
                         {this.state.showCheckout && (
                              <div className='cart'>
                                   <form onSubmit={this.createOrder}>
                                        <ul className="form-container">
                                             <li>
                                                  <label>Email</label>
                                                  <input name="email" type="email" required onChange={this.handlInput} />
                                             </li>
                                             <li>
                                                  <label>Name</label>
                                                  <input name='name' type="text" required onChange={this.handlInput} />
                                             </li>
                                             <li>
                                                  <label>Address</label>
                                                  <input name='address' type="text" required onChange={this.handlInput} />
                                             </li>
                                             <li>
                                                  <button className='button primary' type='submit'>Check Out </button>
                                             </li>
                                        </ul>
                                   </form>
                              </div>
                         )}
                    </div>

               </div>
          )
     }
}
