import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

function PostFilter({filter, setFilter}) {

    function inputChange(e) {
        setFilter({...filter, query: e.target.value})
    }

    function selectChange(selectedSort) {
        setFilter({...filter, sort: selectedSort})
    }

    return (
        <div>
            <MyInput value={filter.query} placeholder='Serach...' onChange={inputChange}/>
            <MySelect
                value={filter.sort}
                onChange={selectChange}
                defaultValue='Sort by'
                options={[
                    {value: 'title', name: 'By Title'},
                    {value: 'body', name: 'By Direction'}
                ]}
            />
        </div>
    );
}

export default PostFilter;