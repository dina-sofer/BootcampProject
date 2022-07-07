import React from 'react';
import WithRouter from '../components/WithRouter';

class About extends React.Component {
    constructor(props: {} | Readonly<{}>) {
        super(props);
    }

    render() {
        return(
            <>
                <h1>About Us...</h1>
                <h2>Muffins is a store that sells baking products</h2>
            </>
        )
    }
}

export default WithRouter(About);