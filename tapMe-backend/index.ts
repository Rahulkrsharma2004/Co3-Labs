import 'dotenv/config'; // Ensure this is at the top to load env variables
import { createYoga } from 'graphql-yoga';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { createServer } from 'http';
import { userResolver } from './resolvers/userResolver';
import { userSchema } from './schema/userSchema';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
if (!supabaseUrl || !supabaseKey) {
  throw new Error('Supabase URL and key must be provided in environment variables');
}
const supabase = createClient(supabaseUrl, supabaseKey);
const schema = makeExecutableSchema({
  typeDefs: userSchema,
  resolvers: userResolver,
});
const yoga = createYoga({ schema });
const server = createServer(yoga);
server.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
});
