import React from 'react';
import styled, { css } from 'styled-components';
import './MasterDnD.css'
import axios from 'axios'

export default class Draggable extends React.Component {
    state = {
        isDragging: false,

        originalX: 0,
        originalY: 0,

        translateX: 0,
        translateY: 0,

        lastTranslateX: 0,
        lastTranslateY: 0,

        employees: []
    };

    componentWillUnmount() {
        window.removeEventListener('mousemove', this.handleMouseMove);
        window.removeEventListener('mouseup', this.handleMouseUp);
    }

    handleMouseDown = ({ clientX, clientY }) => {
        window.addEventListener('mousemove', this.handleMouseMove);
        window.addEventListener('mouseup', this.handleMouseUp);

        if (this.props.onDragStart) {
            this.props.onDragStart();
        }

        this.setState({
            originalX: clientX,
            originalY: clientY,
            isDragging: true
        });
    };

    handleMouseMove = ({ clientX, clientY }) => {
        const { isDragging } = this.state;
        const { onDrag } = this.props;

        if (!isDragging) {
            return;
        }

        this.setState(prevState => ({
            translateX: clientX - prevState.originalX + prevState.lastTranslateX,
            translateY: clientY - prevState.originalY + prevState.lastTranslateY
        }), () => {
            if (onDrag) {
                onDrag({
                    translateX: this.state.translateX,
                    translateY: this.state.translateY
                });
            }
        });
    };

    handleMouseUp = () => {
        window.removeEventListener('mousemove', this.handleMouseMove);
        window.removeEventListener('mouseup', this.handleMouseUp);

        // this.setState((prevState) => {
        //     // old state
        //     // set x and y and draggable
        //     // for one specific index
        //     // return entire array

        //     return newState
        // })
        this.setState(
            {
                originalX: 0,
                originalY: 0,
                lastTranslateX: this.state.translateX,
                lastTranslateY: this.state.translateY,

                isDragging: false
            },
            () => {
                if (this.props.onDragEnd) {
                    this.props.onDragEnd();
                }
            }
        );
    };

    componentDidMount() {
        axios.get('https://scheduler-be-1.herokuapp.com/api/employees').then(
            (response) => {
                this.setState({
                    employees: response.data
                })
            })
    }
    render() {
        // console.log(this.state.employees)
        const { children } = this.props;
        const { translateX, translateY, isDragging } = this.state;
        let employee = this.state.employees.map(item => {
            return (
                <div key={item.id} className='front'>
                    <img className='photoStyle1' src={item.photo_url} alt={item.full_name}></img>
                    <p>{item.full_name}</p>
                </div>
            )
        })
        return (
            <div>
                <Container
                    onMouseDown={this.handleMouseDown}
                    x={translateX}
                    y={translateY}
                    isDragging={isDragging}
                    id='1'
                    className='containerDemo'
                >
                    {/* {children} */}
                    {/* <img src={image} /> */}

                    {employee[4]}

                </Container>

            </div>
        );
    }
}

const Container = styled.div.attrs({
    style: ({ x, y }) => ({
        transform: `translate(${x}px, ${y}px)`
    }),
})`
  cursor: grab;
  
  ${({ isDragging }) =>
        isDragging && css`
    opacity: 0.8;
    cursor: grabbing;
  `};
`;