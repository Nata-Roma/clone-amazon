import clsx from 'clsx';
import { FC, useState } from 'react';
import styled from 'styled-components';
import {
  IHeaderOptions,
  IHeaderSearch,
} from '../../../utils/interfaces/interfaceHeader';
import styles from './header.module.css';

interface HeaderSearchProps {
  config: IHeaderSearch;
}

const HeaderSearch: FC<HeaderSearchProps> = ({ config }) => {
  const [selected, setSelected] = useState(config.options[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const openedSelect = clsx(styles.selectSelected, {
    [styles.selectArrowActive]: isOpen,
  });

  const openedOptions = clsx({
    [styles.selectHide]: !isOpen,
  });

  const onSelectOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const onSelectOption = (option: IHeaderOptions) => {
    setSelected(option);
    onSelectOpen();
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <SearchContainer>
      <CustomSelect>
        <OptionSelected className={openedSelect} onClick={onSelectOpen}>
          {selected.content}
        </OptionSelected>
        <SelectItems className={openedOptions}>
          {config.options.map((item) => (
            <SelectOption
              key={item.name}
              onClick={() => onSelectOption(item)}
              className={clsx({
                [styles.sameAsSelected]: selected.name === item.name,
              })}
            >
              {item.content}
            </SelectOption>
          ))}
        </SelectItems>
      </CustomSelect>
      <SearchInput type='text' value={searchValue} onChange={onInputChange} />
      <SearchIcon>
        <span className='iconify' data-icon='ant-design:search-outlined'></span>
      </SearchIcon>
    </SearchContainer>
  );
};

export default HeaderSearch;

const SearchContainer = styled.div`
  display: flex;
  flex-grow: 1;
  border-radius: 5px;
  padding: 10px 4px;
  position: relative;
  align-items: center;
`;

const SearchIcon = styled.button`
  flex-shrink: 0;
  border-radius: 0 5px 5px 0;
  background-color: ${({ theme }) => theme.colors.yellow[400]};
  width: 45px;
  height: 40px;
  font-size: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: ${({ theme }) => theme.colors.yellow[500]};
  }
`;

const SearchInput = styled.input`
  flex-grow: 1;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 7px 10px 10px 0;
  font-size: 15px;
  height: 40px;
`;
const CustomSelect = styled.div`
  position: relative;
  flex-shrink: 0;
  height: 40px;
`;

const OptionSelected = styled.div`
  background-color: #eee;
  border-radius: 5px 0 0 5px;
  font-size: 14px;
  line-height: 23px;
  color: #333;
  padding: 8px 24px 8px 8px;
  border: 1px solid transparent;
  border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
  cursor: pointer;
  width: auto;
  white-space: nowrap;
`;
const SelectItems = styled.div`
  position: absolute;
  background-color: #eee;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;
  font-size: 14px;
`;

const SelectOption = styled.div`
  padding: 8px 24px 8px 8px;
  border: 1px solid transparent;
  border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
  cursor: pointer;
  width: auto;
  white-space: nowrap;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
