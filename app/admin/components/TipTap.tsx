import { forwardRef, useImperativeHandle } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Toolbar from "./Toolbar";

const TipTap = forwardRef<TipTapHandle, TipTapPropsType>(
  ({ description, onChange }, ref) => {
    const editor = useEditor({
      extensions: [
        StarterKit.configure(),
        Placeholder.configure({
          placeholder: "Write your post content here...",
          showOnlyWhenEditable: true,
          emptyEditorClass: "is-empty",
        }),
      ],
      content: description,
      editorProps: {
        attributes: {
          class:
            "rounded-md outline outline-background px-3 py-1.5 text-white h-[140px] focus-visible:ring-ring/50 focus-visible:ring-[5px] focus:border-transparent",
        },
      },
      onUpdate: ({ editor }) => {
        onChange(editor.getHTML());
      },
    });

    useImperativeHandle(ref, () => ({
      clear: () => {
        editor?.commands.clearContent();
      },
    }));

    return (
      <div>
        <Toolbar editor={editor} />
        <EditorContent editor={editor} />
      </div>
    );
  }
);

type TipTapPropsType = {
  description: string;
  onChange: (text: string) => void;
};

export type TipTapHandle = {
  clear: () => void;
};

TipTap.displayName = "TipTap";

export default TipTap;
