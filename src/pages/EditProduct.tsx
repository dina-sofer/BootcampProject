import React from 'react';
import FormProduct from '../components/FormProduct';
import WithRouter from '../components/WithRouter';

class EditProduct extends React.Component<{ params: any }, any> {
    constructor(props: { params: any; } | Readonly<{ params: any; }>) {
        super(props);
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