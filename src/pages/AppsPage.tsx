import React from 'react';
import { useAppContext } from '../context/AppContext';
import { highlightText } from '../utils/textUtils';

const AppsPage: React.FC = () => {
  const { searchQuery } = useAppContext();

  const paragraphs = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
    "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
    "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod.",
    "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates.",
    "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias.",
    "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis.",
    "Omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis.",
    "Nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea."
  ];

  // Filter paragraphs based on search query
  const filteredParagraphs = searchQuery
    ? paragraphs.filter((p) => p.toLowerCase().includes(searchQuery.toLowerCase()))
    : paragraphs;

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Apps</h1>
      
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

export default AppsPage;