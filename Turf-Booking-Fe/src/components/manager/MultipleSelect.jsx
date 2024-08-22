import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';





const names = [
  'Badminton',
  'Football',
  'Swimming',
  'Cricket',
  'Tennis',
  'Table Tennis',
];



export default function MultipleSelect({register,category,error}) {

  const [personName, setPersonName] = React.useState(['Football']);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    
      <FormControl className='mb-4 ps-1 py-1.5 rounded shadow  shadow-green-800 w-full'>
        
        <Select {...register(category)} 
         
          multiple
          value={personName}
          onChange={handleChange}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              
            >
              {name}
            </MenuItem>
          ))}
        </Select>
        {error && <p>{error.message}</p>}
      </FormControl>
    
  );
}
