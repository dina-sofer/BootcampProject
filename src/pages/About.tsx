import React from 'react';
import { Container } from 'react-bootstrap';
import WithRouter from '../components/WithRouter';

const styleContainer = {
      'color': 'gray',
      'margin': '40px',
      'fontSize': '25px'

}
class About extends React.Component {
    constructor(props: {} | Readonly<{}>) {
        super(props);
    }

    render() {
        return(
            <>
                <Container style={styleContainer}>
                    <h1>Muffins</h1>
                    <p>
                        Here you will find all the products and accessories required for baking.<br/>
                        Muffins is a very large store that sells dozens of diverse and original baking products.<br/>
                        And all at prices that are worth every penny.<br/>
                    </p>
                    <h3>Opening Hours:</h3>
                    <p>
                        Sundays-Thursdays: 19:00 - 22:00<br/>
                        And on Friday<br/>
                        The rest of the days by prior arrangement.<br/>
                    </p>
                    <h3>phone:</h3>
                    <p>055-1234567</p>
                </Container>
            </>
        )
    }
}

export default WithRouter(About);