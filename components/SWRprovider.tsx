import { SWRConfig } from "swr";
export interface SWRProviderProps {
  children: React.ReactNode;

}
//The children prop in the SWRProvider component is essential for enabling any 
//components wrapped by SWRProvider to access the context values defined by SWRConfig.
const SWRProvider = ({ children }: SWRProviderProps) => {
  return (
    <SWRConfig
      value={{
        fetcher: async (...args: [string, RequestInit?]) => {
          const response = await fetch(...args); // args is equivalent to url, options
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
export default SWRProvider;
