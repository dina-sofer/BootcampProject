import React from 'react';
import WithRouter from '../components/WithRouter';
import FormProduct from '../components/FormProduct';

class AddNewProduct extends React.Component<{ params: any }, any> {
    constructor(props: { params: any; } | Readonly<{ params: any; }>) {
        super(props);
        const id = this.props.params.id;
    }

    render() {
        return(
            <>
                <FormProduct id = ''/>
            </>
        )
    }
}

export default WithRouter(AddNewProduct);