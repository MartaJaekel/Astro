import { SWRConfig } from "swr";
export const SWRProvider = ({ children }) => {
  return (
    <SWRConfig
      value={{
        fetcher: async (...args) => {
          const response = await fetch(...args);
          if (!response.ok) {
            throw new Error(`Request with ${JSON.stringify(args)} failed.`);
          }
          return await response.json();
        },
      }}
    >
      {children}
    </SWRConfig>
  );
};
