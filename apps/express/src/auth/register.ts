import { UserRoles } from '@binarystarter-angular/backend-only/payloadcms';
import { Request, Response } from 'express';
import payload from 'payload';
import { User } from '@binarystarter-angular/shared-types';

export const registerPath = 'register';
export const register = async (req: Request, res: Response) => {
  const userData: Pick<
    User,
    'firstName' | 'lastName' | 'username' | 'email' | 'password'
  > & { confirmPassword: string } = req.body;

  await payload.create({
    collection: 'users',
    data: {
      ...userData,
      verified: false,
      roles: [UserRoles.user],
      _verified: false,
    },
  });

  res.send(
    JSON.stringify({
      message: 'A verification email has been sent. Please check your email.',
    }),
  );
};

export const verifyAccountPath = 'verify/:token';
export const verifyAccount = async (req: Request, res: Response) => {
  const { token } = req.params;
  const data: { email: string } = req.body;

  const { email } = data;
  const userQueryRes = await payload.find({
    collection: 'users',
    where: {
      email: {
        equals: email,
      },
    },
    limit: 1,
    showHiddenFields: true,
  });

  if (!userQueryRes.docs.length) {
    return res
      .status(400)
      .send(
        new Error(
          "We couldn't find any account associated with this email address.",
        ),
      );
  }

  const user = userQueryRes.docs[0];

  if (user._verificationToken !== token) {
    return res
      .status(403)
      .send(
        new Error(
          'You are not allowed to do this. Please double check your email address.',
        ),
      );
  }

  // User already proved that the email was equal to the one getting verified
  // and also provided the password.
  // Succeed verification and login.
  return JSON.stringify(
    await payload.verifyEmail({ collection: 'users', token }),
  );
};
