import React, { Component } from 'react';
import App, { Container } from 'next/app';
import Layout from '../components/Layout';
import uuid from 'uuid/v4';

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
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    )
  }
}