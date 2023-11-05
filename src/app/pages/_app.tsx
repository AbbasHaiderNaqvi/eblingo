import '../styles/globals.css'; // Import your global styles here
import { AppProps, AppType } from 'next/app';

const App: AppType = ({Component, ...pageProps}: AppProps) => {  // You can add layout components or other global configurations here
  return <Component {...pageProps} />;
}
export default App;
