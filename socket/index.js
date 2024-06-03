const io = require('socket.io')(8900, {
	cors: {
		origin: '*'
	}
});

let users = [];

const addUser = (userId, socketId) => {
	!users.some((user) => user.userId === userId) && users.push({ userId, socketId });
};

const removeUser = (socketId) => {
	users = users.filter((user) => user.socketId != socketId);
};

const getUser = (userId) => {
	return users.find((user) => user.userId == userId);
};

io.on('connection', (socket) => {
	console.log('A new users has connected');

	socket.on('addUser', (userId) => {
		addUser(userId, socket.id);

		io.emit('onlineUser', users);
	});

	socket.on('typing', ({ receiverId, senderId }) => {
		const user = getUser(receiverId);

		user?.socketId && io.to(user.socketId).emit('typingUser', senderId);
	});

	socket.on('stopTyping', (receiverId) => {
		const user = getUser(receiverId);

		user?.socketId && io.to(user.socketId).emit('endTyping', receiverId);
	});

	socket.on('sendMessage', (data) => {
		const user = getUser(data.receiverId);

		user?.socketId && io.to(user?.socketId).emit('getMessage', data);
	});

	/*When user close tab or logout*/
	socket.on('logout', (userId) => {
		const user = getUser(userId);

		removeUser(user.socketId);

		io.emit('onlineUser', users);
	});

	socket.on('disconnect', () => {
		removeUser(socket.id);

		io.emit('onlineUser', users);
	});
});
