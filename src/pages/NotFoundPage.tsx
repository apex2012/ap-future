import { Link } from 'react-router-dom';
import { PageContainer } from '@/components/ui/PageContainer';

export function NotFoundPage() {
  return (
    <PageContainer className="py-24 text-center">
      <p className="text-6xl font-bold text-neutral-300">404</p>
      <p className="mt-4 text-lg text-neutral-600">Page not found</p>
      <Link
        to="/"
        className="mt-6 inline-block text-sm font-medium text-primary-600 hover:text-primary-700"
      >
        Return home
      </Link>
    </PageContainer>
  );
}
