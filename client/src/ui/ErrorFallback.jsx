const ErrorFallback = ({ error: { message } }) => {
	return (
		<div>
			<h3>Something Went Wrong</h3>
			<p>{message}</p>
		</div>
	);
};

export default ErrorFallback;
