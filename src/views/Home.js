import React, { Fragment } from 'react';

import Header from 'components/Header';
import Detail from 'components/Detail';

class Home extends React.Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Detail />
            </Fragment>
        )
    };
}

export default Home;