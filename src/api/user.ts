import { Api, Post, Validate } from '@midwayjs/hooks';
import { z } from 'zod';
import { prisma } from './prisma';

export const signUp = Api(
  Post(),
  async (name: string, email: string) => {
    const result = await prisma.user.create({
      data: {
        name,
        email,
      },
    });
    return result;
  }
);
