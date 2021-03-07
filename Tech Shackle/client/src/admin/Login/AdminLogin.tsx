import React, { FormEvent, useCallback, useState } from 'react';
import jwt from 'jsonwebtoken';
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from '../../helpers/useForm';
import IAlert from '../Alert/IAlert';
import { Redirect } from 'react-router-dom';

export const AdminLogin = (props: any) => {
  console.log('props in login', props);

  const [formData, setFormData] = useForm({ email: '', password: '' });

  const [error, setError] = useState('');
  // const navigate = useNavi

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    console.log('form submit');

    fetch('http://localhost:8081/api/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      }),
    })
      .then(x => x.json())
      .then(response => {
        if ('error' in response) setError(response.error.message);
        else {
          console.log(response);
          if (!response.isAdmin) {
            setError('Given User is not an admin!');
            return;
          }

          jwt.verify(
            response.token,
            '',
            (err: any, decoded: any) => {
              if (err) {
                console.log(err);
                setError('Internal Server error!!.. please try again later');
              } else {
                console.log(decoded);
                localStorage.setItem('token', response.token);
                props.setLoggedIn(true);
              }
            }
          );
        }
      })
      .catch(e => {
        console.log(e);
        setError('Something went wrong, please try again later');
      });
  };
  console.log(formData);
  console.log(error);

  return (
    <>
      <h1 className='d-flex justify-content-center'>Login</h1>
      <Container>
        <Row className='justify-content-center'>
          <Col xs={10} md={5} lg={5}>
            <IAlert
              msg={error}
              showAlert={error ? true : false}
              close={() => setError('')}
            />
            <Form className='' onSubmit={handleLogin}>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter email'
                  name='email'
                  value={formData.email}
                  onChange={setFormData}
                  autoFocus
                  required
                />
              </Form.Group>

              <Form.Group controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Password'
                  name='password'
                  onChange={setFormData}
                  value={formData.password}
                  required
                />
              </Form.Group>
              <Button variant='primary' type='submit'>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
