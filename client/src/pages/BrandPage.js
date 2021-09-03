import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
import Display , {Brand} from '../components/Display'

const BrandPage = () => {
    return (
        <div>
            <Container>
            <Brand />
            </Container>
        </div>
    )
}

export default BrandPage;
