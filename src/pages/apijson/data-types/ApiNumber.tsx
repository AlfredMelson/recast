import * as React from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { green, purple } from '@mui/material/colors'
import Input from '@mui/material/Input'
import { useRecoilState } from 'recoil'
import { ButtonGroup } from '@mui/material'
import { SxApiEditIconButton } from '../../../components/sx/SxIconButton'
import ApiEditHighlighter from '../../../components/action/ApiEditHighlighter'
import { ApiDeleteIcon } from '../../../components/icons/ApiDeleteIcon'
import { ApiCloseIcon } from '../../../components/icons/ApiCloseIcon'
import { ApiApplyIcon } from '../../../components/icons/ApiApplyIcon'
import { selectedElementAtom } from '../display/EditResponse'
import ApiDataTypeLabel from './ApiDataTypeLabel'
import { ApiNumberAlias } from './typeAliases'

export function ApiNumber({ index, value, dataKey, dataType, onEdit, onDelete }: ApiNumberAlias) {
  console.log('ApiNumber : index', index)

  const [selectedElement, setSelectedElement] = useRecoilState(selectedElementAtom)

  const [currentValue, setCurrentValue] = React.useState<ApiNumberAlias['value'] | any>()

  React.useEffect(() => {
    setCurrentValue(value)
  }, [value])

  const handleNumberEdit = () => {
    onEdit(currentValue, dataKey)
    setSelectedElement(null)
  }

  const handleNumberDelete = () => {
    onDelete(dataKey)
    setSelectedElement(null)
  }

  const handleCancelNumberEdit = () => {
    setSelectedElement(null)
  }

  return (
    <Box sx={{ ml: 4.8, cursor: 'pointer' }}>
      <ApiEditHighlighter selected={selectedElement === index} direction='row'>
        {selectedElement === index ? (
          <Stack direction='row' justifyContent='center' alignItems='flex-end'>
            <Typography variant='code'>&#34;{dataKey}&#34;&#58;&nbsp;</Typography>
            <ApiDataTypeLabel type={dataType} variant='edit' />
            <Input
              autoFocus
              defaultValue={currentValue}
              onChange={event => {
                setCurrentValue(event.target.value)
              }}
            />
            <ButtonGroup variant='text'>
              <SxApiEditIconButton onClick={handleNumberEdit}>
                <ApiApplyIcon
                  sx={{
                    color: theme =>
                      theme.palette.mode === 'dark'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[900],
                    mr: 0.5,
                    '&:hover ': {
                      color: theme => (theme.palette.mode === 'dark' ? green[500] : green[600]),
                    },
                  }}
                />
              </SxApiEditIconButton>
              <SxApiEditIconButton onClick={handleNumberDelete}>
                <ApiDeleteIcon />
              </SxApiEditIconButton>
              <SxApiEditIconButton onClick={handleCancelNumberEdit}>
                <ApiCloseIcon />
              </SxApiEditIconButton>
            </ButtonGroup>
          </Stack>
        ) : (
          <Stack direction='row' onClick={() => setSelectedElement(index)}>
            <Typography variant='code'>&#34;{dataKey}&#34;&#58;&nbsp;</Typography>
            <ApiDataTypeLabel type={dataType} variant='edit' />
            <Typography variant='code' sx={{ color: purple[400] }}>
              {currentValue}
            </Typography>
          </Stack>
        )}
      </ApiEditHighlighter>
    </Box>
  )
}
