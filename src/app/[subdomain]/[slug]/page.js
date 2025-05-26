import { fetchPageData } from '@/lib/api/siteservice';
import PageContent from '@/components/PageContent';

export default async function DynamicPage({ params }) {
  const { subdomain, slug } = params;
  
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