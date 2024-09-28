import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
dotenv.config();

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_KEY!);

export const userResolver = {
  Query: {
    getUser: async (_: any, { id }: any) => {
      const { data, error } = await supabase.from('users').select('*').eq('id', id).single();
      if (error) throw new Error(error.message);
      return data;
    },
  },
  Mutation: {
    addCoins: async (_: any, { id, coins }: any) => {
      const { data, error } = await supabase
        .from('users')
        .update({ coins })
        .eq('id', id)
        .single();
      if (error) throw new Error(error.message);
      return data;
    },
  },
};

