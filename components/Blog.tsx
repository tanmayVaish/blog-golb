import React from 'react';
import ReactMarkdown from 'react-markdown';

export default function MarkdownToHtml() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ReactMarkdown>*React-Markdown* is **Awesome**</ReactMarkdown>
      </div>
    </div>
  );
}
