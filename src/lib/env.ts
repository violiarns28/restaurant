import {
  nonEmpty,
  number,
  object,
  parse,
  pipe,
  string,
  transform,
  url,
} from 'valibot';

const EnvSchema = object({
  DATABASE_URL: pipe(string(), nonEmpty(), url()),
  PORT: pipe(string(), nonEmpty(), transform(Number)),
});

export const env = parse(EnvSchema, Bun.env);
