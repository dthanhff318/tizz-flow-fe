import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	Drawer,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const DrawerFillInfo = () => {
	return (
		<Drawer modal open={true}>
			<DrawerContent className="h-[600px]">
				<DrawerHeader>
					<DrawerTitle>Fill your information</DrawerTitle>
				</DrawerHeader>
				<div className="px-4 py-2 flex flex-col gap-4 pt-2">
					<div className="grid w-full max-w-sm items-center gap-1.5">
						<Label htmlFor="email">Display name:</Label>
						<Input type="text" id="displayName" placeholder="Your name..." />
					</div>
					<div className="grid w-full max-w-sm items-center gap-1.5">
						<Label htmlFor="picture">Picture</Label>
						<Input id="picture" type="file" />
					</div>

					<Avatar className="size-[100px]">
						<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
						<AvatarFallback>TF</AvatarFallback>
					</Avatar>
				</div>
				<DrawerFooter>
					<Button>Submit</Button>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
};

export default DrawerFillInfo;
