import React, { Component } from 'react';
import './TableSections.css'
// import RedTable from '../../Images/red-4-top.png'

class TableSections extends Component {
    render() {
        return (
            <div>
                <section className='one'>
                    <h1>Section 1</h1>
                    {/* <img src={RedTable} />
                    <img src={RedTable} />
                    <img src={RedTable} />
                    <img src={RedTable} /> */}
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