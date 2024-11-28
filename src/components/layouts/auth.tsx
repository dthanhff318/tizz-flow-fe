import { Outlet } from "react-router-dom";
import { FunctionComponent } from "../../common/types";
import { Button } from "@/components/ui/button";
import DrawerFillInfo from "@/components/drawers/drawer-fill-info";

const Layout = (): FunctionComponent => {
	return (
		<>
			<div className="sticky t-0 h-[74px] flex items-center justify-end px-4">
				<Button className="font-semibold mr-12">Login</Button>
			</div>
			<Outlet />
			{/* <DrawerFillInfo /> */}
		</>
	);
};

export default Layout;
