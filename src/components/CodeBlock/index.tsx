import SyntaxHighlighter from "react-syntax-highlighter"
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs"
import React from "react"
import { WithClassNames } from "@/types"

export interface CodeBlockProps extends WithClassNames {
    codeString: string
}
export const CodeBlock = ({ codeString }: CodeBlockProps) => {
    return (
        <SyntaxHighlighter language="typescript" style={docco}>
            {codeString}
        </SyntaxHighlighter>
    )
}