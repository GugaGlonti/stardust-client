import { RouterProvider, useRouteError } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';

import { QueryClientProvider, QueryClient } from 'react-query';

import RootLayout, { loadProfileData } from './Pages/Layouts/RootLayout';

import HomePage from './Pages/HomePage';
import SignInPage from './Pages/SignInPage';
import SignUpPage from './Pages/SignUpPage';
import JokerPage from './Pages/JokerPage';
import RoulettePage from './Pages/RoulettePage';
import ProfilePage, { profilePageLoader } from './Pages/ProfilePage';
import SettingsPage from './Pages/SettingsPage';
import NotificationPage from './Pages/NotificationPage';
import { AuthProvider } from './store/auth.provider';
import MessageMain from './modules/Message/MessageMain/MessageMain';
import MessagePageLayout from './Pages/Layouts/MessagePageLayout';
import MessageProfile, { messageProfileLoader } from './modules/Message/MessageProfile/MessageProfile';

//prettier-ignore
const router = createBrowserRouter([
  {
    /** @root */
    path: '', id: 'root', element: <RootLayout />, errorElement: <ErrorBoundary />, loader: loadProfileData,
    
    children: [
      /** @page Home Page */
      { path: '', id: 'home', element: <HomePage /> },

      
      /** @page Joker Game */
      { path: 'joker', id: 'joker', element: <JokerPage /> },

      
      /** @page Roulette Game */
      { path: 'roulette', id: 'roulette', element: <RoulettePage /> },

      
      /** @page Notifications Page */
      { path: 'notification', id: 'notification', element: <NotificationPage /> },


      /** @page Messages Page */
      { path: 'messages', id: 'messages', element: <MessagePageLayout />, children: [

        { path: '', id: 'chats' },

        { path: ':chatId', id: 'chat', element: <><MessageMain /><MessageProfile /></>, loader: messageProfileLoader },
      ] },

      
      /** @page Profile Page */
      { path: ':username', id: 'profile', element: <ProfilePage /> , loader: profilePageLoader },

      
      /** @page Settings Page */
      { path: 'settings', id: 'settings', element: <SettingsPage /> },
    ],
  },

  /** @page Sign In Page */
  { path: 'signin', element: <SignInPage />, errorElement: <h1>Route Not Found</h1> },


  /** @page Sign Up Page */
  { path: 'signup', element: <SignUpPage />, errorElement: <h1>Route Not Found</h1> },
]);

const queryClient = new QueryClient();

export default function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  );
}

function ErrorBoundary() {
  const error = useRouteError() as Error;
  return <div className='flex justify-center m-32 text-xl'>{error.message}</div>;
}
