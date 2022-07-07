import React from 'react';
import { Link } from 'react-router-dom';
import WithRouter from '../components/WithRouter';
import { products } from '../data/products';
import NoImage from '../images/NoImage.jpg';

class ViewProduct extends React.Component<{ params: any }, any> {
    constructor(props: { params: any; } | Readonly<{ params: any; }>) {
        super(props);
        const id = this.props.params.id;
        this.state = { currentProduct: this.findProduct(Number(id)) };
        this.findProduct = this.findProduct.bind(this);
    }

    findProduct(_id: number) {
        return(products.find(product => product.ID === _id));
    }

    render() {
        return(
            <>
                <Link to={`/Home`}
                    className="btn btn-outline-secondary btn-detail card-button"
                    style={{margin: '20px'}}
                    >Back to Home
                </Link>
                <div style={{display: 'flex', flexFlow: 'row', alignItems: 'baseline'}}>
                    <div>
                        <img src={NoImage} style={{width: '300px'}}/>
                    </div>
                    <div>
                        <h1>{ this.state.currentProduct?  this.state.currentProduct.name: 'Not Found!' }</h1>
                        <h2>{this.state.currentProduct? `${this.state.currentProduct.price}$`: ''}</h2>
                        <h3>{this.state.currentProduct? `Category: ${this.state.currentProduct.category}`: ''}</h3>
                    </div>
                </div>
            </>
        )
    }
}

export default WithRouter(ViewProduct);