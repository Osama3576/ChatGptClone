/* eslint-disable react/no-unescaped-entities */
'use client';

import { useState } from 'react';
import Mainlayout from '../layout';
import MainForm from '../components/MainForm';
export default function LoginPage() {
  return (
    <Mainlayout>
      <MainForm variant="login" />
    </Mainlayout>
  );
}
