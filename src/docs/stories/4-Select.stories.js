import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/pro-light-svg-icons';
import Select from '../../components/atom/select/Select';
import Wrapper from '../../helpers/wrapper/Wrapper';
import Spacer from '../../components/molecule/spacer/Spacer';

export default {
  title: 'Select',
  component: Select
};

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'Coconut', label: 'Coconut' }
];

const placeholder = 'Selecione...';
const noOptionsMessage = () => 'Nenhuma opção';

export const Default = () => (
  <Wrapper>
    <Select options={options} placeholder={placeholder} value={options[3]} isClearable />
  </Wrapper>
);

export const withIcon = () => (
  <Wrapper>
    <Select options={options} placeholder={placeholder} value={options[3]} icon={<FontAwesomeIcon icon={faLink} />} />
  </Wrapper>
);

export const MultiSelect = () => (
  <Wrapper>
    <Select options={options} placeholder={placeholder} noOptionsMessage={noOptionsMessage} multiple />
  </Wrapper>
);

export const SearchableOff = () => (
  <Wrapper>
    <Select
      options={options}
      placeholder="Digite para encontrar uma opção"
      noOptionsMessage={noOptionsMessage}
      searchable={false}
    />
  </Wrapper>
);

export const Disabled = () => (
  <Wrapper>
    <Select
      isDisabled
      options={options}
      value={options[3]}
      placeholder="Digite para encontrar uma opção"
      noOptionsMessage={noOptionsMessage}
      searchable={false}
    />
  </Wrapper>
);

export const types = () => (
  <Wrapper>
    <Select options={options} placeholder={placeholder} noOptionsMessage={noOptionsMessage} />
    <Spacer myLg={1} myMd={1} mySm={1} myXs={1}>
      <Select
        options={options}
        placeholder={placeholder}
        noOptionsMessage={noOptionsMessage}
        icon={<FontAwesomeIcon icon={faLink} />}
      />
    </Spacer>
    <Select options={options} placeholder="Approved" approved />
    <Spacer myLg={1} myMd={1} mySm={1} myXs={1}>
      <Select options={options} placeholder="Rejected" rejected />
    </Spacer>
    <Select options={options} placeholder="Pending" pending isClearable />
    <Spacer myLg={1} myMd={1} mySm={1} myXs={1}>
      <Select options={options} placeholder="Dark" noOptionsMessage={noOptionsMessage} dark isClearable />
    </Spacer>
  </Wrapper>
);

export const smallTypes = () => (
  <Wrapper>
    <Select options={options} placeholder={placeholder} noOptionsMessage={noOptionsMessage} small />
    <Spacer myLg={1} myMd={1} mySm={1} myXs={1}>
      <Select
        options={options}
        placeholder={placeholder}
        noOptionsMessage={noOptionsMessage}
        small
        icon={<FontAwesomeIcon icon={faLink} />}
      />
    </Spacer>
    <Select options={options} placeholder="Approved" small approved />
    <Spacer myLg={1} myMd={1} mySm={1} myXs={1}>
      <Select options={options} placeholder="Rejected" small rejected />
    </Spacer>
    <Select options={options} placeholder="Pending" small pending isClearable />
    <Spacer myLg={1} myMd={1} mySm={1} myXs={1}>
      <Select options={options} placeholder="Dark" noOptionsMessage={noOptionsMessage} dark small isClearable />
    </Spacer>
  </Wrapper>
);
