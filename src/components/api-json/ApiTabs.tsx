import * as React from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import Box from '@mui/material/Box'
import _ from 'lodash'
import { useLocation } from 'react-router-dom'
import {
  apiDataAtom,
  apiFullResponseAtom,
  apiResponseHeadersAtom,
  userSubmittedUrlAtom,
  userToggledApiAtom,
} from '../../recoil/api-json/atom'
import DataResponse from '../../pages/api-json/display/DataResponse'
import EditResponse from '../../pages/api-json/display/EditResponse'
import FullResponse from '../../pages/api-json/display/FullResponse'
import DataHeaders from '../../pages/api-json/display/DataHeaders'
import { TsInterface } from '../../pages/api-json/display/TsInterface'
import { SvgTsLogoTs, SvgTsLogoDtype } from '../icons/SvgTsLogoTs'
import { TabSx } from '../mui/Tab.style'
import { TabsSx } from '../mui/Tabs.style'
import { DTypescript } from '../../pages/api-json/display/DTypescript'

type TabPanelAlias = {
  index: number
  value: number
  children?: React.ReactNode
}

function TabPanel({ children, value, index, ...other }: TabPanelAlias) {
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`apijson-tabpanel-${index}`}
      aria-labelledby={`apijson-tab-${index}`}
      {...other}>
      {value === index && children}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `apijson-tab-${index}`,
    'aria-controls': `apijson-tabpanel-${index}`,
  }
}

export default function ApiTabs() {
  // state when user submits user entered url
  const userSubmittedUrl = useRecoilValue(userSubmittedUrlAtom)
  // state of user toggled api response
  const setUserToggledApi = useSetRecoilState(userToggledApiAtom)
  // state of response.data returned from the api call
  const [apiData, setApiData] = useRecoilState(apiDataAtom)
  // state of full response returned from Axios api call
  const apiFullResponse = useRecoilValue(apiFullResponseAtom)
  // state of response.headers returned from fetch api call
  const apiResponseHeaders = useRecoilValue(apiResponseHeadersAtom)
  // dispatch tab panel
  const [value, setValue] = React.useState<number>(0)

  const handleDataTabs = (_event: React.SyntheticEvent, newResponse: number) => {
    setValue(newResponse)
  }

  // edit a property of the object
  const EditObj = (newValue, key) => {
    const newObj = apiData
    newObj[key] = newValue
    setApiData(apiData)
  }
  // delete a property of the object
  const DeleteObj = key => {
    setApiData(_.omit(apiData, key))
  }
  // split and pop to isolate d.ts file name
  // const lastSegment = userSubmittedUrl !== undefined && userSubmittedUrl.split('/').pop()

  // AnimatePresense
  const local = useLocation()

  return (
    <Box>
      {userSubmittedUrl !== undefined && (
        <React.Fragment>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabsSx
              key={local.pathname}
              aria-label='api data tabs'
              onChange={handleDataTabs}
              value={value}>
              <TabSx
                label='Data response'
                {...a11yProps(0)}
                onClick={() => setUserToggledApi('data')}
              />
              <TabSx
                label='Edit response'
                {...a11yProps(1)}
                onClick={() => setUserToggledApi('edit')}
              />
              <TabSx
                label='Full response'
                {...a11yProps(2)}
                onClick={() => setUserToggledApi('full')}
              />
              <TabSx
                label='Api Headers'
                {...a11yProps(3)}
                onClick={() => setUserToggledApi('headers')}
              />
              <TabSx
                icon={<SvgTsLogoTs />}
                iconPosition='start'
                label=' interface'
                {...a11yProps(4)}
                onClick={() => setUserToggledApi('ts')}
              />
              <TabSx
                icon={<SvgTsLogoDtype />}
                iconPosition='start'
                label=' * .d.ts'
                {...a11yProps(5)}
                onClick={() => setUserToggledApi('dtype')}
              />
            </TabsSx>
          </Box>
          <Box sx={{ position: 'relative', overflow: 'hidden' }}>
            <TabPanel value={value} index={0}>
              <DataResponse data={apiData} />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <EditResponse data={apiData} onDelete={DeleteObj} onEdit={EditObj} />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <FullResponse data={apiFullResponse} />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <DataHeaders data={apiResponseHeaders} />
            </TabPanel>
            <TabPanel value={value} index={4}>
              <TsInterface data={apiData} />
            </TabPanel>
            <TabPanel value={value} index={5}>
              <DTypescript data={apiData} />
            </TabPanel>
          </Box>
        </React.Fragment>
      )}
    </Box>
  )
}