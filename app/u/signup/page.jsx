/* eslint-disable react/no-unescaped-entities */
'use client';

import Mainlayout from '../layout';

import MainForm from '../components/MainForm';
export default function SignupPage() {
  return (
    <Mainlayout>
      <MainForm variant="sign up" />
    </Mainlayout>
  );
}
