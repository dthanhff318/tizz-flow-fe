import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

const DialogFillInfo = () => {
	return (
		<Dialog open={true} modal>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Fill your information</DialogTitle>
					<DialogDescription>
						This action cannot be undone. This will permanently delete your
						account and remove your data from our servers.
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
};

export default DialogFillInfo;
