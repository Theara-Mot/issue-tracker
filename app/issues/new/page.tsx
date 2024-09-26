'use client';

import { Button, TextField } from '@radix-ui/themes';
import dynamic from 'next/dynamic';
import React from 'react';

// Dynamically import SimpleMDE with SSR disabled
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), { ssr: false });

import "easymde/dist/easymde.min.css";

const NewIssuePage = () => {
  return (
    <div className='max-w-xl space-y-3'>
      <TextField.Root placeholder="Search the docs…">
        <TextField.Slot></TextField.Slot>
      </TextField.Root>
      {/* SimpleMDE editor for client-side rendering only */}
      <SimpleMDE placeholder="Reply to comment…" />
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
