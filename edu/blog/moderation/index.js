const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

app.post('/events', (req, res) => {
    const { events, data, type } = req.body;

    if (type === 'CommentCreated') {
        const status = data.content.includes("orange") ? 'rejected' : 'approved';

        axios.post("http://localhost:4005/events", {
            type: "CommentModerated",
            data: {
                id: data.id,
                postId: data.postId,
                status,
                content: data.content
            }
        }).catch((err) => {
            console.log(err.message);
          });
    }

    res.send({})
});


app.listen(4003, () => {
    console.log('Listening on port 4003');
});