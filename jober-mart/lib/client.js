import { SanityClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";


export const client = SanityClient({
    projectId: '1v8zkkej',
    dataset: 'production',
    apiVersion: '2023-05-03',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);