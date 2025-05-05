import React from 'react';
import { useAppContext } from '../context/AppContext';
import { highlightText } from '../utils/textUtils';

const DocumentsPage: React.FC = () => {
  const { searchQuery } = useAppContext();

  const paragraphs = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc id aliquam tincidunt.",
    "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed dapibus.",
    "Fusce suscipit varius mi. Cum sociis natoque penatibus et magnis dis parturient montes.",
    "Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi nulla, quis sem at.",
    "Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Sed hendrerit.",
    "Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in.",
    "Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros.",
    "Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget.",
    "Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem.",
    "Suspendisse eu ligula. Cum sociis natoque penatibus et magnis dis parturient montes.",
    "Cras ornare tristique elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    "Praesent vestibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta.",
    "Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
    "Maecenas aliquet mollis lectus. Vivamus consectetuer risus et tortor. Lorem ipsum dolor sit.",
    "Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus."
  ];

  // Filter paragraphs based on search query
  const filteredParagraphs = searchQuery
    ? paragraphs.filter((p) => p.toLowerCase().includes(searchQuery.toLowerCase()))
    : paragraphs;

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Documents</h1>
      
      {filteredParagraphs.length === 0 ? (
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-gray-500 text-center">No results found for "{searchQuery}"</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredParagraphs.map((paragraph, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <p className="text-gray-700">
                {searchQuery ? highlightText(paragraph, searchQuery) : paragraph}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DocumentsPage;