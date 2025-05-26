import { fetchPageData } from '@/lib/api/siteservice';
import PageContent from '@/components/PageContent';

export default async function ServicesPage() {
  const subdomain = 'd2d'; // This should match your site's subdomain
  const slug = 'services';
  
  const { page, sections, theme, config } = await fetchPageData(subdomain, slug);

  return (
    <PageContent 
      page={page}
      sections={sections}
      theme={theme}
      config={config}
    />
  );
} 