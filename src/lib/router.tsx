import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '@/layouts/RootLayout';
import { HomePage } from '@/pages/HomePage';
import { APPage } from '@/pages/APPage';
import { SATPage } from '@/pages/SATPage';
import { UniversityPlanningPage } from '@/pages/UniversityPlanningPage';
import { ResourcesPage } from '@/pages/ResourcesPage';
import { AboutPage } from '@/pages/AboutPage';
import { BookConsultationPage } from '@/pages/BookConsultationPage';
import { ThankYouPage } from '@/pages/ThankYouPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'ap', element: <APPage /> },
      { path: 'sat', element: <SATPage /> },
      { path: 'university-planning', element: <UniversityPlanningPage /> },
      { path: 'resources', element: <ResourcesPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'book-a-consultation', element: <BookConsultationPage /> },
      { path: 'thank-you', element: <ThankYouPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
