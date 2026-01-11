import { Metadata } from 'next';
import { SupportSection } from '@/components/support/support-section';

export const metadata: Metadata = {
  title: 'Support - Get Help with Appointik',
  description: 'Get support for Appointik clinic management software. Contact us via email, WhatsApp, or use our contact form.',
};

export default function SupportPage() {
  return (
    <div className="pt-16">
      <SupportSection />
    </div>
  );
}