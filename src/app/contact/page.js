import { fetchPageData } from '@/lib/api/siteservice';
import PageContent from '@/components/PageContent';

export default async function ContactPage() {
  // Use 'd2d' as the subdomain and 'contact' as the slug to fetch the data
  const { page, sections, theme, config } = await fetchPageData('d2d', 'contact');

  return (
    <PageContent 
      page={page}
      sections={sections}
      theme={theme}
      config={config}
    />
  );
} 