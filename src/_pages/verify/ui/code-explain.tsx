"use client";
import { FC, useState, useEffect } from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Loader } from "@/src/widgets/Loader";
import { MarkdownPreview } from "./mark-down-preview";

interface CodeExplainProps {
  content: string;
}

export const CodeExplain: FC<CodeExplainProps> = ({ content }) => {
  const [explainContent, setExplainContent] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const getExplainContentByAi = async (content: string) => {
    setIsLoading(true);
    const result = await fetch("api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content }),
    });
    const { text } = await result.json();
    setIsLoading(false);
    setExplainContent(text);
  };

  useEffect(() => {
    getExplainContentByAi(content);
  }, [content]);

  return (
    <div className="border rounded-lg shadow-sm h-[600px] flex mt-4">
      <div className="flex-1 flex flex-col">
        <div className="p-4 border-b">
          <TooltipProvider delayDuration={100}>
            <h3 className="font-semibold">
              Code Explain By AI (Gemini 1.5 Flash 8B)
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="inline-flex items-center text-[#E9D502] ml-2 text-[0.9em] cursor-pointer">
                    &#9888;
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs">
                    Please note that AI code assistance is a reference tool <br />
                    and may not always provide complete or accurate explanations.
                    <br />
                    It is continuously improving but should not be fully relied upon.
                  </p>
                </TooltipContent>
              </Tooltip>
            </h3>
          </TooltipProvider>
        </div>
        {isLoading ? (
          <div className="flex-1 flex items-center justify-center">
            <Loader size={32} />
          </div>
        ) : (
          <ScrollArea className="flex-1">
            <MarkdownPreview markdown={explainContent || ""} />
          </ScrollArea>
        )}
      </div>
    </div>
  );
};
