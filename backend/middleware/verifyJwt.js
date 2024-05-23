const jwt = require('jsonwebtoken');

exports.verifyJwt = async (req, res, next) => {
	const authHeader = req.headers?.authorization || req.headers?.Authorization;

	if (!authHeader?.startsWith('Bearer ')) {
		return res.status(401).json({
			message: 'Sorry you are not Authorized'
		});
	}

	try {
		const token = authHeader.split(' ').at(1);

		const decodedUser = jwt.verify(token, process.env.ACCESS_TOKEN);

		req.userId = decodedUser.userId;

		next();
	} catch (err) {
		res.status(401).json({
			message: 'Cannot Verify Authentication',
			error: err.message
		});
	}
};
