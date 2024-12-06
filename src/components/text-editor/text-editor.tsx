import {
	BlockNoteSchema,
	defaultInlineContentSpecs,
	filterSuggestionItems,
} from "@blocknote/core";
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import {
	createReactInlineContentSpec,
	DefaultReactSuggestionItem,
	SuggestionMenuController,
	useCreateBlockNote,
} from "@blocknote/react";
import "./overrideBlocknote.css";

const Mention = createReactInlineContentSpec(
	{
		type: "mention",
		propSchema: {
			user: {
				default: "Unknown",
			},
		},
		content: "none",
	},
	{
		render: (props) => (
			<span style={{ backgroundColor: "#8400ff33" }}>
				@{props.inlineContent.props.user}
			</span>
		),
	}
);

// Our schema with inline content specs, which contain the configs and
// implementations for inline content  that we want our editor to use.
const schema = BlockNoteSchema.create({
	inlineContentSpecs: {
		// Adds all default inline content.
		...defaultInlineContentSpecs,
		// Adds the mention tag.
		mention: Mention,
	},
});

// Function which gets all users for the mentions menu.
const getMentionMenuItems = (
	editor: typeof schema.BlockNoteEditor
): DefaultReactSuggestionItem[] => {
	const users = ["Steve", "Bob", "Joe", "Mike"];

	return users.map((user) => ({
		title: user,
		onItemClick: () => {
			editor.insertInlineContent([
				{
					type: "mention",
					props: {
						user,
					},
				},
				" ", // add a space after the mention
			]);
		},
	}));
};

export function App() {
	const editor = useCreateBlockNote({
		schema,
	});

	return (
		<BlockNoteView
			editor={editor}
			sideMenu={false}
			formattingToolbar={false}
			linkToolbar={false}
			filePanel={false}
			tableHandles={false}
			// slashMenu={false}
			className="block-note-container-custom"
		>
			<SuggestionMenuController
				minQueryLength={2}
				triggerCharacter={"@"}
				getItems={async (query) =>
					filterSuggestionItems(getMentionMenuItems(editor), query)
				}
			/>
		</BlockNoteView>
	);
}

export default App;
