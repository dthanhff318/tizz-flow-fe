import { Outlet, useNavigate } from "react-router-dom";
import { FunctionComponent } from "../../common/types";
import { Button } from "@/components/ui/button";
import EPath from "@/routes/path";
import Sidebar from "@/components/layouts/components/sidebar";

const Layout = (): FunctionComponent => {
	const navigate = useNavigate();
	const handleLinkToLoginPage = () => {
		navigate(EPath.Login);
	};
	return (
		<>
			<div className="top-0 right-0 left-0 h-[74px] flex items-center justify-end px-4 fixed">
				<Button className="font-semibold mr-12" onClick={handleLinkToLoginPage}>
					Login
				</Button>
			</div>
			<Sidebar />
			<Outlet />
			{/* <DrawerFillInfo /> */}
		</>
	);
};

export default Layout;
