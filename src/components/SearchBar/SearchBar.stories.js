import React from 'react';

import { SearchBar } from './SearchBar';

export default {
  title: 'SearchBar',
  component: SearchBar,
};

const Template = (args) => <SearchBar {...args} />;

export const Search = Template.bind({});
Search.args = {
  championsList: [
    { value: 'Aatrox', label: 'Aatrox' },
    { value: 'Akali', label: 'Akali' },
    { value: 'Annie', label: 'Annie' },
    { value: 'Camille', label: 'Camille' },
    { value: 'Cassiopeia', label: 'Cassiopeia' },
    { value: "Cho'Gath", label: "Cho'Gath" },
    { value: 'Darius', label: 'Darius' },
    { value: 'Diana', label: 'Diana' },
    { value: 'Dr. Mundo', label: 'Dr. Mundo' },
    { value: 'Ekko', label: 'Ekko' },
    { value: 'Fiora', label: 'Fiora' }
  ],
};

