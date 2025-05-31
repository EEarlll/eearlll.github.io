import React, { useEffect, useRef, useState } from "react";
import removeMd from "remove-markdown";

type outputItem = {
  text?: string | React.JSX.Element;
  isCommand?: boolean;
};

type commandsProps = {
  input: string;
  output: outputItem[];
  setOutput: React.Dispatch<React.SetStateAction<outputItem[]>>;
};

const intro = {
  text: (
    <>
      <p className="text-green">Hey I'm Earlvin Eustacio.</p>
      <p className="text-amber-400">
        I made this little terminal thing because... well, I like messing around
        with code.
      </p>
      <br />
      <p className="text-blue-400">
        You can ask me anything—tech stuff, life advice, random shower
        thoughts... whatever’s on your mind.
      </p>
      <li className="text-red-400">Curious about code? Let’s dig in.</li>
      <li className="text-orange-400">
        Need help thinking something through? I’m all ears.
      </li>
      <li className="text-yellow">Just feel like chatting? I’m down.</li>
    </>
  ),
};

const commands = {
  chat: async ({ input, output, setOutput }: commandsProps) => {
    const apikey = import.meta.env.VITE_API_KEY;
    const model = "gemini-2.0-flash";
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apikey}`;
    const conversation = output
      .filter((item) => typeof item.text === "string")
      .map((item) => {
        if (item.isCommand && typeof item.text === "string") {
          return { role: "user", text: item.text?.replace(/^>\s*/, "") || "" };
        } else {
          return { role: "model", text: item.text as string };
        }
      });

    conversation.push({ role: "user", text: input });

    const contents = conversation.map((msg) => ({
      role: msg.role,
      parts: [{ text: msg.text }],
    }));

    const requestBody = {
      system_instruction: {
        parts: [
          {
            text: import.meta.env.VITE_SYSTEM_INSTRUCTION,
          },
        ],
      },
      contents,
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      console.error(response);
      output.push({ text: "Error: Unable to connect to AI service." });
      setOutput([...output]);
      return;
    }

    const data = await response.json();
    const md_data = data?.candidates[0]?.content?.parts[0]?.text;
    const text_data = removeMd(md_data);

    if (text_data) {
      output.push({ text: text_data });
      setOutput([...output]);
    } else {
      output.push({ text: "No response from AI." });
      setOutput([...output]);
    }
  },
};

function runCommands({ input, output, setOutput }: commandsProps) {
  if (input === "") {
    setOutput([...output, { text: "Please enter a text." }]);
  }
  console.log("Input received:", input);
  output.push({ text: `> ${input}`, isCommand: true });
  commands["chat"]({ input: input, output, setOutput });
}

export default function AiChat() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<outputItem[]>([intro]);

  const inputElement = useRef(null);

  useEffect(() => {
    if (inputElement.current) {
      (inputElement.current as HTMLInputElement).focus();
    }
  }, []);

  return (
    <div className="h-[500px] p-2 md:p-10 bg-background text-xl text-left">
      <div className="h-[70%] overflow-hidden flex flex-col justify-end mb-4">
        {output.map((line, index) =>
          React.isValidElement(line.text) ? (
            <div key={index} className="text-secondary">
              {line.text}
            </div>
          ) : (
            <div
              key={index}
              className={`${
                line.isCommand ? "font-semibold text-secondary" : "text-text"
              }`}
            >
              {line.text}
            </div>
          )
        )}
      </div>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          runCommands({ input, output, setOutput });
          setInput("");
        }}
      >
        <div className="flex">
          <span className="pr-2 text-secondary">&#126;</span>

          <input
            type="text"
            onChange={(e) => {
              const input = e.target.value;
              setInput(input);
            }}
            value={input}
            ref={inputElement}
            className="w-full bg-transparent outline-none text-secondary"
          />
        </div>
      </form>
    </div>
  );
}
