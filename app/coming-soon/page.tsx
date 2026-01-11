import { Metadata } from 'next';
import { ComingSoonSection } from '@/components/coming-soon/coming-soon-section';

export const metadata: Metadata = {
  title: 'Coming Soon - Appointik',
  description: 'This feature is coming soon. Stay tuned for updates from Appointik.',
};

export default function ComingSoonPage() {
  return (
    <div className="pt-16">
      <ComingSoonSection />
    </div>
  );
}