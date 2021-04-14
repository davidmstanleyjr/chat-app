const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const GetStream = require('getstream');

const app = express();

const getstream = new GetStream.default({
	instanceLocator: 'qhae2ed9nfvg',
	key: '2wdrb29hzgknpf3ysy4shf4k6mbqxjykbuhyx4y8fssajze2myrqfvhcxuzxgaeq'
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.post('/users', (req, res) => {
	const { username } = req.body;

	getstream
		.createUser({
			name: username,
			id: username
		})
		.then(() => res.sendStatus(201))
		.catch((error) => {
			if (error.error_type === 'services/getstream/user/user_already_exists') {
				res.sendStatus(200);
			} else {
				res.status(error.statusCode).json(error);
			}
		});
});

const PORT = 3001;
app.listen(PORT, (err) => {
	if (err) {
		console.error(err);
	} else {
		console.log(`Running on port ${PORT}`);
	}
});
