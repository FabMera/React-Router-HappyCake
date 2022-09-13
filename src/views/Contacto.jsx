import React from "react";
import { Form, Button, Container } from "react-bootstrap";

const Contacto = () => {
  return (
    <Container className="justify-content-center text-center">
    <h1 className="text-center m-4">Cuentanos, ¿en que te podemos ayudar?</h1>
      <Form.Group className="mb-3">
        <Form.Label>Correo :</Form.Label>
        <Form.Control
          style={{ MaxWidth: "400px" }}
          type="email"
          placeholder="name@example.com"
        />
      </Form.Group>

      <Form.Group className="mb-3 ">
        <Form.Label>Descripcion :</Form.Label>
        <Form.Control
          as="textarea"
          type="text"
          style={{ MaxWidth: "400px", height: "100px" }}
        />
      </Form.Group>

      <Button  variant="danger" type="submit">
        Enviar
      </Button>
    </Container>
  );
};

export default Contacto;
