import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import WithRouter from '../components/WithRouter';

class FormProduct extends React.Component<any, any> {
    constructor(props: any | Readonly<{ params: any; }>) {
        super(props);
        const id = this.props.id;
        this.state = {
            productValue: id !== 'null' ? this.findProduct(id) : ''
        };
        this.findProduct = this.findProduct.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    async findProduct(_id: string) {
        try {
            const response = await fetch(`http://localhost:8080/products/${_id}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                },
            });
            const data = await response.json();
            this.setState({ productValue: data })
        }
        catch(error) {
            return null;
        }
    }

    handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const item = {...this.state.productValue}
        const attribute = e.currentTarget.name;
        item[attribute] = e.currentTarget.value;
        this.setState({productValue: item})
    }

    async submitForm() {
        let _method: string;
        let _id: any;

        // create new product
        if(this.props.id === 'null') {
            _method = 'POST';
            _id = '';
        }
        // update product
        else {
            _method = 'PUT';
            _id = this.props.id;
        }

        try {
            await fetch(`http://localhost:8080/products/${_id}`, {
                method: _method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.productValue)
            });
        }
        catch(error) {
            return error;
        }
    }

    render() {
        return(
            <>
                <Form style={{margin: '30px'}} action={'/Home'} onSubmit={() => this.submitForm()}>
                    <Form.Group className="mb-3">
                        <Form.Label>Product name *</Form.Label>
                        <Form.Control required type="text" name='name' placeholder="Enter name" value={ this.state.productValue ? this.state.productValue.name : "" } onChange={ this.handleChange }/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Product description</Form.Label>
                        <Form.Control type="text" name='description' placeholder="Enter description" value={ this.state.productValue ? this.state.productValue.description : "" } onChange={ this.handleChange }/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Containing *</Form.Label>
                        <Form.Control required type="text" name='amount' placeholder="Enter amount" value={ this.state.productValue ? this.state.productValue.amount : "" } onChange={ this.handleChange }/>
                        <Form.Text className="text-muted">
                        Quantity in kilograms / grams / liters etc.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Product price *</Form.Label>
                        <Form.Control required type="number" name='price' placeholder="Enter price" value={ this.state.productValue ? this.state.productValue.price : "" } onChange={ this.handleChange }/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Product category *</Form.Label>
                        <Form.Control required type="text" name='category' placeholder="Enter Category" value={ this.state.productValue ? this.state.productValue.category : "" } onChange={ this.handleChange }/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Units in Stock *</Form.Label>
                        <Form.Control required type="text" name='stock' placeholder="Enter units in Stock" value={ this.state.productValue ? this.state.productValue.stock : "" } onChange={ this.handleChange }/>
                    </Form.Group>
                    <Link to={`/Home`}
                        className="btn btn-outline-secondary btn-detail card-button"
                        style={{ width: '100px' }}
                        >Cancel
                    </Link>
                    <Button type="submit" variant="contained"
                        className="btn btn-outline-secondary btn-detail card-button"
                        style={{ marginLeft: '30px', width: '100px' }}
                        >Save 
                    </Button>
                </Form>
            </>
        )
    }
}

export default WithRouter(FormProduct);