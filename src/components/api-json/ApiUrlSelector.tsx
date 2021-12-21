import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

export default function ApiUrlSelector() {
  const [open, setOpen] = React.useState(false)
  const [age, setAge] = React.useState<number | string>('')

  const handleChange = (event: SelectChangeEvent<typeof age>) => {
    setAge(Number(event.target.value) || '')
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = (event: React.SyntheticEvent<unknown>, reason?: string) => {
    event.preventDefault
    if (reason !== 'backdropClick') {
      setOpen(false)
    }
  }

  return (
    <div>
      <Button onClick={handleClickOpen}>Data options</Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Fill the form</DialogTitle>
        <DialogContent sx={{ minWidth: 300 }}>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id='demo-dialog-select-label'>Age</InputLabel>
            <Select
              labelId='demo-dialog-select-label'
              id='demo-dialog-select'
              value={age}
              onChange={handleChange}
              input={<OutlinedInput label='Age' />}>
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
