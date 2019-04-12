import React, { Component } from 'react';
import App, { Container } from 'next/app';
import Layout from '../components/Layout';
import uuid from 'uuid/v4';
import firestore from '../../firebase';
import FirebaseContext from '../components/Context';

export default class MyApp extends App {

  componentDidMount() {
    const session = sessionStorage.getItem('method');

    if (!session) {
      sessionStorage.setItem('method', uuid())
    }
  }

  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <FirebaseContext.Provider value={firestore}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </FirebaseContext.Provider>
      </Container>
    )
  }
}