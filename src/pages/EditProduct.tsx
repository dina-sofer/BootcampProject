import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FormProduct from '../components/FormProduct';
import WithRouter from '../components/WithRouter';
import { products } from '../data/products';
import NoImage from '../images/NoImage.jpg';

class EditProduct extends React.Component<{ params: any }, any> {
    constructor(props: { params: any; } | Readonly<{ params: any; }>) {
        super(props);
        // this.state = { currentProduct: this.findProduct(Number(id)) };
        this.state = { currentProduct: null };
        this.findProduct = this.findProduct.bind(this);
    }

    // async componentDidMount() {
    //     const id = this.props.params.id;
    //     const response = await fetch(`http://localhost:8000/products/${id}`);
    //     const data = await response.json();
    //     this.setState({ currentProduct: data })
    // }

    // async componentDidMount() {
    //     // POST request using fetch with async/await
    //     const requestOptions = {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ title: 'React POST Request Example' })
    //     };
    //     const response = await fetch('https://reqres.in/api/posts', requestOptions);
    //     const data = await response.json();
    //     this.setState({ postId: data.id });
    // }

    findProduct(_id: number) {
        return(products.find(product => product.ID === _id));
    }

    render() {
        return(
            <>
                <FormProduct id = { this.props.params.id }/>
            </>
        )
    }
}

export default WithRouter(EditProduct);