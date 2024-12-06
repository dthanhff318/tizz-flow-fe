import AvatarComp from "@/components/avatars/avatar";
import FlowInteraction from "@/pages/main/components/flow/FlowInteraction";
import { Ellipsis } from "lucide-react";

const paddingLeft = 36 + 16;
const Flow = () => {
	return (
		<div className="flex flex-col px-6 py-4 border-solid border-[1px] border-b-border gap-5 first:rounded-tl-3xl first:rounded-tr-3xl">
			{/* Header */}
			<div className="flex items-start gap-4">
				<AvatarComp
					src="https://instagram.fhan15-1.fna.fbcdn.net/v/t51.2885-19/449604958_8134968226527113_5663307487512757477_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fhan15-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=-w2rPKZR_tgQ7kNvgGEwWmx&_nc_gid=d6412b611d3b42639f198c31947c01cc&edm=APs17CUBAAAA&ccb=7-5&oh=00_AYBynB3sZ3IoIL-uOyXjIwffPA0vwzrp530NopCcFmiTWQ&oe=6750861D&_nc_sid=10d13b"
					alt="Avt"
					fallBack="TF"
					className="size-[36px]"
				/>
				<div className="space-y-2">
					<div className="flex items-center justify-between">
						<div className="flex gap-2 items-center">
							<span className="text-text-color font-semibold">tizz_onmic</span>
							<span className="text-text-primary text-sm">21 hours ago</span>
						</div>
						<div className="">
							<Ellipsis className="cursor-pointer" />
						</div>
					</div>
					<div>
						Descriptino of tix
						<br />
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
						velit rerum beatae harum molestiae perspiciatis minima ea, deleniti
						qui consequuntur nemo est commodi veniam cumque minus? Alias non
						magnam officia?
					</div>
				</div>
			</div>
			{/* Image & Video */}
			<div
				className={`w-full max-h-[435px] overflow-hidden pl-[${paddingLeft}px]`}
			>
				<div className="h-full overflow-x-auto flex gap-2 snap-mandatory cursor-grab scroll-ps-6 snap-x snap-start">
					<img
						src="https://i.pinimg.com/236x/18/c4/4c/18c44cb4445b15e3fb30531ab467df2d.jpg"
						alt=""
						className="object-cover max-w-[260px] max-h-[435px] w-full rounded-md"
					/>
				</div>
			</div>
			{/* Reaction */}
			<div className={`pl-[${paddingLeft}px]`}>
				<FlowInteraction />
			</div>
		</div>
	);
};

export default Flow;
