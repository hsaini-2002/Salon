import { fetchPageData } from '@/lib/api/siteservice';
import PageContent from '@/components/PageContent';

export default async function AboutPage() {
  // Use 'd2d' as the subdomain and 'about' as the slug to fetch the same data
  const { page, sections, theme, config } = await fetchPageData('d2d', 'about');

  return (
    <PageContent 
      page={page}
      sections={sections}
      theme={theme}
      config={config}
    />
  );
} 