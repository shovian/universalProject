import IniBelumDiclick from '@/components/IniBelumDiclick';
import InteractableComponent from '@/components/InteractableComponent';

export default function Projects() {
	const h1s = [<h1>Ini di<a href="/">click</a></h1> , <IniBelumDiclick/>]
	const pages = []
	return (
		<>
			<h1>Hello</h1>
			<InteractableComponent h1s={h1s} />
		</>
	);
}
