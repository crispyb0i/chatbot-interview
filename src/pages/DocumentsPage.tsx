import React from 'react';
import { useAppContext } from '../context/AppContext';
import { highlightText } from '../utils/textUtils';

const DocumentsPage: React.FC = () => {
  const { searchQuery } = useAppContext();

  const paragraphs = [
    "Sed a arcu ex. Integer sodales porta lacus, at placerat risus volutpat id. Vestibulum sodales sodales augue in condimentum. Aenean fermentum mi eget cursus tempor. Proin feugiat cursus libero. Nunc tristique dapibus condimentum. Proin dignissim quam sed bibendum sodales. Donec consequat mollis velit, non ornare eros bibendum ac. Sed gravida velit a mi dignissim egestas. Donec nec feugiat ipsum. Curabitur fringilla magna eu rhoncus consequat. Sed volutpat aliquam lobortis. Integer tempor velit id augue facilisis, eget fringilla nisl tincidunt. Quisque eleifend luctus neque. Donec semper orci imperdiet pharetra rhoncus. Aliquam erat volutpat.",
    "In luctus nisi vel ligula blandit convallis. In iaculis sem sed nulla venenatis aliquet. Sed malesuada interdum enim, a interdum odio gravida ut. Quisque dapibus eleifend mi, non semper neque. Praesent pretium tellus sem, in suscipit orci consequat eu. Ut ac iaculis magna, eget congue magna. Proin id mi sit amet est semper rhoncus. Pellentesque ante nulla, placerat eget volutpat in, tempor vel augue.",
    "Mauris id augue et ligula tristique facilisis id eget arcu. Maecenas metus arcu, tristique vel fringilla in, molestie eu diam. Morbi tempus fringilla ex, ac luctus urna. Cras nec tortor lobortis, porttitor lorem quis, luctus libero. Pellentesque ut porttitor est. Aenean eleifend, urna et sollicitudin dictum, velit odio venenatis orci, quis tempor sapien ligula eget ante. Phasellus quis lacus augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam posuere iaculis mattis.",
    "Pellentesque eget aliquam diam, sed feugiat ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus quis eros at erat scelerisque dapibus id a nulla. Sed placerat tortor ac sodales aliquam. Nam nec tristique nulla, ac tempus elit. Suspendisse potenti. Integer vestibulum iaculis tempus.",
    "Sed convallis eros eu nibh aliquet porttitor. Praesent imperdiet elementum interdum. Cras ut bibendum elit. Donec diam lacus, elementum vel semper non, finibus id dolor. Nam orci nibh, blandit ut arcu vitae, vehicula maximus dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam odio quam, tincidunt ut scelerisque sed, vehicula mattis eros. Cras varius vitae velit tincidunt porta. Aenean vel purus massa. Sed suscipit blandit tellus eu hendrerit. Nam non turpis vel dolor placerat accumsan sit amet vitae odio. Etiam sodales ante eros, ac sodales velit convallis sit amet. Nulla vulputate libero sem, a sagittis risus tincidunt quis. Vivamus at tortor in lorem egestas accumsan ut quis ex.",
    "Maecenas semper urna nec ultricies suscipit. Donec faucibus porttitor tincidunt. Vestibulum eu maximus massa, non suscipit nisl. Vestibulum convallis purus non porttitor tincidunt. Pellentesque vulputate lacus et imperdiet luctus. Duis et vulputate diam. Aliquam erat volutpat. Vivamus at risus justo.",
    "Donec egestas lacinia eros quis lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi eu scelerisque nunc. Aliquam placerat condimentum elit quis dictum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean mollis ligula leo, ac mollis dolor ultricies nec. Integer blandit ac ligula lacinia posuere. Phasellus eleifend urna sit amet lacinia tristique.",
    "Sed vel dignissim mi. Vestibulum fringilla leo ex, in mollis neque gravida at. Phasellus volutpat risus pulvinar, imperdiet dolor vel, condimentum odio. Nunc et cursus ante, eu hendrerit enim. Vestibulum finibus sem velit, non tempus nisl aliquet et. Suspendisse non varius libero, at placerat nisl. Integer vel leo pulvinar, aliquet tellus non, rutrum dolor.",
    "Pellentesque sed lectus varius, finibus neque sed, ultricies nisi. Vestibulum eleifend ligula eget est mattis tristique. Phasellus a molestie metus. In hac habitasse platea dictumst. Proin convallis turpis eget eleifend porttitor. Vestibulum pretium suscipit dui eget venenatis. Maecenas ullamcorper quam vel nisi mattis malesuada. Aliquam lorem dolor, ullamcorper in diam et, tristique ullamcorper tellus. Praesent at luctus metus, sit amet pulvinar justo.",
    "Praesent lacus sem, venenatis ac massa placerat, vestibulum varius nibh. Donec accumsan magna sed purus bibendum accumsan. Sed vehicula arcu id metus ultrices blandit. Praesent scelerisque, nunc sit amet sodales ultrices, ipsum diam commodo dui, tincidunt vehicula est magna in justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum elementum nibh lacus, at cursus lectus ultrices sed. Morbi volutpat ex erat, eget tristique turpis placerat ac. Phasellus et metus vel ligula feugiat tempor quis sit amet nibh. Fusce arcu turpis, laoreet in sem non, eleifend porttitor lacus. Vivamus efficitur, sem ut dignissim ultrices, diam lorem malesuada metus, sit amet consequat felis ex vitae tellus. Donec condimentum pharetra fringilla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec tristique feugiat dolor, id cursus nisl lobortis et. Nam non orci in ligula auctor aliquam. Etiam eget arcu sed ex sodales elementum a et nulla. In hac habitasse platea dictumst."
  ];

  // Filter paragraphs based on search query
  const filteredParagraphs = searchQuery
    ? paragraphs.filter((p) => p.toLowerCase().includes(searchQuery.toLowerCase()))
    : paragraphs;

  return (
    <div className="max-w-4xl mx-auto mt-20">
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