import React from 'react';
import { Container, Form, FormControl, Button, Row, Card } from "react-bootstrap";
import { products } from '../data/products';
import NoImage from '../images/NoImage.jpg';
import WithRouter from '../components/WithRouter';

class Home extends React.Component< {}, any > {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = { productsToShow: products, searchValue: '' };
        this.searchProduct = this.searchProduct.bind(this);
    }

    searchProduct(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({searchValue: e.currentTarget.value})
        this.setState({productsToShow: products.filter(p => p.name.includes(this.state.searchValue))});
    }

    render() {
        return(
            <>                
                <Form style={{marginTop: '30px'}} className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    value={this.state.searchValue}
                    onChange={ this.searchProduct }
                    />
                    <Button className='btn btn-secondary' onClick={(clickEvent) => this.setState({productsToShow: products, searchValue: ''})}>Reset</Button>
                </Form>
                <Container>
                    <Row xs={1} md={4} className="g-4">
                        {this.state.productsToShow.map((product: { ID: number; name: string; price: number; category: string; }) => (
                            <Container>
                                <Card className="mt-5 mb-5" style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={NoImage} className="card-images" />
                                    <Card.Body>
                                        <Card.Title>
                                            <h2>{product.name}</h2>
                                        </Card.Title>
                                        <Card.Text>{`${product.price}$`}</Card.Text>
                                        <Card.Link className='btn btn-outline-secondary btn-detail card-button' href={`/ViewProduct/${product.ID}`}>Details</Card.Link>
                                    </Card.Body>
                                </Card>
                            </Container>
                        ))}
                    </Row>
                </Container>
            </>
        )
    }
}

export default WithRouter(Home);