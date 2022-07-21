import React from 'react';
import { Container, Form, FormControl, Button, Row, Card, Alert, Modal } from "react-bootstrap";
import NoImage from '../images/NoImage.jpg';
import WithRouter from '../components/WithRouter';
import { Link } from 'react-router-dom';

class Products extends React.Component< {}, any > {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = { allProducts: [], productsToShow: [], searchValue: '', showModal: false, currentProductID: '' };
        this.searchProduct = this.searchProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    async componentDidMount() {
        try {
            const response = await fetch('http://localhost:8080/products/', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                },
            });
            const data = await response.json();
            this.setState({ allProducts: data, productsToShow: data })
        }
        catch(error) {
            return {};
        }
    }

    searchProduct(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({searchValue: e.currentTarget.value})
        this.setState({productsToShow: this.state.allProducts.filter((p: any) => p.name.includes(this.state.searchValue))});
    }

    async deleteProduct(_id: number) {
        try {
            const response = await fetch(`http://localhost:8080/products/${_id}`, {
                method: 'DELETE',
                headers: {
                    Accept: 'application/json',
                },
            });
        }
        catch(error) {
            return error;
        }
    }

    handleClose = () => this.setState({showModal: false});

    render() {
        return(
            <>
                <Link to={'/AddNewProduct/null'} className='btn btn-secondary' style={{marginTop: '20px'}}>Add new product</Link>        
                <Form style={{marginTop: '30px'}} className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    value={this.state.searchValue}
                    onChange={ this.searchProduct }
                    />
                    <Button className='btn btn-secondary' onClick={() => this.setState({productsToShow: this.state.allProducts, searchValue: ''})}>Reset</Button>
                </Form>
                <Container>
                    <Row xs={1} md={4} className="g-4">
                        {this.state.productsToShow.map((product: { _id: any; name: string; price: number; }) => (
                            <Container>
                                <Card className="mt-5 mb-5" style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={NoImage} className="card-images" />
                                    <Card.Body>
                                        <Card.Title>
                                            <h2>{product.name}</h2>
                                        </Card.Title>
                                        <Card.Text>{`${product.price}$`}</Card.Text>
                                        <Card.Link className='btn btn-outline-secondary btn-detail card-button' href={`/EditProduct/${product._id}`}>Edit</Card.Link>
                                        <Card.Link
                                            className='btn btn-outline-secondary btn-detail card-button'
                                            onClick={ () => {
                                                this.setState({currentProductID: product._id, showModal: true});
                                            }}
                                            >Delete
                                        </Card.Link>
                                    </Card.Body>
                                </Card>
                            </Container>
                        ))}
                    </Row>
                    {/* Alert whether to delete a product or not */}
                    <Modal
                        show={this.state.showModal}
                        onHide={this.handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton></Modal.Header>
                        <Modal.Body>Are you sure you want to delete this product?</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Cancel
                            </Button>
                            <Button variant="danger"
                                onClick={async () => {
                                    await this.deleteProduct(this.state.currentProductID);
                                }}
                                href = {'/Home'}
                            >
                                Yes, I'm sure
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Container>
            </>
        )
    }
}

export default WithRouter(Products);