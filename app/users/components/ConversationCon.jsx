/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
'use client';

import getAllQueries from '@/app/actions/getAllQueries';
import { useQuery } from '@tanstack/react-query';

import UserText from './UserText';
import ChatGptResponse from './ChatGptResponse';

import { ColorRing } from 'react-loader-spinner';

function ConversationCon({ currentUser }) {
  const { isLoading, data, error } = useQuery({
    queryKey: ['userquery'],
    queryFn: getAllQueries,
  });

  if (isLoading)
    return (
      <div className="flex items-center justify-center w-full h-full mx-auto">
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={[
            '#e15b64',
            '#f47e60',
            '#f8b26a',
            '#abbd81',
            '#849b87',
          ]}
        />
      </div>
    );

  if (data[0] === undefined) return <p>No Data</p>;

  return (
    <div className="h-full py-6 overflow-y-scroll text-left md:py-12 ">
      {data?.conversationIds[0]?.dataforCon?.map((cv, i) => {
        return (
          <>
            <UserText
              currentUser={currentUser}
              key={cv._id}
              cv={cv}
            />

            <ChatGptResponse cv={cv} key={i} />
          </>
        );
      })}
    </div>
  );
}

export default ConversationCon;
