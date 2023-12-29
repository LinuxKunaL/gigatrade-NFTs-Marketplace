import { NFTStorage } from "nft.storage";

const client = new NFTStorage({
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGVGNjI1REVFNTE5OTA0YTU1OTU2OTJEMjdmRjMyOTAyQUI4NEY1NEMiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTcwMjA5MzA0NTQ3MSwibmFtZSI6Imt1bmFsLkV0aCJ9.Zi7s2GLOoBjXjsLWldvqHq5jrZBObQv_RBTdQn3eXIA",
});

const UploadMetadata = async (metadata) => {
  try {
    const response = await client.store({
      name: metadata.name,
      description: metadata.description,
      image: metadata.image,
      properties: metadata.properties,
    });
    return response;
  } catch (error) {
    console.error(error + " in UploadMetadata (useNFTstorage)");
  }
};

export { UploadMetadata };
