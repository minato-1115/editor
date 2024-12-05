"use client"
import React, { useEffect, useMemo, useState } from "react";
import { createEditor, Descendant, BaseEditor } from "slate";
import { Slate, Editable, withReact, ReactEditor } from "slate-react";
import { withHistory } from "slate-history";

// 初期値
type initialValueType = 
  [
    {
      type: string,
      children: [{ text: string }],
    },
  ]

const initialValue: initialValueType = [
  {
    type: 'Paragraph',
    children: [{ text: "" }],
  },
]
const SlateApp = () => {
  // エディタのインスタンスを作成
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

  // エディタの内容を管理する状態
  const [value, setValue] = useState<Descendant[]>(initialValue);

  useEffect(()=>{
    console.log(JSON.stringify(value))
  },[value])
  return (
    <Slate editor={editor} initialValue={initialValue} onChange={(newValue) => setValue(newValue)}>
      <Editable
        placeholder="入力してください"
        style={{
          width: "30%",
          height: "30vh",
          backgroundColor: "white",
          position: "relative",
          top: 30,
          color: "black",
        }}
      />
    </Slate>
  );
};

export default SlateApp;
