import { supabase } from "@/integrations/supabase/client";

export const generateConceptImage = async (prompt: string): Promise<string> => {
  try {
    console.log('Generating concept image with prompt:', prompt);
    
    const { data, error } = await supabase.functions.invoke('generate-images', {
      body: { prompt, step: 'concept' }
    });

    if (error) throw error;
    if (!data?.imageUrl) throw new Error('No image URL in response');
    
    console.log('Generated image result:', data);
    return data.imageUrl;
  } catch (error) {
    console.error("Error generating concept image:", error);
    throw error;
  }
};

export const convertToThreeD = async (imageUrl: string): Promise<string> => {
  try {
    console.log('Converting image to 3D:', imageUrl);
    
    const { data, error } = await supabase.functions.invoke('generate-images', {
      body: { prompt: imageUrl, step: 'model' }
    });

    if (error) throw error;
    if (!data?.modelUrl) throw new Error('No model URL in response');
    
    console.log('3D conversion result:', data);
    return data.modelUrl;
  } catch (error) {
    console.error("Error converting to 3D:", error);
    throw error;
  }
};