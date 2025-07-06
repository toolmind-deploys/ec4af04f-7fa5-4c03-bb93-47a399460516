'use client'

import * as React from 'react';
import { Button } from '@/components/ui/button';

export default function ButtonPage() {
  function handleClick() {
    console.log('Button clicked - breaking the page...');
    throw new Error('The page has been broken.');
  }

  return (
    <main className="flex items-center justify-center h-screen">
      <Button variant="default" onClick={handleClick}>
        Break the Page
      </Button>
    </main>
  );
}
