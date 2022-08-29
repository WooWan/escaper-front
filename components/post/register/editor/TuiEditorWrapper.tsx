import React from "react";
import { Editor, EditorProps } from "@toast-ui/react-editor";

export interface TuiEditorWithForwardedProps extends EditorProps {
  forwardedRef?: React.MutableRefObject<Editor>;
}

const ToastEditor = (props: TuiEditorWithForwardedProps) => (
  <Editor {...props} ref={props.forwardedRef} hideModeSwitch={true} />
);
export default ToastEditor;
