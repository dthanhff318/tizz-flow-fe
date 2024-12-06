import NewFlow from "@/components/dialogs/dialog-new-flow";
import { House, Plus, Heart, UserRound, Search } from "lucide-react";

const config = [
	{
		icon: House,
	},
	{
		icon: Search,
	},
	{
		icon: Plus,
		hasBackground: true,
		dialogTrigger: NewFlow,
	},
	{
		icon: Heart,
	},
	{
		icon: UserRound,
	},
];

const Sidebar = () => {
	return (
		<>
			<div className="fixed t-0 l-0 h-[100vh] w-[60px] flex flex-col gap-4 pl-6 items-center justify-center z-20 -mt-[74px]">
				{config.map((e, i) => {
					const itemRender = (
						<div className="group cursor-pointer ">
							<div
								className={`py-3 px-4 ${e.hasBackground && "bg-background-light"} group-hover:bg-background-light rounded-xl transition-all`}
							>
								<e.icon
									className={`text-text-primary ${e.hasBackground && "group-hover:text-white"}`}
								/>
							</div>
						</div>
					);
					return e.dialogTrigger ? (
						<e.dialogTrigger>{itemRender}</e.dialogTrigger>
					) : (
						itemRender
					);
				})}
			</div>
			<NewFlow />
		</>
	);
};

export default Sidebar;
