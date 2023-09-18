import OpenAI from 'openai';

async function putContentUser(content) {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });
  const { choices } = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: `${content}` }],
  });

  return choices[0].message.content;
}

export default putContentUser;
