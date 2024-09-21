'use client';
import { useState } from 'react';
export default function InteractableComponent(props:{h1s:any[]}) {
	const [isActive, setIsActive] = useState(false);
	function handleClick() {
		setIsActive(!isActive);
	}
	return (
		<>
			<button onClick={handleClick}>Coba diklik</button>
			{!isActive ? props.h1s[0]:props.h1s[1]}
		</>
	);
}
