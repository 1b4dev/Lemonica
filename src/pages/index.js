import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { ShoppingCart } from 'phosphor-react';
import { Link } from 'react-scroll';

import intro from '../images/intro.jpg';
import about from '../images/about.jpg';
import food from './food.json';

function Index(){

    const [activeFilter, setActiveFilter] = useState('all');

    const filterMenu = (category) => {
        setActiveFilter(category);
    };

    return (
    <>
        <section className="bg-success-subtle py-5">
            <Container>
                <Row className="flex-lg-row-reverse align-items-center g-5 py-5">
                    <Col xs={10} sm={8} lg={6}>
                        <img src={intro} class="d-block mx-lg-auto img-fluid rounded-5" alt="Asian Dishes" width="700" height="500" loading="lazy"/>
                    </Col>
                    <Col lg={6}>
                        <h1 class="display-5 fw-bold lh-1 mb-3">Discover Culinary Bliss in <span className="text-success">Little Lemon</span></h1>
                        <p class="lead">Indulge in our well-crafted menu, where each ingredient is carefully selected and expertly prepared for your imaginative delight. Whether you fancy a romantic evening out or an intimate get-together with friends, our welcoming atmosphere and ear-to-ear service will make your visit truly unforgettable.</p>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                            <Link to="discover" smooth={true} duration={200}>
                                <Button variant="warning" className="rounded-pill btn-lg px-4 me-md-2">Discover Menu</Button>
                            </Link>
                            <Button variant="outline-secondary" className="rounded-pill btn-lg px-4">Contact Us</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        <section id="discover" className="py-5">
            <Container>
                <Row>
                    <Col>
                        <h2 className="mb-3">Discover Our Menu</h2>
                        <p className="text-muted pb-3">
                            Explore our wide selection of delicious dishes, crafted with the finest ingredients and served with passion. From
                            classic favorites to innovative creations, there's something for every palate.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ButtonGroup>
                            <Button className="rounded-pill me-1" variant={activeFilter === 'all' ? 'warning' : 'outline-secondary'}
                            onClick={() => filterMenu('all')}>Show All
                            </Button>
                            <Button className="rounded-pill me-1" variant={activeFilter === 'starter' ? 'warning' : 'outline-secondary'}
                            onClick={() => filterMenu('starter')}>Starters
                            </Button>
                            <Button className="rounded-pill me-1" variant={activeFilter === 'main' ? 'warning' : 'outline-secondary'}
                            onClick={() => filterMenu('main')}>Main Dishes
                            </Button>
                            <Button className="rounded-pill me-1" variant={activeFilter === 'dessert' ? 'warning' : 'outline-secondary'}
                            onClick={() => filterMenu('dessert')}>Desserts
                            </Button>
                            <Button className="rounded-pill" variant={activeFilter === 'other' ? 'warning' : 'outline-secondary'}
                            onClick={() => filterMenu('other')}>Other
                            </Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                <Row className="g-4 pb-5 pt-3">
                    <CardGroup>
                        {food.filter((item) => activeFilter === 'all' || item.category === activeFilter).map((item) => (
                            <Col xs={12} sm={6} md={4} lg={3} key={item.id}>
                                <Card bg="warning" className="rounded-4 mx-2 mb-2">
                                <Card.Img variant="top" className="rounded-4" src={`/images/${item.image}`} style={{ objectFit: 'cover', height: '200px' }}/>
                                <Card.Body>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>{item.desc.length > 40 ? `${item.desc.substring(0, 40)}...` : item.desc}</Card.Text>
                                    <Card.Text>
                                    <mark>Price: ${item.price.toFixed(2)}</mark>
                                    </Card.Text>
                                    <Button className="rounded-pill px-4 w-100" variant="outline-light">
                                    <ShoppingCart size={24} /> Add to Cart
                                    </Button>
                                </Card.Body>
                                </Card>
                            </Col>
                            ))}
                    </CardGroup>
                </Row>
            </Container>
        </section>
        <section className="bg-warning-subtle py-5">
            <Container>
                <Row className="align-items-center g-5 py-5">
                    <Col xs={10} sm={8} lg={6}>
                        <img src={about} class="d-block mx-lg-auto img-fluid rounded-5" alt="Asian Dishes" width="400" height="400" loading="lazy"/>
                    </Col>
                    <Col lg={6}>
                        <h2 class="text-secondary lh-1 mb-3">Our Restaurant</h2>
                        <p>Little Lemon was founded by husband-and-wife team, who bring their passion for Mediterranean flavors and commitment to quality ingredients to every dish they serve. Drawing inspiration from their family recipes and the vibrant culinary traditions of the Mediterranean, they have created a menu that celebrates the simple pleasures of good food.</p>       
                        <a className="text-secondary" href="#">Read More</a>             
                    </Col>
                </Row>
            </Container>
        </section>
    </>
    );
}

export default Index;