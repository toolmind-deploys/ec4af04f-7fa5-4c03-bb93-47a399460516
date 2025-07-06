import React from 'react';

// Intentionally missing closing brace and parenthesis to cause a build-time error
export default function ErrorPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div>
        <h1 className="text-2xl font-bold mb-4">This page will cause a build-time error</h1>
        <p>Try building your Next.js project and watch it fail due to the syntax error!</p>
