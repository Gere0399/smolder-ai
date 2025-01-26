import { fal } from "@fal-ai/client";

// Initialize the fal client with the API key
fal.config({
  credentials: import.meta.env.FAL_KEY,
});

export const generateConceptImage = async (prompt: string) => {
  try {
    const result = await fal.subscribe("fal-ai/flux/schnell", {
      input: {
        prompt,
        image_size: "landscape_4_3",
        num_inference_steps: 4,
        num_images: 1,
      },
    });
    return result.data.images[0].url;
  } catch (error) {
    console.error("Error generating concept image:", error);
    throw error;
  }
};

export const convertToThreeD = async (imageUrl: string) => {
  try {
    const result = await fal.subscribe("fal-ai/trellis", {
      input: {
        image_url: imageUrl,
        texture_size: "2048" as "512" | "1024" | "1536" | "2048",
      },
    });
    return result.data.model_mesh.url;
  } catch (error) {
    console.error("Error converting to 3D:", error);
    throw error;
  }
};