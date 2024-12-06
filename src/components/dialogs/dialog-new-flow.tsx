import AvatarComp from "@/components/avatars/avatar";
import TextEditor from "@/components/text-editor/text-editor";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogTrigger,
} from "@/components/ui/dialog";
import { ReactNode } from "react";

type TProps = {
	children?: ReactNode;
};
const NewFlow = ({ children }: TProps) => {
	return (
		<Dialog>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogContent className="sm:max-w-[560px]" hiddenCloseBtn>
				<div className="grid gap-4 py-2">
					<div className="flex items-start gap-4">
						<AvatarComp
							src="https://instagram.fhan15-1.fna.fbcdn.net/v/t51.2885-19/449604958_8134968226527113_5663307487512757477_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fhan15-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=-w2rPKZR_tgQ7kNvgGEwWmx&_nc_gid=d6412b611d3b42639f198c31947c01cc&edm=APs17CUBAAAA&ccb=7-5&oh=00_AYBynB3sZ3IoIL-uOyXjIwffPA0vwzrp530NopCcFmiTWQ&oe=6750861D&_nc_sid=10d13b"
							alt="Avt"
							fallBack="TF"
							className="size-[36px]"
						/>
						<div className="space-y-2 w-full">
							<div className="flex items-center justify-between">
								<div className="flex gap-2 items-center">
									<span className="text-text-color font-semibold">
										tizz_onmic
									</span>
								</div>
							</div>
							<div className="w-full min-h-20">
								<TextEditor />
							</div>
						</div>
					</div>
				</div>
				<DialogFooter className="!w-full flex !justify-between items-center">
					<span className="text-text-primary text-sm">
						Anyone can reply and quote
					</span>
					<Button variant="outline">
						<p className="text-text-color">Post</p>
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default NewFlow;
