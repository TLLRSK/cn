// Functions
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const getPageData = async (pageSlug: string) => {
  try {
    const response = await fetch(
      `${apiUrl}/pages?slug=${pageSlug}&_fields=acf`,
      {
        next: { revalidate: 60 },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch home page data");
    }
    const data = await response.json();

    return data[0];
  } catch (error) {
    console.log(error);
  }
};
export const getImage = async (imageId: number) => {
  try {
    const response = await fetch(
      `${apiUrl}/media/${imageId}?_fields=source_url`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch image");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching image:", error);
    return null;
  }
};
export const getPostsData = async () => {
  try {
    const response = await fetch(
      `${apiUrl}/posts`,
      {
        next: { revalidate: 3000 },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch posts data");
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
