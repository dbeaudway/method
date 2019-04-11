const path = require('path');
const functions = require('firebase-functions');
const { PubSub } = require('@google-cloud/pubsub');
const Buffer = require('safe-buffer').Buffer;
const next = require('next');

const pubsub = new PubSub({
  projectId: 'method-236922'
});

var dev = process.env.NODE_ENV !== 'production'
var app = next({
  dev,
  conf: { distDir: `${path.relative(process.cwd(), __dirname)}/next` }
})
var handle = app.getRequestHandler()

exports.next = functions.https.onRequest((req, res) => {
  console.log('File: ' + req.originalUrl) // log the page.js file that is being requested
  return app.prepare().then(() => handle(req, res))
})

exports.healthcheck = functions.https.onRequest((req, res) => {
    return res.status(200).json({ message: "Healthy" })
});

exports.helloPubSub = functions.pubsub.topic('typing-submissions').onPublish((message) => {
  const data = Buffer.from(message.data, 'base64');
  
  return data;
});

exports.publish = functions.https.onRequest((req, res) => {
  console.log('Publish function fired');
  const data = JSON.parse(req.body)
  
  if (!data.topic) {
    console.log('No topic', data);
    res.status(500).send(new Error('Topic not provided. Make sure you have a "topic" property in your request'));
    return;
  } else if (!data.message) {
    console.log('No message', data);
    res.status(500).send(new Error('Message not provided. Make sure you have a "message" property in your request'));
    return;
  }
  const { topic: _topic, message: _message } = data;
  
  // References an existing topic
  const topic = pubsub.topic(_topic);

  const message = Buffer.from(JSON.stringify({
    data: { _message }
  }));

  // Publishes a message
  return topic.publish(message)
    .then(() => {
      console.log('Message published')
      return res.status(200).send('Message published.')
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send(err);
      return Promise.reject(err);
    });
});