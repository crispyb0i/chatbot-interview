import React from 'react';
import { useAppContext } from '../context/AppContext';
import { highlightText } from '../utils/textUtils';

const AppsPage: React.FC = () => {
  const { searchQuery } = useAppContext();

  const paragraphs = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut gravida urna a eros scelerisque commodo. Quisque bibendum dolor ultricies, molestie sem lacinia, maximus enim. Donec congue dolor nibh. Nullam purus lectus, auctor at est sit amet, interdum vulputate ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent interdum leo nibh, vitae lacinia urna accumsan sed. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec nec felis a urna faucibus blandit sit amet at neque. Cras ut dignissim nisl, id placerat orci.",
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    "Curabitur laoreet orci eu tempor ullamcorper. Fusce luctus cursus mauris ac ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce vehicula, lacus blandit malesuada mollis, elit elit scelerisque magna, id ornare tortor sapien at dui. Vestibulum vel neque congue, iaculis turpis sed, laoreet felis. Mauris at risus orci. Duis non leo volutpat, hendrerit metus et, consequat felis. Sed rhoncus vehicula nulla, eu iaculis ligula dictum sed. Curabitur consectetur diam egestas, eleifend diam nec, dictum purus. Donec et sapien ultricies, rhoncus neque eu, finibus sem. Nam aliquet, massa in volutpat consectetur, quam augue rhoncus nisi, nec sollicitudin nibh urna et enim. Donec fermentum urna vel faucibus sollicitudin. Sed sodales urna in turpis commodo tincidunt eget in tellus. Nullam fringilla, sem nec accumsan pretium, risus libero auctor nisi, in lobortis nunc est nec mauris.",
    "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse vitae elit condimentum risus lobortis feugiat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc vitae sapien non massa sodales scelerisque. Integer convallis nunc et ultrices porta. Fusce consectetur facilisis ligula eget vestibulum. Morbi vestibulum enim tortor, nec feugiat mi efficitur vitae. Vivamus laoreet ac odio in finibus. Vivamus volutpat nisl diam, et fringilla quam molestie eu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam odio est, rutrum vel tortor a, bibendum semper mauris. Fusce euismod mattis malesuada. Suspendisse pretium scelerisque vulputate. Praesent porta tortor urna, sed sollicitudin tortor mollis id.",
    "Fusce tristique pretium libero, id rutrum diam fermentum at. Nulla luctus velit at ex dignissim, fermentum hendrerit lectus pretium. Cras sed finibus nulla. Nunc in ex porta, lobortis ante vitae, vestibulum urna. Pellentesque et felis et lorem blandit tincidunt eu nec orci. Proin nec euismod orci, eget imperdiet nisl. Quisque aliquet iaculis auctor. Donec vitae metus eu mauris scelerisque vulputate. Duis eros felis, gravida vel consequat eu, fringilla sed nibh. Nam ornare justo nec elit auctor, at blandit est dictum. Quisque non accumsan metus. In malesuada diam eu ligula bibendum rutrum. Suspendisse auctor, turpis id faucibus ultricies, lectus lacus faucibus tellus, ut laoreet lacus risus nec urna.",
    "Ut efficitur, arcu sit amet iaculis congue, dui erat luctus magna, id dapibus turpis turpis ac tellus. Etiam sed efficitur arcu. Fusce sed orci fermentum massa gravida ornare. Nulla at egestas est. Quisque tincidunt mauris ac dui sollicitudin euismod. Sed pulvinar turpis in sem posuere dignissim. Aenean in lacinia nunc, vitae condimentum felis. Donec ut velit non diam consequat commodo. Sed nec finibus lacus. Vestibulum elementum, est et finibus cursus, lectus mauris fringilla risus, sed porta diam ipsum imperdiet metus. Maecenas scelerisque ornare justo sed tristique. Donec sem massa, pulvinar eget aliquet placerat, scelerisque sed est.",
    "Sed lobortis ac arcu in porta. Morbi quis suscipit purus. Proin eget aliquet metus. Sed vestibulum placerat neque consequat accumsan. Nam efficitur, velit nec venenatis varius, odio enim facilisis nunc, interdum blandit massa orci id justo. Nam faucibus non felis sed porttitor. Suspendisse interdum vel lectus in ultricies. Nunc vulputate sapien sagittis lacus viverra ornare. Mauris vel tempus sem. Phasellus vitae sapien luctus, mattis dui sollicitudin, fermentum lectus.",
    "Mauris porta erat nec risus pulvinar, malesuada euismod arcu feugiat. Etiam sed turpis arcu. Suspendisse ut risus augue. Integer auctor sed lacus hendrerit tincidunt. Cras eu venenatis mauris, vel tempus massa. Maecenas condimentum felis a ex tempor, nec volutpat nibh semper. Cras et ullamcorper lacus, nec lobortis metus. Aenean sed egestas lacus. Curabitur nec neque consequat justo dictum varius eget nec est. Proin convallis sollicitudin tortor, et tincidunt enim aliquet vitae.",
    "Mauris vitae erat vitae nunc viverra sollicitudin. Morbi pulvinar suscipit pellentesque. Integer rhoncus, risus a rutrum imperdiet, nunc turpis suscipit magna, sollicitudin commodo massa lectus varius velit. Etiam semper nulla libero. Donec in purus nec arcu ullamcorper auctor sit amet feugiat velit. Morbi accumsan ligula feugiat diam tristique, nec facilisis ex pulvinar. Sed ac neque quis leo pulvinar viverra ut vitae nisl. Praesent placerat sem venenatis ligula commodo faucibus. Donec faucibus lacinia tortor, non aliquet nibh venenatis id. Mauris est dui, facilisis in porta non, tincidunt a nunc.",
    "Nulla at dolor auctor, condimentum erat at, semper nisl. Vestibulum consectetur lectus neque, sed blandit ex egestas quis. Sed convallis venenatis erat, vel imperdiet ex varius varius. Nam vehicula, nisi sed viverra tincidunt, purus dui scelerisque metus, eu imperdiet nunc tortor non urna. Duis eu quam quis sapien efficitur rhoncus nec sed neque. Pellentesque diam nisl, consectetur a rhoncus at, vestibulum vel nisl. Integer ullamcorper velit nisl, eget semper quam luctus sit amet. Duis porttitor nunc eu fermentum hendrerit. Aliquam ac mollis turpis. Sed aliquet quam at dapibus dapibus. Nulla quis ligula nec mauris maximus consequat ac vel quam. Nunc vel tempor velit. Fusce posuere dolor magna, a gravida lacus feugiat nec. Etiam hendrerit semper convallis."
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