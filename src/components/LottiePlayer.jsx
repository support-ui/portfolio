// src/components/LottiePlayer.jsx
import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from '../assets/lottie/avatar.json'; // Ajusta la ruta según donde lo tengas

export default function LottiePlayer() {
	const container = useRef(null);

	useEffect(() => {
		lottie.loadAnimation({
			container: container.current,
			renderer: 'svg',
			loop: true,
			autoplay: true,
			animationData: animationData,
		});
	}, []);

	return <div className="w-96 h-96" ref={container}></div>;
}
