"use client"
import React, { useMemo, useState } from "react";
import { createEditor, Descendant, BaseEditor } from "slate";
import { Slate, Editable, withReact, ReactEditor } from "slate-react";
import { withHistory } from "slate-history";

// 初期値
const initialValue: Descendant[] = [
  {
    type: 'Paragraph',
    children: [{ text: "string" }],
  },
]
const SlateApp = () => {
  // エディタのインスタンスを作成
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

  // エディタの内容を管理する状態
  const [value, setValue] = useState<Descendant[]>(initialValue);

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
