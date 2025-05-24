import { type Editor } from "@tiptap/react";
import {
  Bold,
  Strikethrough,
  Italic,
  List,
  ListOrdered,
  Heading2,
} from "lucide-react";
import { Toggle } from "@/components/ui/toggle";

const Toolbar = ({ editor }: { editor: Editor | null }) => {
  return editor ? (
    <div className="container-center w-full gap-1 mt-4 mb-2">
      <Toggle
        className="px-3 rounded-sm outline cursor-pointer"
        size="sm"
        pressed={editor.isActive("heading")}
        onPressedChange={() => {
          editor.chain().focus().toggleHeading({ level: 2 }).run();
        }}
      >
        <Heading2 className="text-gray-400" />
      </Toggle>
      <Toggle
        className="px-3 rounded-sm outline cursor-pointer"
        size="sm"
        pressed={editor.isActive("bold")}
        onPressedChange={() => {
          editor.chain().focus().toggleBold().run();
        }}
      >
        <Bold className="text-gray-400" />
      </Toggle>
      <Toggle
        className="px-3 rounded-sm outline cursor-pointer"
        size="sm"
        pressed={editor.isActive("italic")}
        onPressedChange={() => {
          editor.chain().focus().toggleItalic().run();
        }}
      >
        <Italic className="text-gray-400" />
      </Toggle>
      <Toggle
        className="px-3 rounded-sm outline cursor-pointer"
        size="sm"
        pressed={editor.isActive("strike")}
        onPressedChange={() => {
          editor.chain().focus().toggleStrike().run();
        }}
      >
        <Strikethrough className="text-gray-400" />
      </Toggle>
      <Toggle
        className="px-3 rounded-sm outline cursor-pointer"
        size="sm"
        pressed={editor.isActive("bulletList")}
        onPressedChange={() => {
          editor.chain().focus().toggleBulletList().run();
        }}
      >
        <List className="text-gray-400" />
      </Toggle>
      <Toggle
        className="px-3 rounded-sm outline cursor-pointer"
        size="sm"
        pressed={editor.isActive("orderedList")}
        onPressedChange={() => {
          editor.chain().focus().toggleOrderedList().run();
        }}
      >
        <ListOrdered className="text-gray-400" />
      </Toggle>
    </div>
  ) : (
    <></>
  );
};
export default Toolbar;
