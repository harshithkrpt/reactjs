import React, { useState, useRef } from "react";

interface Person {
  firstName?: string;
  lastName?: string;
}

interface Props {
  text?: string;
  ok?: boolean;
  i?: number;
  fn?: () => void;
  person: Person;
}

const TextField: React.FC<Props> = ({
  text,
  ok,
  i,
  fn,
  person: { firstName, lastName },
}) => {
  const [name, setName] = useState<{ text: string }>({ text: "" });
  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={divRef}>
      <input
        type="text"
        ref={inputRef}
        onChange={(e) => {
          setName({ text: e.target.value });
        }}
        value={name.text}
      />
    </div>
  );
};

export default TextField;
