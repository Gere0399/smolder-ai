import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { fal } from "npm:@fal-ai/serverless-client";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { 
      status: 204, 
      headers: corsHeaders 
    });
  }

  try {
    const falKey = Deno.env.get('FAL_KEY');
    if (!falKey) {
      console.error('FAL_KEY not found in environment variables');
      throw new Error('FAL_KEY not configured');
    }

    // Configure FAL client
    fal.config({ credentials: falKey });
    
    // Parse request body
    const { prompt, step } = await req.json();
    console.log(`Processing ${step} with prompt:`, prompt);

    if (step === 'concept') {
      console.log('Starting concept image generation...');
      const result = await fal.subscribe("fal-ai/flux/schnell", {
        input: {
          prompt,
          image_size: "landscape_16_9",
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

      if (!result?.data?.images?.[0]?.url) {
        console.error('No image URL in FAL.ai response:', result);
        throw new Error('Failed to generate image');
      }

      console.log('Successfully generated concept image');
      return new Response(
        JSON.stringify({ 
          success: true,
          imageUrl: result.data.images[0].url 
        }), 
        { 
          status: 200,
          headers: { 
            ...corsHeaders, 
            'Content-Type': 'application/json' 
          }
        }
      );
    }

    if (step === 'model') {
      console.log('Starting 3D model generation...');
      const result = await fal.subscribe("fal-ai/trellis", {
        input: {
          image_url: prompt,
          texture_size: "2048",
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

      if (!result?.data?.model_mesh?.url) {
        console.error('No model URL in FAL.ai response:', result);
        throw new Error('Failed to generate 3D model');
      }

      console.log('Successfully generated 3D model');
      return new Response(
        JSON.stringify({ 
          success: true,
          modelUrl: result.data.model_mesh.url 
        }), 
        { 
          status: 200,
          headers: { 
            ...corsHeaders, 
            'Content-Type': 'application/json' 
          }
        }
      );
    }

    throw new Error('Invalid step specified');
  } catch (error) {
    console.error('Error in generate-images function:', error);
    return new Response(
      JSON.stringify({ 
        success: false,
        error: 'An unexpected error occurred', 
        details: error.message,
        timestamp: new Date().toISOString()
      }), 
      {
        status: 500,
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        },
      }
    );
  }
});