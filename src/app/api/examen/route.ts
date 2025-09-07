'use server';

import { generatePerQuiz } from '@/ai/flows/examen';
import { appRoute } from '@genkit-ai/nextjs';

export const POST = appRoute({
  flow: generatePerQuiz,
  auth: {
    // This is a temporary solution to allow all authenticated users.
    // In a real application, you should implement proper authorization.
    policy: 'user',
    // Uncomment and configure if you need to check for specific roles or permissions.
    // async handler(user) {
    //   // TODO: Check if the user has the required roles/permissions from your database.
    //   // For example:
    //   // const userRoles = await getUserRoles(user.uid);
    //   // if (!userRoles.includes('premium')) {
    //   //   throw new Error('User does not have premium access.');
    //   // }
    // },
  },
  // We can enable streaming responses for flows that support it.
  // stream: true,
});
