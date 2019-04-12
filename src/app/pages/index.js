import * as React from 'react';
import FirebaseContext from '../components/Context';
import QuoteGenerator from '../components/QuoteGenerator';

export default () => (
  <FirebaseContext.Consumer>
    { firestore => (
      <QuoteGenerator firestore={firestore} />
    ) }
  </FirebaseContext.Consumer>
)