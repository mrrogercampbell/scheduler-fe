import React, { Component } from 'react';
import TableSections from '../TableSections/TableSections'
import axios from 'axios'
import MasterDnD from '../MasterDnD/MasterDnD'
import MasterDnD1 from '../MasterDnD.1/MasterDnD'
import MasterDnD2 from '../MasterDnD.2/MasterDnD'
import MasterDnD3 from '../MasterDnD.3/MasterDnD'
import MasterDnD4 from '../MasterDnD.4/MasterDnD'
import MasterDnD5 from '../MasterDnD.5/MasterDnD'
import MasterDnD6 from '../MasterDnD.6/MasterDnD'
import MasterDnD7 from '../MasterDnD.7/MasterDnD'
import MasterDnD8 from '../MasterDnD.8/MasterDnD'
import MasterDnD9 from '../MasterDnD.9/MasterDnD'
import MasterDnD10 from '../MasterDnD.10/MasterDnD'
import { Container, Row, Col } from 'reactstrap'
// import MasterDnD6 from '../MasterDnD.6/MasterDnD'


class DnDParent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employee: []
        }
    }


    componentDidMount() {
        axios.get('https://scheduler-be-1.herokuapp.com/api/employees')
            .then((res) => {
                this.setState({
                    employee: res.data
                });
                // console.log(this.state.employee)
            })
            .catch(err => {
                console.log(err);
            });
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col xs='3'>
                        <MasterDnD />
                        <MasterDnD1 />
                        <MasterDnD2 />
                        <MasterDnD3 />
                        <MasterDnD4 />
                        <MasterDnD5 />
                        <MasterDnD6 />
                        <MasterDnD7 />
                        <MasterDnD8 />
                        <MasterDnD9 />
                        <MasterDnD10 />
                    </Col>
                    <Col xs='9'>
                        <TableSections />
                    </Col>
                    {/* <MasterDnD6 /> */}
                </Row>
            </Container>
        );
    }
}

export default DnDParent;