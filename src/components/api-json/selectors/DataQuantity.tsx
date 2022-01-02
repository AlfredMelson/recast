import * as React from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import Box from '@mui/material/Box'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import { VolumeSelector } from '../../../cms/verbiage'
import { apiRequestQuantityAtom, selectedApiAtom } from '../ApiUrlSelector'
import { PaperSxApiSelectorWrapper } from '../../mui'

export default function DataQuantitySelector() {
  const setSelectedApi = useRecoilValue(selectedApiAtom)

  const setApiRequestQuantity = useSetRecoilState(apiRequestQuantityAtom)

  // filter base from BaseUrlData using selected provider (apiProvider)
  // const baseUrl = BaseUrlData.filter(base => base.index === apiProvider)[0].base

  // const providerUrls = apiProvider === 'jsonPlaceholderApi' ? JsonPlaceholderData : RandomData

  // set max number requests to 10
  // const maxRequests = 10
  // const initialPostRequest = '1'

  // const [postRequests, setPostRequests] = React.useState<string>(initialPostRequest)

  // const handleChange = (event: SelectChangeEvent) => {
  //   setPostRequests(event.target.value as string)
  //   // setSelectedApi(`${baseUrl}${event.target.value}${postRequests}`)
  // }

  const [value, setValue] = React.useState('1')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value)
    setApiRequestQuantity(`${setSelectedApi}${event.target.value}`)
  }

  return (
    <Box component='div'>
      {setSelectedApi !== '' && (
        <PaperSxApiSelectorWrapper>
          <FormControl component='fieldset' sx={{ m: 10 }}>
            <RadioGroup
              row
              id='provider-url-selector'
              aria-label='volume'
              name='row-radio-buttons-group'
              value={value}
              onChange={handleChange}>
              {VolumeSelector.map(item => (
                <FormControlLabel
                  key={item.index}
                  sx={{ px: 6 }}
                  value={item.value}
                  control={<Radio />}
                  label={item.name}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </PaperSxApiSelectorWrapper>
      )}
    </Box>
  )
}
