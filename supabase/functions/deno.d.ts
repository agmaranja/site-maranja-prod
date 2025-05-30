declare namespace Deno {
  export interface Env {
    get(key: string): string | undefined;
  }
  
  export const env: Env;
}

declare module "https://deno.land/std@0.168.0/http/server.ts" {
  export interface ServeInit {
    port?: number;
    hostname?: string;
    handler: (request: Request) => Response | Promise<Response>;
  }

  export function serve(handler: (request: Request) => Response | Promise<Response>, init?: ServeInit): void;
}

declare module "https://esm.sh/@supabase/supabase-js@2.38.4" {
  export * from "@supabase/supabase-js";
} 