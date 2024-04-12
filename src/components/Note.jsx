/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */

import { forwardRef } from "react";

const emojis = ["📌", "📝", "📍", "📌", "🗒️", "📋", "📎", "📄", "🗂️"];

const Note = forwardRef(({ content, initialPos, ...props }, ref) => {
  const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

  return (
    <div
      ref={ref}
      style={{
        position: "absolute",
        left: `${initialPos?.x}px`,
        top: `${initialPos?.y}px`,
        border: "1px solid black",
        userSelect: "none",
        padding: "10px",
        width: "200px",
        cursor: "move",
      }}
      {...props}
      className="note"
    >
      {randomEmoji} {content}
    </div>
  );
});

export default Note;
