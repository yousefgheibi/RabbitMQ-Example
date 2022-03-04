const amqp = require("amqplib/callback_api");

const amqpURL =
  "amqps://eevqwocg:ZQaeLgzUQ5IIGNDDuQd9EpWQ1FGuhFdg@clam.rmq.cloudamqp.com/eevqwocg";
amqp.connect(amqpURL, (err, conn) => {
  conn.createChannel((err, ch) => {
    const q = "CloudAMQP";
    const msg = "Hello Viewers!";
    ch.assertQueue(q, { durable: false });
    setInterval(() => {
      ch.sendToQueue(q, Buffer.from(msg));
      console.log(`Message : ${msg}`);
    }, 2500);
  });
});
