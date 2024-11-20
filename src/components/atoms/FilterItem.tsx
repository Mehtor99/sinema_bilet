import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';




interface IFilterItemProps {
  type: string;
  title: string;
  isActive: boolean;
  values: string[]
}

function FilterItem(props: IFilterItemProps) {

  const {type,title,isActive,values} = props

  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);}

  
  return (
    <div className="col p-2">
      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{type}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
        
            {
              values.map((data,index)=>{
                return  <MenuItem key={index} value={data}>{data}</MenuItem>
              })
            }
        </Select>
      </FormControl>
    </Box>
    </div>
    
   
   
  
  );
}

export default FilterItem;
