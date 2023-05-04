import React from 'react'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin'
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary'
// import TreeViewPlugin from "./plugins/TreeViewPlugin";
// import ToolbarPlugin from "./plugins/ToolbarPlugin";
import { HeadingNode, QuoteNode } from '@lexical/rich-text'
import { TableCellNode, TableNode, TableRowNode } from '@lexical/table'
import { ListItemNode, ListNode } from '@lexical/list'
import { CodeHighlightNode, CodeNode } from '@lexical/code'
import { AutoLinkNode, LinkNode } from '@lexical/link'
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin'
import { ListPlugin } from '@lexical/react/LexicalListPlugin'
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin'
import { TRANSFORMERS } from '@lexical/markdown'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import { $getRoot, $getSelection, EditorState } from 'lexical'
import styles from './PostNew.module.css'
import ToolbarPlugin from '@/src/components/post/register/plugins/Toolbar'
import { exampleTheme } from '@/src/components/post/register/examplePlugin'
// import { AutoLinkPlugin } from '@lexical/react/LexicalAutoLinkPlugin'

function Placeholder() {
  return <div className="editor-placeholder">Enter some rich text...</div>
}

const PostNew = () => {
  function onError(error: Error) {
    console.error(error)
  }

  const initialConfig = {
    namespace: 'MyEditor',
    theme: exampleTheme,
    // Handling of errors during update
    onError(error: Error) {
      throw error
    },
    // Any custom nodes go here
    nodes: [
      HeadingNode,
      ListNode,
      ListItemNode,
      QuoteNode,
      CodeNode,
      CodeHighlightNode,
      TableNode,
      TableCellNode,
      TableRowNode,
      AutoLinkNode,
      LinkNode,
    ],
  }
  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className="editor-container">
        <ToolbarPlugin />
        <div className="editor-inner">
          <RichTextPlugin
            contentEditable={<ContentEditable className="editor-input" />}
            placeholder={<Placeholder />}
            ErrorBoundary={LexicalErrorBoundary}
          />
          <HistoryPlugin />
          {/* <TreeViewPlugin /> */}
          <AutoFocusPlugin />
          {/* <CodeHighlightPlugin /> */}
          <ListPlugin />
          <LinkPlugin />
          {/* <AutoLinkPlugin /> */}
          {/* <ListMaxIndentLevelPlugin maxDepth={7} /> */}
          <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
        </div>
      </div>
    </LexicalComposer>
  )
}

export default PostNew
