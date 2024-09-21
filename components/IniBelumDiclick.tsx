'use client';
import React, { useEffect, useState } from 'react';

export default function IniBelumDiclick() {
	const [rahasia, setRahasia] = useState<React.ReactNode>(null);
	useEffect(() => {
		getRahasia().then((rahasia) => {
			setRahasia(rahasia);
		});
	}, []);
	async function getRahasia() {
		return await 'ini rahasia';
	}
	return rahasia ? <h1>{rahasia}</h1> : <></>;
}
