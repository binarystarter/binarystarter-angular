/**
 * It is set here because we need inside payload cms.
 * If we add it part of the crypto nestjs module, generating types will complain
 * because of decorators
 */
import {
  createCipheriv,
  createDecipheriv,
  createHash,
  randomBytes,
} from 'crypto';

export const algorithm = 'aes-256-ctr';

export const hashSecret = (secret: string) => {
  return createHash('sha256').update(String(secret)).digest();
};

export const encryptText = (text: string, secret: string): string => {
  const iv = randomBytes(16);
  const cipher = createCipheriv(algorithm, hashSecret(secret), iv);
  const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
  return iv.toString('hex') + ':' + encrypted.toString('hex');
};

export const decryptText = (text: string, secret: string): string => {
  const parts = text.split(':');
  const iv = Buffer.from(parts.shift(), 'hex');
  const encryptedText = Buffer.from(parts.join(':'), 'hex');
  const decipher = createDecipheriv(algorithm, hashSecret(secret), iv);
  const decrypted = Buffer.concat([
    decipher.update(encryptedText),
    decipher.final(),
  ]);
  return decrypted.toString();
};
