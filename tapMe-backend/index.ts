import { createYoga } from 'graphql-yoga';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { createServer } from 'http';
import { userResolver } from './resolvers/userResolver';
import { userSchema } from './schema/userSchema';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_KEY!);

const schema = makeExecutableSchema({
  typeDefs: userSchema,
  resolvers: userResolver,
});

const yoga = createYoga({ schema });

const server = createServer(yoga);

server.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
});
