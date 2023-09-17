'use client';
import {
  HiMiniSpeakerWave,
  HiMiniSpeakerXMark,
} from 'react-icons/hi2';
import { useSpeechSynthesis } from 'react-speech-kit';

function ChatGptResponse({ cv }) {
  const { speak, cancel, speaking } = useSpeechSynthesis();

  function handleSpeak() {
    speak({ text: cv.content });
  }
  function handleCancel() {
    cancel();
  }
  return (
    <div className="w-full px-2 md:px-0 py-6 bg-[#f7f7f8] pb-[10rem] relative">
      {!speaking && (
        <button
          onClick={handleSpeak}
          title="Listen"
          className="absolute top-[5px] right-8 md:right-[3rem] lg:right-[22rem]"
        >
          <HiMiniSpeakerWave size="1.3rem" />
        </button>
      )}
      {speaking && (
        <button
          onClick={handleCancel}
          title="stop"
          className="absolute top-[5px] right-8 md:right-[3rem] lg:right-[22rem]"
        >
          <HiMiniSpeakerXMark size="1.3rem" />
        </button>
      )}
      <p className="max-w-[672px] mx-auto">{cv.content}</p>
    </div>
  );
}

export default ChatGptResponse;
