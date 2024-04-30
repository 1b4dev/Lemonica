import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { TwitterLogo, InstagramLogo, FacebookLogo } from 'phosphor-react';

function Footer() {
  return (
    <footer className="py-5 bg-light-subtle shadow-sm">
      <Container>
        <Row className="mt-5">
            <Col sm={6} className="mb-3">
                <h4 className="mb-4">Sitemap</h4>
                <ul className="nav flex-column mb-3">
                    <li className="nav-item mb-2">
                        <a href="/" className="nav-link p-0 text-muted">Home</a>
                    </li>
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0 text-muted">Menu</a>
                    </li>
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0 text-muted">Order</a>
                    </li>
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0 text-muted">Contact</a>
                    </li>
                    <li className="nav-item mb-2">
                        <a href="#" className="nav-link p-0 text-muted">Reservations</a>
                    </li>
                </ul>
            </Col>
            <Col sm={6} className="mb-3">
                <Form>
                <h4 className="mb-3">Subscribe to our newsletter</h4>
                <p>Get frequent updates from us. Get notified about new menu items and much more...</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                    <Form.Control
                    id="newsletter1"
                    type="text"
                    placeholder="Enter email address"
                    className="me-2 rounded-pill"
                    />
                    <Button variant="secondary" type="button" className="rounded-pill">Subscribe</Button>
                </div>
                </Form>
            </Col>
        </Row>
        <div className="d-flex flex-column flex-sm-row justify-content-between pt-4 my-4 border-top">
          <p>© 2024 Little Lemon. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="me-3">
              <a className="link-secondary" >
                <TwitterLogo size={24} />
              </a>
            </li>
            <li className="me-3">
              <a className="link-secondary">
                <InstagramLogo size={24} />
              </a>
            </li>
            <li>
              <a className="link-secondary">
                <FacebookLogo size={24} />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;