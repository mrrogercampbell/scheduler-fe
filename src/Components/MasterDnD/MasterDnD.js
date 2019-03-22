import React from 'react';
import styled, { css } from 'styled-components';
import './MasterDnD.css'
import image from '../../Images/dinner-plate.png'
// import { Link } from "react-router-dom";
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
        console.log(this.state.employees)
        const { children } = this.props;
        const { translateX, translateY, isDragging } = this.state;
        let employee = this.state.employees.map(item => {
            return (
                <div key={item.id}>
                    <p>Photo: <img src={item.photo_url} alt={item.full_name}></img></p>
                </div>
            )
        })
        return (
            <Container
                onMouseDown={this.handleMouseDown}
                x={translateX}
                y={translateY}
                isDragging={isDragging}
            >
                {children}
                <img src={image} />
                {employee}
            </Container>
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