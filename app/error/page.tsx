import { FC } from 'react';

// This page intentionally contains a syntax error to break the build.
// Missing closing curly brace and parenthesis for the component declaration.

const ErrorPage: FC = () => {
  console.log('Rendering ErrorPage...');
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">This page will cause a build-time error</h1>
        <p>Try to build the project and this file's syntax error will fail the build.</p>
      </div>
    </main>
);

export default ErrorPage;