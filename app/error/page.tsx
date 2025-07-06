'use server';

import React, { useEffect } from 'react';

// This page is intentionally using useEffect in a Server Component.
// Server Components do not allow useEffect, which will break the build.

export default function ErrorPage() {
  useEffect(() => {
    console.log('useEffect called in a server component, which is invalid.');
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Invalid Server Component Usage</h1>
        <p>
          This page attempts to use a client-side hook (useEffect) while marked as a server component.
          This will cause a build-time error.
        </p>
      </div>
    </main>
  );
}
