import styled from 'styled-components'
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs'

export const WrapperTabs = styled(Tabs)`
  font-size: 16px;
  width: 100%;
  margin-top: 16px;
`

export const WrapperTablist = styled(TabList)`
  display: flex;

  list-style-type: none;

  padding: 4px;
  margin: 0;
`
WrapperTablist.tabsRole = 'Tablist'

export const WrapperTab = styled(Tab)`
  padding: 16px;
  border-radius: 16px;
  border: 1px solid #ccc;

  user-select: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &.is-selected {
    box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
  }
`

WrapperTab.tabsRole = 'Tab'

export const WrapperTabPanel = styled(TabPanel)`
  display: none;

  padding: 16px;
  margin-top: -5px;
  border: 1px solid #ccc;

  &.is-selected {
    display: block;
  }
`

WrapperTabPanel.tabsRole = 'TabPanel'

export const WrapperList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`
