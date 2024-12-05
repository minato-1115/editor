//slate全体のプロパティ管理用のファイル（未実装）

import { BaseEditor, Descendant } from "slate";
import { ReactEditor } from "slate-react";
import { text } from "stream/consumers";

export type InitialValue = Descendant[]

export  type MathNode= {
    type : "Math",
    children:[{text:"string"}]
}

export  type ParagraphNode= {
    type : "Paragraph",
    children:[{text:"string"}]
}

export type CustomEditor = BaseEditor & ReactEditor;

declare module "slate"{
    interface CustomTypes {
        Editor:CustomEditor;
        Element: MathNode |ParagraphNode;
        Text:{text:string}
    }
}

export const  initialValue:InitialValue = [
    {
      type: 'paragraph',
      children: [{ text: '' }],
    },
  ]