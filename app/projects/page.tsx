import IniBelumDiclick from '@/components/IniBelumDiclick';
import InteractableComponent from '@/components/InteractableComponent';
import { StringtoInt } from '@/utils/StringUtils';

export default function Projects() {
	const h1s = [<h1>Ini di<a href="/">click</a></h1> , <IniBelumDiclick/>]

	return (
		<>
			<h1>Hello {parseInt("hai")+2}</h1>
			<InteractableComponent h1s={h1s} />
		</>
	);
}
