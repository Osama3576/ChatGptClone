'use client';
import addUserQuery from '@/app/actions/addUserQuery';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoMdSend } from 'react-icons/io';
import {
  BiSolidMicrophone,
  BiSolidMicrophoneOff,
} from 'react-icons/bi';
import MicroPhone from './MicroPhone';
import { Audio } from 'react-loader-spinner';
///////////////////Voice Imports
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
// import commands from '@/app/actions/getCommands';

function ChatInput() {
  const queryClient = useQueryClient();
  const [green, setColorGreen] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [speechRecognitionSupported, setSpeechRecognitionSupported] =
    useState(null);
  const { mutate, isLoading: isAdding } = useMutation({
    mutationFn: data => addUserQuery(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userquery'] });
    },
    onError: err => toast.error(err.message),
  });

  const {
    register,
    handleSubmit,
    formState: { isDirty, dirtyFields },
    reset,
    setValue,
  } = useForm({
    defaultValues: {
      text: '',
    },
  });
  useEffect(() => {
    if (isDirty) {
      setColorGreen(true);
    }

    return () => setColorGreen(false);
  }, [isDirty]);

  const {
    resetTranscript,
    transcript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const startListening = () =>
    SpeechRecognition.startListening({
      continuous: true,
      language: 'en-IN',
    });

  useEffect(() => {
    // sets to true or false after component has been mounted
    setSpeechRecognitionSupported(browserSupportsSpeechRecognition);
  }, [browserSupportsSpeechRecognition]);

  if (speechRecognitionSupported === null) return null; // return null on first render, can be a loading indicator

  if (!speechRecognitionSupported) {
    return <span>Browser does not support speech recognition.</span>;
  }

  function onSubmit(data) {
    mutate(data);
    reset();
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      handleSubmit(onSubmit)();
      reset();
    }
  }

  function handleSpeakClick() {
    startListening();
    setSpeaking(true);
  }
  function handleStopClick() {
    SpeechRecognition.stopListening();
    setValue('text', transcript);
    setSpeaking(false);
    resetTranscript();
  }

  return (
    <div className="fixed bottom-0 bg-[#ffffff] w-full border-t-2 md:border-0 text-center">
      {speaking && (
        <div className="absolute top-0 right-[44rem] z-50">
          <Audio
            height="50"
            width="50"
            color="#4fa94d"
            ariaLabel="audio-loading"
            wrapperStyle={{}}
            wrapperClass="wrapper-class"
            visible={true}
          />
        </div>
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative my-2 max-w-[672px] md:ml-[10%] xl:ml-[30%] lg:ml-[20%] left-0 p-2"
      >
        <textarea
          id="text"
          {...register('text')}
          className="w-full h-[3rem] px-2 py-2 border-2 rounded-lg shadow-md focus:outline-none"
          type="text"
          placeholder="Send a message"
          onKeyDown={handleKeyDown}
        />

        <button
          disabled={isAdding}
          type="submit"
          className={`${
            green &&
            'bg-green-400 rounded-md w-7 h-7 flex items-center justify-center top-[16px]'
          } absolute  right-5 ${!green && 'top-5'}`}
        >
          <IoMdSend
            className={`${green && 'fill-white'} fill-slate-400`}
            size="1.3rem"
          />
        </button>

        {!speaking && (
          <MicroPhone
            icon={BiSolidMicrophone}
            title="Turn on speach to text"
            onClick={handleSpeakClick}
          />
        )}
        {speaking && (
          <MicroPhone
            icon={BiSolidMicrophoneOff}
            title="Turn off speach to text"
            onClick={handleStopClick}
          />
        )}
      </form>

      <span className="text-[12px] text-slate-600">
        Free Research Preview. ChatGPT may produce inaccurate
        information about people, places, or facts.{' '}
        <a
          href="https://help.openai.com/en/articles/6825453-chatgpt-release-notes"
          target="_blank"
          className="underline"
        >
          ChatGPT August 3 Version
        </a>
      </span>
    </div>
  );
}

export default ChatInput;
