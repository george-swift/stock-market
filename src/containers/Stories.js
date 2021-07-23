import { FaSpinner } from 'react-icons/fa';
import { useFetch } from '../api';
import Story from '../components/Story';

const Stories = () => {
  const { data: stories, error, loading } = useFetch('stock_news?limit=15');

  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        Something went wrong! Try reloading the page.
      </div>
    );
  }

  return (
    <>
      {loading && <p className="page-loading"><FaSpinner /></p>}
      {
        stories?.map((item) => {
          const [, date] = item.publishedDate.split(' ');
          return (
            <Story
              key={date}
              symbol={item.symbol}
              title={item.title}
              text={item.text}
              site={item.site}
            />
          );
        })
      }
    </>
  );
};

export default Stories;
