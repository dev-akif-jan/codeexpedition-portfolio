import React from 'react';
import Container from '../ui/Container';
import SuccessStoryCard from './SuccessStoryCard';
import { successStoriesContent } from './successStoriesData';

const SuccessStoriesGrid = ({ successStories }) => {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        {successStories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((study, idx) => (
              <SuccessStoryCard key={study.id} study={study} index={idx} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-text-secondary">
              {successStoriesContent.noResultsMessage}
            </p>
          </div>
        )}
      </Container>
    </section>
  );
};

export default SuccessStoriesGrid;
