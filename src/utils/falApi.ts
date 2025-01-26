import { fal } from "@fal-ai/client";

// Initialize the fal client with the API key
fal.config({
  credentials: import.meta.env.FAL_KEY || '',
});

// Define types based on the API documentation
interface FluxInput {
  prompt: string;
  image_size?: string;
  num_inference_steps?: number;
  num_images?: number;
}

interface FluxImage {
  url: string;
  content_type: string;
}

interface FluxResponse {
  images: FluxImage[];
  prompt: string;
  timings?: any;
  seed?: number;
  has_nsfw_concepts?: boolean[];
}

interface TrellisInput {
  image_url: string;
  texture_size?: string;
  ss_guidance_strength?: number;
  ss_sampling_steps?: number;
  slat_guidance_strength?: number;
  slat_sampling_steps?: number;
  mesh_simplify?: number;
}

interface TrellisResponse {
  model_mesh: {
    url: string;
    content_type: string;
    file_name: string;
    file_size: number;
  };
  timings?: any;
}

export const generateConceptImage = async (prompt: string): Promise<string> => {
  try {
    console.log('Generating concept image with prompt:', prompt);
    const result = await fal.subscribe("fal-ai/flux/schnell", {
      input: {
        prompt,
        image_size: "landscape_16_9",
        num_inference_steps: 50,
        num_images: 1,
      } as FluxInput,
      logs: true,
      onQueueUpdate: (update) => {
        if (update.status === "IN_PROGRESS") {
          update.logs.map((log) => log.message).forEach(console.log);
        }
      },
    });
    
    console.log('Generated image result:', result);
    if (!result.images?.[0]?.url) {
      throw new Error('No image URL in response');
    }
    
    return result.images[0].url;
  } catch (error) {
    console.error("Error generating concept image:", error);
    throw error;
  }
};

export const convertToThreeD = async (imageUrl: string): Promise<string> => {
  try {
    console.log('Converting image to 3D:', imageUrl);
    const result = await fal.subscribe("fal-ai/trellis", {
      input: {
        image_url: imageUrl,
        texture_size: "2048",
        ss_guidance_strength: 7.5,
        ss_sampling_steps: 12,
        slat_guidance_strength: 3,
        slat_sampling_steps: 12,
        mesh_simplify: 0.95,
      } as TrellisInput,
      logs: true,
      onQueueUpdate: (update) => {
        if (update.status === "IN_PROGRESS") {
          update.logs.map((log) => log.message).forEach(console.log);
        }
      },
    });
    
    console.log('3D conversion result:', result);
    if (!result.model_mesh?.url) {
      throw new Error('No model URL in response');
    }
    
    return result.model_mesh.url;
  } catch (error) {
    console.error("Error converting to 3D:", error);
    throw error;
  }
};