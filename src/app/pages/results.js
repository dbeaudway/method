import React, { useEffect } from 'react';
import FirebaseContext from '../components/Context';
import List from '../components/List';

export default function Results() {

  useEffect(() => {
    console.log('Results page mounted');
  })

  return (
    <FirebaseContext.Consumer>
      { firestore => (
          <List firestore={ firestore } />
        )
      }
    </FirebaseContext.Consumer>
  )
}

  