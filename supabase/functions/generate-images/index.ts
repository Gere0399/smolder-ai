import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { fal } from "npm:@fal-ai/serverless-client";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const falKey = Deno.env.get('FAL_KEY');
    if (!falKey) {
      throw new Error('FAL_KEY not found in environment variables');
    }

    fal.config({ credentials: falKey });
    
    const { prompt, step } = await req.json();
    console.log(`Processing ${step} with prompt: ${prompt}`);

    if (step === 'concept') {
      const result = await fal.subscribe("fal-ai/flux/schnell", {
        input: {
          prompt,
          image_size: "landscape_16_9" as const,
          num_inference_steps: 50,
          num_images: 1,
        },
        logs: true,
        onQueueUpdate: (update) => {
          if (update.status === "IN_PROGRESS") {
            console.log('Generation progress:', update.logs);
          }
        },
      });

      console.log('Concept generation result:', result);
      return new Response(JSON.stringify({ 
        imageUrl: result.data?.images?.[0]?.url 
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    if (step === 'model') {
      const result = await fal.subscribe("fal-ai/trellis", {
        input: {
          image_url: prompt, // In this case, prompt is the image URL
          texture_size: "2048" as const,
          ss_guidance_strength: 7.5,
          ss_sampling_steps: 12,
          slat_guidance_strength: 3,
          slat_sampling_steps: 12,
          mesh_simplify: 0.95,
        },
        logs: true,
        onQueueUpdate: (update) => {
          if (update.status === "IN_PROGRESS") {
            console.log('3D conversion progress:', update.logs);
          }
        },
      });

      console.log('3D model generation result:', result);
      return new Response(JSON.stringify({ 
        modelUrl: result.data?.model_mesh?.url 
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    throw new Error('Invalid step specified');
  } catch (error) {
    console.error('Error in generate-images function:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});