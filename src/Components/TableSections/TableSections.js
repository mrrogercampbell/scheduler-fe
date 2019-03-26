import React, { Component } from 'react';
import './TableSections.css'

class TableSections extends Component {
    render() {
        return (
            <div>
                <section className='server-holding'>
                    <h1> Available
                        <br />
                        Server</h1>
                </section>
                <section className='one'>
                    <h1>Section 1</h1>
                </section>
                <section className='two'>
                    <h1>Section 2</h1>
                </section>
                <section className='three'>
                    <h1>Section 3</h1>
                </section>
            </div>
        );
    }
}

export default TableSections;