"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductImageProps {
  candidates: string[];      // ordered list of paths to try
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean;
  placeholder?: React.ReactNode; // custom placeholder; defaults to elegant box
}

export default function ProductImage({
  candidates,
  alt,
  className = "",
  style,
  priority = false,
  placeholder,
}: ProductImageProps) {
  const [idx, setIdx] = useState(0);
  const [failed, setFailed] = useState(false);

  const handleError = () => {
    if (idx < candidates.length - 1) {
      setIdx(idx + 1);
    } else {
      setFailed(true);
    }
  };

  if (failed) {
    return placeholder ? (
      <>{placeholder}</>
    ) : (
      <DefaultPlaceholder alt={alt} />
    );
  }

  return (
    <Image
      key={candidates[idx]}
      src={candidates[idx]}
      alt={alt}
      fill
      priority={priority}
      onError={handleError}
      className={`object-contain ${className}`}
      style={style}
    />
  );
}

function DefaultPlaceholder({ alt }: { alt: string }) {
  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl"
      style={{
        border: "1px dashed rgba(0,191,255,0.2)",
        background:
          "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,191,255,0.015) 10px, rgba(0,191,255,0.015) 20px)",
      }}
    >
      {/* Corner marks */}
      <span className="absolute top-3 left-3 w-5 h-5 border-t border-l border-electric-blue/30" />
      <span className="absolute top-3 right-3 w-5 h-5 border-t border-r border-electric-blue/30" />
      <span className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-electric-blue/30" />
      <span className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-electric-blue/30" />

      <div className="text-center px-6">
        {/* Icon */}
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          className="mx-auto mb-4 opacity-30"
          aria-hidden="true"
        >
          <rect x="12" y="4" width="16" height="32" rx="3" stroke="#00BFFF" strokeWidth="1.5" />
          <line x1="20" y1="4" x2="20" y2="36" stroke="#00BFFF" strokeWidth="0.8" strokeDasharray="3 3" />
          <rect x="14" y="8"  width="12" height="6" rx="1" fill="#00BFFF" opacity="0.15" />
          <rect x="14" y="26" width="12" height="6" rx="1" fill="#00BFFF" opacity="0.15" />
        </svg>
        <p className="font-mono text-xs tracking-[0.25em] text-electric-blue/40 uppercase leading-relaxed">
          Product render
          <br />
          will appear here
        </p>
        <p className="mt-3 font-mono text-[10px] text-white/15 tracking-wider uppercase">
          {alt}
        </p>
      </div>
    </div>
  );
}
