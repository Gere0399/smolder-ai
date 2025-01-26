import { fal } from "@fal-ai/client";

// Initialize the fal client with the API key
fal.config({
  credentials: import.meta.env.FAL_KEY || '',
});

// Define types for the API responses
interface FluxImage {
  url: string;
}

interface FluxResponse {
  images: FluxImage[];
}

interface TrellisModelMesh {
  url: string;
}

interface TrellisResponse {
  model_mesh: TrellisModelMesh;
}

export const generateConceptImage = async (prompt: string): Promise<string> => {
  try {
    console.log('Generating concept image with prompt:', prompt);
    const result = await fal.subscribe<FluxResponse>("fal-ai/flux", {
      input: {
        prompt,
        image_size: "landscape_16_9",
        num_inference_steps: 50,
        scheduler: "dpm++",
        num_images: 1,
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
    const result = await fal.subscribe<TrellisResponse>("fal-ai/trellis", {
      input: {
        image_url: imageUrl,
        texture_size: "2048" as "512" | "1024" | "1536" | "2048",
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