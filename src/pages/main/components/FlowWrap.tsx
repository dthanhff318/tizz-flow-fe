import Flow from "@/pages/main/components/flow/Flow";

const FlowWrap = () => {
	return (
		<div className="bg-background-light rounded-3xl w-full md:w-[50%] md:max-w-[700px] border-solid border-[1px] border-border overflow-y-auto">
			{Array.from({ length: 4 }, (_, i) => (
				<Flow />
			))}
		</div>
	);
};

export default FlowWrap;
