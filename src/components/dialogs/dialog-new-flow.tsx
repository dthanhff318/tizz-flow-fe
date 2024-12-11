import AvatarComp from "@/components/avatars/avatar";
import TextEditor from "@/components/text-editor/text-editor";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogTrigger,
} from "@/components/ui/dialog";
import { ReactNode, useState } from "react";
import { Image, CircleX } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

type TProps = {
	children?: ReactNode;
};
const NewFlow = ({ children }: TProps) => {
	const [content, setContent] = useState("");
	const [files, setFiles] = useState<File[] | null>(null);

	const previewImgs = Array.from(files ?? [])?.map((e) =>
		URL.createObjectURL(e)
	);

	const onUploadFile = (e: any) => {
		const files = e.target.files;
		setFiles(files);
	};

	const onRemoveFile = () => {
		setFiles(null);
	};

	const onChangeContent = (e: string) => {
		setContent(e);
	};
	const handleCreateFlow = () => {};
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
								<TextEditor onChange={onChangeContent} />
							</div>
						</div>
					</div>
					<div className="w-fit">
						<Label className="w-fit" htmlFor="flow-picture">
							<Image className="text-text-color cursor-pointer hover:text-primary" />
						</Label>
						<Input
							className="hidden"
							id="flow-picture"
							type="file"
							onInput={onUploadFile}
						/>
					</div>
					<div>
						{previewImgs.map((url) => {
							return <ImageUpload url={url} onRemoveFile={onRemoveFile} />;
						})}
					</div>
				</div>
				<DialogFooter className="!w-full flex !justify-between items-center">
					<span className="text-text-primary text-sm">
						Anyone can reply and quote
					</span>
					<Button
						variant="outline"
						disabled={!content}
						onClick={handleCreateFlow}
					>
						<p className="text-text-color">Post</p>
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default NewFlow;

const ImageUpload = ({
	url,
	onRemoveFile,
}: {
	url: string;
	onRemoveFile: () => void;
}) => {
	return (
		<div className="w-[320px] max-h-[350px] relative group ">
			<img src={url} alt="" className="w-full object-cover rounded-lg" />
			<div
				className="absolute -top-[8px] -right-[8px] cursor-pointer opacity-0 group-hover:opacity-100 transition-all"
				onClick={onRemoveFile}
			>
				<CircleX />
			</div>
		</div>
	);
};
