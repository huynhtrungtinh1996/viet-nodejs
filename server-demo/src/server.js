const express = require('express');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(morgan('combined'));
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello Mat Loz');
});

app.get('/viet', (req, res) => {
  const query = req.query;
  if(query.question == "biết chỗ nào bán bao cao su gai không"){
    return res.send({
      "question": 'Mày hỏi ở đây là đúng người luông rồi đó. Mà lên xe tao chở đi tao lấy giá rẻ cho'
    });
  }
  return res.send('Dm trễ giờ đi làm rồi.');
});

console.log('Running server.js...');
console.log('Worker process started.');
app.listen(PORT, '0.0.0.0', function () {
    console.log('Listening on *' + PORT);
});