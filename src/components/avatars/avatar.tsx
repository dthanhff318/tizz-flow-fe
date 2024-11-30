import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type TProps = {
	className?: string;
	src: string;
	alt: string;
	fallBack?: string;
};
const AvatarComp = (props: TProps) => {
	return (
		<Avatar className={props.className}>
			<AvatarImage src={props.src} alt={props.alt} />
			<AvatarFallback>{props.fallBack}</AvatarFallback>
		</Avatar>
	);
};

export default AvatarComp;
