import React from 'react';
import { Button, Col, Container, Row } from "react-bootstrap";
import './Home.scss';
const genders = [
    { link: '/genero/accion', label: 'Acción y Aventura' },
    { link: '/genero/anime', label: 'Animé y Videojuegos' },
    { link: '/genero/biograficas', label: 'Biográficas' },
    { link: '/genero/scifi', label: 'Ciencia Ficción' },
    { link: '/genero/cineoro', label: 'Cine de Oro' },
    { link: '/genero/clasicas', label: 'Clásicas' },
    { link: '/genero/comedia', label: 'Comedia' },
    { link: '/genero/deportes', label: 'Deportes' },
    { link: '/genero/docu', label: 'Documentales' },
    { link: '/genero/drama', label: 'Drama' },
    { link: '/genero/familiares', label: 'Familiares' },
    { link: '/genero/historicas', label: 'Históricas' },
    { link: '/genero/infantiles', label: 'Infantiles' },
    { link: '/genero/latino', label: 'Latinoamericanas' },
    { link: '/genero/musica', label: 'Música' },
    { link: '/genero/romanticas', label: 'Románticas' },
    { link: '/genero/terror', label: 'Terror y Suspenso' },
]

const Home = () => (
    <div className="home background">
        <div className="gradient">
            <div className="container">
                <h1 className="pt-5">Bienvenido</h1>
            </div>
        </div>
        <Container>
            <Row className="fixed-top m-4">
                <Col>{<h3>Depayser</h3>}</Col>
            </Row>
            <Row className="fixed-bottom mb-4">
                {genders.map(gender => <Col xs={4} md={3} lg={2} key={gender.label}><Button href={gender.link} variant="outline-dark">{gender.label}</Button></Col>)}
            </Row>
        </Container>
    </div>
)
export default Home;