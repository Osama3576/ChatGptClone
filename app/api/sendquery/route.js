import putContentUser from '@/app/actions/getAi';
import getSession from '@/app/actions/getSession';
import dbConnect from '@/app/libs/dbConnect';
import ConversationModel from '@/app/models/ConversationModel';

import User from '@/app/models/UserModel';

import { NextResponse } from 'next/server';
export async function POST(request) {
  try {
    await dbConnect();

    const session = await getSession();

    // user query
    const body = await request.json();
    const { text } = body;

    // adding query to chatgpt
    const chatGptResponse = await putContentUser(text);

    const filter = { email: session.user.email };
    const update = {
      $push: {
        dataforCon: {
          text: text,
          content: chatGptResponse,
        },
      },
    };

    await ConversationModel.findOneAndUpdate(filter, update);

    ///////////////////////////////////////////////
    const conversationOfUser = await ConversationModel.findOne({
      email: session.user.email,
    });

    const conversationId = conversationOfUser._id;
    const updateConversationIds = {
      $addToSet: { conversationIds: conversationId },
    };

    await User.findOneAndUpdate(filter, updateConversationIds);

    return NextResponse.json('sucessfully updated', {
      status: 200,
    });
  } catch (error) {
    console.log(error, 'ERROR_MESSAGES');
    return new NextResponse('Error', { status: 500 });
  }
}
export async function GET() {
  try {
    await dbConnect();
    const session = await getSession();
    const loggedInUserEmail = session.user.email;
    const user = await User.findOne({
      email: loggedInUserEmail,
    }).populate('conversationIds');
    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
  }
}
//getting chat gpt response and saving to db
//   const newConversation = await ConversationModel.create({
//  email:
//   });
// const conversationId = newConversation._id;

// const newGptResponse = await GptModel.create({
//   content: chatGptResponse,
// });
// saving user query to db
// const newUserQuery = await UserQuery.create({ text });

// Chat gtp response id and qury ids
// const chatGptResponseId = newGptResponse._id;
// const queryId = newUserQuery._id;

// Use $push to append to the existing array

// updating conversation id in user model

// const updateGptIds = {
//   $push: { chatGptQueriesIds: chatGptResponseId },
// };
// await User.findOneAndUpdate(filter, updateGptIds);
// Save the updated user document
