import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'
import Modal from 'react-modal'

export default class products extends Component {
     constructor(props) {
          super(props)
          this.state = {
               product: null,

          }
     }
     openModel = (product) => {
          this.setState({ product })
     }
     closeModel = () => {
          this.setState({ product: null })
     }

     render() {
          const { product } = this.state
          return (
               <div>
                    <Fade bottom cascade>
                         <ul className="products">
                              {this.props.products.map(product => (
                                   <li key={product._id}>
                                        <div className="product">
                                             <a href={"#" + product._id} onClick={() => this.openModel(product)}>
                                                  <img src={product.image} alt={product.title}></img>
                                                  <p>
                                                       ${product.title}
                                                  </p>
                                             </a>
                                             <div className="product-price">
                                                  <div>
                                                       ${product.price}
                                                  </div>
                                                  <button onClick={() => this.props.addToCart(product)} className='button primary'>Add to Cart</button>

                                             </div>
                                        </div>
                                   </li>
                              ))}
                         </ul>
                    </Fade>
                    {product &&
                         (
                              <Modal isOpen={true}>
                                   <Zoom>
                                        <button className="close-model" onClick={this.closeModel}>X</button>
                                        <div className='product-details'>
                                             <img src={product.image} alt={product._id} />
                                             <div className="product-details-description">
                                                  <p>
                                                       <strong> {product.title}</strong>
                                                  </p>
                                                  <p>
                                                       {product.description}
                                                  </p>
                                                  <p>
                                                       available Sizeise : {" "}
                                                       {product.availableSizes.map(x => (
                                                            <span> {" "} <button className='button'>{x}</button></span>
                                                       ))}
                                                  </p>
                                                  <div className="product-price">
                                                       <div>
                                                            $ {product.price}
                                                  </div>
                                                  <button className="button primary" onClick={() => {
                                                       this.props.addToCart(product)
                                                       this.closeModel()
                                                  }}>Add </button>
                                                  </div>
                                             </div>
                                        </div>

                                   </Zoom>
                              </Modal>
                         )
                    }

               </div>
          )
     }
}
