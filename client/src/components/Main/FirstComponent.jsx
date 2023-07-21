import React from 'react'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { useRoutes } from 'react-router-dom';

import RootRouteComponent from './RootRouteComponent';
import RegisterRouteComponent from './RegisterRouteComponent';

const routes = [
    {
      path: '/',
      element: <RootRouteComponent />
    },
    {
      path: '/register',
      element: <RegisterRouteComponent />
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
