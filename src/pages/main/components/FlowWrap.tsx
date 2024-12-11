import Flow from "@/pages/main/components/flow/Flow";
import flowStore from "@/store/flowStore";

const FlowWrap = () => {
	const { flow } = flowStore();
	return (
		<div className="bg-background-light rounded-3xl w-full md:w-[50%] md:max-w-[700px] border-solid border-[1px] border-border overflow-y-auto">
			{flow ? <Flow /> : Array.from({ length: 4 }, (_, i) => <Flow />)}
		</div>
	);
};

export default FlowWrap;
