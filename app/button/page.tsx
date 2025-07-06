import React from 'react';
import { Button } from '@/components/ui/button';

'use client';

export default function ButtonPage() {
  function handleClick() {
    console.log('Button clicked! Throwing an error now...');
    throw new Error('Code has been broken!');
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Break the Code</h1>
      <Button onClick={handleClick} variant="default">
        Break Code
      </Button>
    </div>
  );
}
