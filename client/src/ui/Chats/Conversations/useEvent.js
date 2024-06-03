import { useEffect, useRef, useState } from 'react';

export const useEvent = () => {
	const [messageAreaFocus, setMessageAreaFocus] = useState(false);

	const messageRef = useRef();

	const formRef = useRef();

	useEffect(() => {
		if (!messageAreaFocus) return;

		let keysPressed = {};

		const ev = (e) => {
			keysPressed[e.key] = true;

			if (!keysPressed['Shift'] && e.key === 'Enter') {
				messageRef.current.value && formRef.current.click();
			}
		};

		document.addEventListener('keyup', (e) => {
			delete keysPressed[e.key];
		});

		document.addEventListener('keydown', ev);

		return () => {
			document.removeEventListener('keydown', ev);
		};
	}, [messageAreaFocus]);

	return { messageAreaFocus, setMessageAreaFocus, messageRef, formRef };
};

export default useEvent;
