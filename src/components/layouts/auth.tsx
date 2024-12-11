import { Outlet, useNavigate } from "react-router-dom";
import { FunctionComponent } from "../../common/types";
import { Button } from "@/components/ui/button";
import EPath from "@/routes/path";
import Sidebar from "@/components/layouts/components/sidebar";
import flowStore from "@/store/flowStore";
import { CircleArrowLeft } from "lucide-react";

const Layout = (): FunctionComponent => {
	const navigate = useNavigate();
	const { flow, setFlow } = flowStore();
	const handleLinkToLoginPage = () => {
		navigate(EPath.Login);
	};

	const handleBack = () => {
		setFlow(null);
	};

	const getHeaderContent = () => {
		if (flow) {
			return "Flow";
		} else {
			return "Home";
		}
	};
	return (
		<>
			<div className="top-0 right-0 left-0 w-[100vw] h-[74px] flex items-center justify-between px-4 fixed bg-background-bold">
				<div className="flex-1 max-w-[20%]"></div>
				<div className="shrink-0 relative w-full md:w-[50%] md:max-w-[700px]">
					{flow && (
						<div
							onClick={handleBack}
							className="absolute left-0 cursor-pointer text-text-color hover:text-primary transition-all"
						>
							<CircleArrowLeft />
						</div>
					)}
					<h2 className="font-semibold justify-self-center ">
						{getHeaderContent()}
					</h2>
				</div>
				<div className="flex-1 max-w-[20%] text-right">
					<Button
						className="font-semibold mr-12"
						onClick={handleLinkToLoginPage}
					>
						Login
					</Button>
				</div>
			</div>
			<Sidebar />
			<div className="mt-[74px] h-[calc(100vh-74px)] overflow-y-scroll">
				<Outlet />
			</div>
		</>
	);
};

export default Layout;
