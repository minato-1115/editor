import { Editor } from "slate" 

//数式エディタを実装するために、ノードタイプの処理

const withMathNodes = (editor:Editor) =>{
    const {isInline} = editor
    editor.isInline = (element) =>{
        return element.type == "math"? true :isInline(element)
    }
}