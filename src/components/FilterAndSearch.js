import React from 'react';
import MySelect from '../ui/select/MySelect';
import MyImput from '../ui/input/MyImput'


function FilterAndSearch ({filter, setFilter}) {

    
    return (
        <>
        <div className = "d-flex justify-content-between my-2"> 
        <MyImput
              className = "form-control"
              placeholder = "serch..."
              value = {filter.query}
              onChange={e=>setFilter({...filter, query: e.target.value})}
            />

        <MySelect
               defaultValue = "Shorted by"
               value = {filter.sort}
               onChange = {selected=> setFilter({...filter, sort: selected})}
            options = {[
               {value:"title", name:"Title"},
               {value:"body", name:"Body"}
            ]}
             />

        </div>   
        </>
    );
}

export default FilterAndSearch;