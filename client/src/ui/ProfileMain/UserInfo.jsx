import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

const UserInfo = () => {
	return (
		<Wrapper>
			<h3>User Information</h3>

			<Wrapper>
				<p>
					<b>City:</b> New York
				</p>

				<p>
					<b>From:</b> New York
				</p>

				<p>
					<b>Relationship:</b> Single
				</p>
			</Wrapper>
		</Wrapper>
	);
};

export default UserInfo;
