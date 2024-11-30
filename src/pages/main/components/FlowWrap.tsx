import Flow from "@/pages/main/components/Flow";

const FlowWrap = () => {
	return (
		<div className="bg-background-light rounded-xl h-[100vh] w-full md:w-[50%] md:max-w-[700px] border-solid border-[1px] border-border overflow-hidden">
			{Array.from({ length: 4 }, (_, i) => (
				<Flow />
			))}
		</div>
	);
};

export default FlowWrap;
