// Functions
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const getPageData = async(pageSlug: string) => {
  try {
    const response = await fetch(`${apiUrl}/pages?slug=${pageSlug}&_fields=acf`, {
      next: { revalidate: 60}
    });
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    
    return data[0];
  } catch (error) {
    console.log(error)
  }
}
export const getImage = async (imageId: string) => {
  try {
    const response = await fetch(`${apiUrl}/media/${imageId}?_fields=source_url`);
    if (!response.ok) {
      throw new Error('Failed to fetch image');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching image:', error);
    return null;
  }
}