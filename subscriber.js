const amqp = require("amqplib/callback_api");

const amqpURL =
  "amqps://eevqwocg:ZQaeLgzUQ5IIGNDDuQd9EpWQ1FGuhFdg@clam.rmq.cloudamqp.com/eevqwocg";
amqp.connect(amqpURL, (err, conn) => {
  conn.createChannel((err, ch) => {
    const q = "CloudAMQP";
    ch.assertQueue(q, { durable: false });
    console.log("<- Wating for messages in %s. To exit press CTRL+C",q);
    ch.consume(q, (msg)=>{
      console.log("<-Received %s", msg.content.toString());
    },{noAck: true});
  });
});
