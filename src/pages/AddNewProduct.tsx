import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import WithRouter from '../components/WithRouter';
import FormProduct from '../components/FormProduct';
import { products } from '../data/products';
import NoImage from '../images/NoImage.jpg';

class AddNewProduct extends React.Component<{ params: any }, any> {
    constructor(props: { params: any; } | Readonly<{ params: any; }>) {
        super(props);
        const id = this.props.params.id;
    }

    render() {
        return(
            <>
                <FormProduct/>
            </>
        )
    }
}

export default WithRouter(AddNewProduct);