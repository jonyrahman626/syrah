import React from 'react';
import Product1 from '../../Assets/images/product-1.png';
import Product2 from '../../Assets/images/product-2.png';
import Product3 from '../../Assets/images/product-3.png';
import Product4 from '../../Assets/images/product-4.png';
import ProductBg from '../../Assets/images/product-bg-shap.png';
import './Products.css';

const Products = () => {
    return (
        <div>
            <section className="product-area">
                <div className="container px-lg-0">
                    <div className="row">
                        <div className="col-lg-12 mb-10 text-center">
                            <div className="section-title full-sec">
                                <h2 className="theme-color">Our Products</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 mt-30 text-center">
                            <div className="single-product">
                                <div className="product-bg bg">
                                    <img className="img-fluid" src={ProductBg} alt="product-bg-shap" />
                                </div>
                                <div className="product-wrap">
                                    <div className="product-bdr">
                                        <div className="product-img">
                                            <img src={Product1} alt="product" />
                                        </div>
                                        <div className="product-details">
                                            <span>Golden Wine</span>
                                            <span>$99.33</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 mt-30 text-center">
                            <div className="single-product">
                                <div className="product-bg bg">
                                    <img className="img-fluid" src={ProductBg} alt="product-bg-shap" />
                                </div>
                                <div className="product-wrap">
                                    <div className="product-bdr">
                                        <div className="product-img">
                                            <img src={Product2} alt="product" />
                                        </div>
                                        <div className="product-details">
                                            <span>Vintage Wine</span>
                                            <span>$89.33</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 mt-30 text-center">
                            <div className="single-product">
                                <div className="product-bg bg">
                                    <img className="img-fluid" src={ProductBg} alt="product-bg-shap" />
                                </div>
                                <div className="product-wrap">
                                    <div className="product-bdr">
                                        <div className="product-img">
                                            <img src={Product3} alt="product" />
                                        </div>
                                        <div className="product-details">
                                            <span>Sayrah Wine</span>
                                            <span>$59.13</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 mt-30 text-center">
                            <div className="single-product">
                                <div className="product-bg bg">
                                    <img className="img-fluid" src={ProductBg} alt="product-bg-shap" />
                                </div>
                                <div className="product-wrap">
                                    <div className="product-bdr">
                                        <div className="product-img">
                                            <img src={Product4} alt="product" />
                                        </div>
                                        <div className="product-details">
                                            <span>Grenich Wine</span>
                                            <span>$39.33</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Products;
