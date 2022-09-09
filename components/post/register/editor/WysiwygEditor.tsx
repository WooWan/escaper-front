import dynamic from "next/dynamic";
import * as React from "react";
import { Editor as EditorType, EditorProps } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import { TuiEditorWithForwardedProps } from "./TuiEditorWrapper";
import { useCallback, useRef } from "react";

interface EditorPropsWithHandlers extends EditorProps {
  onChange?(value: string): void;
}

const Editor = dynamic<TuiEditorWithForwardedProps>(
  () => import("./TuiEditorWrapper"),
  { ssr: false }
);
const EditorWithForwardedRef = React.forwardRef<
  EditorType | undefined,
  EditorPropsWithHandlers
>((props, ref) => (
  <Editor {...props} forwardedRef={ref as React.MutableRefObject<EditorType>} />
));
EditorWithForwardedRef.displayName = "EditorWithForwardedRef";

interface IWysiwygEditor extends EditorProps {
  onChange(value: string): void;
  valueType?: "markdown" | "html";
  content?: string;
}

function WysiwygEditor(props: IWysiwygEditor) {
  const { height, initialEditType, useCommandShortcut, onChange, content } =
    props;
  const editorRef = useRef<EditorType>();
  const placeHolder = "내용을 입력해주세요.";
  const handleChange = useCallback(() => {
    if (!editorRef.current) {
      return;
    }
    const instance = editorRef.current.getInstance();
    onChange(instance.getMarkdown());
  }, [editorRef, onChange]);

  return (
    <EditorWithForwardedRef
      placeholder={placeHolder}
      previewStyle="vertical"
      height={height || "600px"}
      initialValue={content ?? " "}
      initialEditType={"wysiwyg" || initialEditType}
      useCommandShortcut={useCommandShortcut || true}
      ref={editorRef}
      onChange={handleChange}
    />
  );
}

export default WysiwygEditor;
