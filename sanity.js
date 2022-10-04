import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
  projectId: "xn5ax2pk",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

// RUN THIS to add exception fro localhost 3000 CORS policy
// sanity cors add http://locahost:3000

export default client;
