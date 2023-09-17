import 'regenerator-runtime/runtime';
import AuthContext from './context/AuthContext';
import QueryContext from './context/QueryContext';
import ToasterContext from './context/ToasterContext';
import './globals.css';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Chat-Gpt',
  description: 'An ai tool to send chat messages',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryContext>
          <AuthContext>
            <ToasterContext />
            {children}
          </AuthContext>
        </QueryContext>
      </body>
    </html>
  );
}
