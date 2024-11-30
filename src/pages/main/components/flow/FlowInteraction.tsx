import { Heart, MessageCircle, RefreshCcw, Send } from "lucide-react";

const config = [
	{
		icon: Heart,
		value: 14,
	},
	{
		icon: MessageCircle,
		value: 14,
	},
	{
		icon: RefreshCcw,
		value: 14,
	},
	{
		icon: Send,
		value: 14,
	},
];
const FlowInteraction = () => {
	return (
		<div className="flex items-center gap-6">
			{config.map((e, i) => (
				<div className="flex gap-1 items-center">
					{<e.icon className="size-[20px]" />}
					<span className="text-[13px]">{e.value}</span>
				</div>
			))}
		</div>
	);
};
export default FlowInteraction;
