import { ESection } from "@/helpers/enum";
import { TFlow } from "@/types/flow";
import { create } from "zustand";

type TFlowStore = {
	flow: TFlow | null;
	section: ESection;
	setFlow: (flow: TFlow | null) => void;
	setSection: (section: ESection) => void;
};
const flowStore = create<TFlowStore>((set) => ({
	flow: null,
	section: ESection.Home,
	setFlow: (flow: TFlow | null) => {
		return set({ flow });
	},
	setSection: (section: ESection) => {
		return set({ section });
	},
}));

export default flowStore;
