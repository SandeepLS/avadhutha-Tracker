import React from 'react'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { useRoutes } from 'react-router-dom';

import RootRouteComponent from './RootRouteComponent';
import RegisterRouteComponent from './RegisterRouteComponent';
import PasswordRouteComponent from './PasswordRouteComponent';
import ProfileRouteComponent from './ProfileRouteComponent';
import RecoverRouteComponent from './RecoverRouteComponent';
import ResetRouteComponent from './ResetRouteComponent';
import MapRouteComponent from './MapRouteComponent';
import PngRouteComponent from './PngRouteComponent';


const routes = [
    {
      path: '/',
      element: <RootRouteComponent />
    },
    {
      path: '/register',
      element: <RegisterRouteComponent />
    },
    {
      path: '/password',
      element: <PasswordRouteComponent />
    },
    {
      path: '/profile',
      element: <ProfileRouteComponent />
    },
    {
      path: '/recovery',
      element: <RecoverRouteComponent />
    },
    {
      path: '/reset',
      element: <ResetRouteComponent />
    },

    {
      path: '/map',
      element: <MapRouteComponent />
    },
    {
      path: '*',
      element: <PngRouteComponent />
    },
  ];

  const FirstComponent = () => {
    const routing = useRoutes(routes);
  
    return (
      <div>
        <main>
          {routing}
        </main>
      </div>
    );
  };
  
  export default FirstComponent;

// /** root routes */
// const router = createBrowserRouter([
//     {
//         path : '/',
//         element : <div>Root Route</div>
//     },
//     {
//         path : '/register',
//         element : <div>Register Route</div>
//     },
// ])



// export default function first() {

//     const routing = useRoutes(routes);
//   return (
//     <div>
//     <main>
//                 {/* <RouterProvider router={router}></RouterProvider> */}
//                 {routing}
//    </main>

//     </div>
//   )
// }
