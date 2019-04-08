import React from 'react';
import NextHead from 'next/head'
import Nav from './Nav';
import '../styles/Layout.less';

export default function Layout({ children }) {
    return (
        <>
            <NextHead>
                <meta charSet="UTF-8" />
                <title>Method</title>
                <meta
                    name="description"
                    content=""
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/static/favicon.ico" />
                <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"></link>
                <meta
                    property="og:description"
                    content=""
                />
            </NextHead>
            <main className="method-Layout-wrapper">
                <Nav />
                <div className="method-Layout-content">
                    { children }
                </div>
            </main>
        </>
    )
};