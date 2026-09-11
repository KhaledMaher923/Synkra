import { useTheme } from '../../context/ThemeContext.jsx';
import { mainEditorialGridData, newsletterData, paginationData } from '../../data/mainEditorialGridData.js';
import EditorialCard from './EditorialCard.jsx';
import NewsletterCard from './NewsletterCard.jsx';
import PaginationFooter from './PaginationFooter.jsx';

export default function MainEditorialGrid() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const regularArticles = mainEditorialGridData.filter(item => !item.isFeatured);
  const featuredArticles = mainEditorialGridData.filter(item => item.isFeatured);

  return (
    <section className={`w-full py-16 px-16 max-lg:py-10 max-lg:px-6 transition-colors duration-300 ${isDark ? 'bg-dark-theme text-semi-white' : 'bg-light-theme text-dark-theme'}`}>
      <div className="w-full space-y-6 sm:space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularArticles.map((article) => (
            <EditorialCard 
              key={article.id} 
              article={article} 
              isFeatured={false} 
              isDark={isDark} 
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredArticles.map((featured) => (
            <EditorialCard 
              key={featured.id} 
              article={featured} 
              isFeatured={true} 
              isDark={isDark} 
            />
          ))}

          <NewsletterCard 
            data={newsletterData} 
          />
        </div>

        <PaginationFooter 
          data={paginationData} 
          isDark={isDark} 
        />
      </div>
    </section>
  );
}