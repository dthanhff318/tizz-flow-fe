import { Outlet, useNavigate } from "react-router-dom";
import { FunctionComponent } from "../../common/types";
import { Button } from "@/components/ui/button";
import EPath from "@/routes/path";
import Sidebar from "@/components/layouts/components/sidebar";
import NewFlow from "@/components/dialogs/dialog-new-flow";

const Layout = (): FunctionComponent => {
	const navigate = useNavigate();
	const handleLinkToLoginPage = () => {
		navigate(EPath.Login);
	};
	return (
		<>
			<div className="top-0 right-0 left-0 w-[100vw] h-[74px] flex items-center justify-between px-4 fixed bg-background-bold">
				<div className="flex-1 max-w-[20%]"></div>
				<div className="shrink-0">
					<h2 className="font-semibold  justify-self-center ">Home</h2>
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
			<NewFlow />
			{/* <DrawerFillInfo /> */}
		</>
	);
};

export default Layout;
