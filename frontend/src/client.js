import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "du8mqcrl", // find this at manage.sanity.io or in your sanity.json
  apiVersion: "2021-03-25", // use a UTC date string
  dataset: "production", // this is from those question during 'sanity init'
  useCdn: true,
});
